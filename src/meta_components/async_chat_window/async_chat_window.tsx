import {
  type FC,
  type ReactNode,
  type UIEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export interface AsyncChatArtifact {
  id: string;
  name: string;
  title?: string;
  hasMermaid?: boolean;
}

export interface AsyncChatMessage {
  id: string;
  role: "USER" | "AGENT" | "ARTIFACT" | string;
  text: string;
  thoughts?: string;
  timestamp?: string;
  sortTsMs?: number;
  title?: string;
  artifacts?: AsyncChatArtifact[];
}

export interface AsyncChatTheme {
  canvasBg?: string;
  surfaceBg?: string;
  subtleBg?: string;
  borderColor?: string;
  primaryAccent?: string;
  textPrimary?: string;
  textSecondary?: string;
  fontSans?: string;
  fontMono?: string;
  baseFontSize?: number;
}

export interface AsyncChatWindowProps {
  messages: AsyncChatMessage[];
  resetKey?: string | number;
  windowSize?: number;
  estimatedItemHeight?: number;
  showThoughtsToggle?: boolean;
  defaultShowThoughts?: boolean;
  showInputBox?: boolean;
  inputPlaceholder?: string;
  onSendMessage?: (text: string) => Promise<void> | void;
  onRefresh?: () => Promise<void> | void;
  refreshIntervalMs?: number;
  onOpenArtifact?: (artifactId: string) => void;
  renderMarkdown?: (markdown: string) => ReactNode;
  headerSlot?: ReactNode;
  toolbarExtraSlot?: ReactNode;
  emptyStateText?: string;
  theme?: AsyncChatTheme;
  wsUrl?: string;
  wsSubscription?: Record<string, unknown>;
  mapRawPayloadToMessage?: (raw: any) => AsyncChatMessage;
  onWsMessagesUpdate?: (rawMessages: any[]) => void;
  paneId?: string;
}

export function formatCleanChatTimestamp(
  rawTimestamp?: string,
  fallbackMs?: number
): string {
  const candidate = (rawTimestamp || "").trim();
  if (candidate) {
    const cleaned = candidate
      .replace("T", " ")
      .replace(/\.\d+/, "")
      .replace(/(Z|[+-]\d{2}:\d{2})$/, "")
      .trim();
    if (/^\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}(:\d{2})?/.test(cleaned)) {
      return cleaned.slice(0, 19);
    }
    const parsed = Date.parse(candidate);
    if (Number.isFinite(parsed) && parsed > 0) {
      return new Date(parsed).toISOString().replace("T", " ").slice(0, 19);
    }
  }
  if (typeof fallbackMs === "number" && Number.isFinite(fallbackMs) && fallbackMs > 0) {
    return new Date(fallbackMs).toISOString().replace("T", " ").slice(0, 19);
  }
  return "";
}

export function sanitizeChatText(rawText: string): string {
  if (!rawText) return "";
  return rawText
    .replace(
      /The following is a[^\n]*not actually sent by the user[^\n]*/gi,
      ""
    )
    .replace(/<SYSTEM_MESSAGE>[\s\S]*?<\/SYSTEM_MESSAGE>/gi, "")
    .replace(/<ADDITIONAL_METADATA>[\s\S]*?<\/ADDITIONAL_METADATA>/gi, "")
    .replace(/<\/?USER_REQUEST>/gi, "")
    .trim();
}

function defaultMapRawPayload(raw: any): AsyncChatMessage {
  const id = String(raw?.entry_id || raw?.id || "");
  return {
    id,
    role: String(raw?.message_role || raw?.role || "AGENT"),
    text: String(raw?.message_text || raw?.text || raw?.snippet || ""),
    thoughts: String(raw?.agent_thoughts || raw?.thoughts || ""),
    timestamp: String(raw?.updated_at || raw?.created_at || raw?.timestamp || ""),
    sortTsMs: Number(raw?.sort_ts_ms ?? raw?.sortTsMs ?? 0),
    title: String(raw?.title || ""),
    artifacts: Array.isArray(raw?.artifact_items)
      ? raw.artifact_items.map((a: any) => ({
          id: String(a?.entry_id || a?.id || ""),
          name: String(a?.name || "artifact.md"),
          title: String(a?.title || ""),
          hasMermaid: Boolean(a?.has_mermaid ?? a?.hasMermaid),
        }))
      : Array.isArray(raw?.artifacts)
        ? raw.artifacts
        : [],
  };
}

export const AsyncChatWindow: FC<AsyncChatWindowProps> = ({
  messages,
  resetKey = "default",
  windowSize = 8,
  estimatedItemHeight = 240,
  showThoughtsToggle = true,
  defaultShowThoughts = false,
  showInputBox = false,
  inputPlaceholder = "Type a message...",
  onSendMessage,
  onRefresh,
  refreshIntervalMs = 5000,
  onOpenArtifact,
  renderMarkdown,
  headerSlot,
  toolbarExtraSlot,
  emptyStateText,
  theme,
  wsUrl,
  wsSubscription,
  mapRawPayloadToMessage,
  onWsMessagesUpdate,
  paneId,
}) => {
  const [windowStart, setWindowStart] = useState<number>(0);
  const [stickToBottom, setStickToBottom] = useState<boolean>(true);
  const [showAllThoughts, setShowAllThoughts] = useState<boolean>(defaultShowThoughts);
  const [expandedThoughtIds, setExpandedThoughtIds] = useState<Record<string, boolean>>({});
  const [draftInput, setDraftInput] = useState<string>("");
  const [wsConnected, setWsConnected] = useState<boolean>(false);
  const [streamedMessages, setStreamedMessages] = useState<Record<string, AsyncChatMessage>>({});

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScrollRef = useRef<boolean>(false);
  const stickToBottomRef = useRef<boolean>(true);
  const lastTailSignatureRef = useRef<string>("");
  const scrollRafRef = useRef<number | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const pendingWsDeltaRef = useRef<any[] | null>(null);
  const mapRawRef = useRef(mapRawPayloadToMessage || defaultMapRawPayload);
  const onWsUpdateRef = useRef(onWsMessagesUpdate);
  const wsSubRef = useRef(wsSubscription);

  useEffect(() => {
    mapRawRef.current = mapRawPayloadToMessage || defaultMapRawPayload;
  }, [mapRawPayloadToMessage]);

  useEffect(() => {
    onWsUpdateRef.current = onWsMessagesUpdate;
  }, [onWsMessagesUpdate]);

  useEffect(() => {
    wsSubRef.current = wsSubscription;
  }, [wsSubscription]);

  useEffect(() => {
    stickToBottomRef.current = stickToBottom;
    if (stickToBottom && pendingWsDeltaRef.current && onWsUpdateRef.current) {
      const pending = pendingWsDeltaRef.current;
      pendingWsDeltaRef.current = null;
      onWsUpdateRef.current(pending);
    }
  }, [stickToBottom]);

  // Bidirectional WebSocket lifecycle
  const wsSubSerialized = useMemo(
    () => (wsSubscription ? JSON.stringify(wsSubscription) : ""),
    [wsSubscription]
  );

  useEffect(() => {
    if (!wsUrl || typeof window === "undefined" || typeof WebSocket === "undefined") {
      setWsConnected(false);
      return;
    }

    let socket: WebSocket | null = null;
    let closedByEffect = false;

    try {
      socket = new WebSocket(wsUrl);
      wsRef.current = socket;

      socket.onopen = () => {
        if (closedByEffect) return;
        setWsConnected(true);
        if (wsSubRef.current && socket?.readyState === WebSocket.OPEN) {
          socket.send(
            JSON.stringify({
              type: "subscribe",
              ...wsSubRef.current,
            })
          );
        }
      };

      socket.onmessage = (event) => {
        if (closedByEffect) return;
        try {
          const frame = JSON.parse(String(event.data || "{}"));
          const fType = String(frame?.type || "");
          if (fType === "snapshot") {
            if (Array.isArray(frame.messages) && onWsUpdateRef.current) {
              onWsUpdateRef.current(frame.messages);
            }
          } else if (fType === "stream_delta") {
            if (Array.isArray(frame.messages)) {
              if (stickToBottomRef.current) {
                onWsUpdateRef.current?.(frame.messages);
              } else {
                pendingWsDeltaRef.current = frame.messages;
              }
            }
          } else if (fType === "message_ack") {
            if (frame.user_message) {
              const mappedUser = mapRawRef.current(frame.user_message);
              if (mappedUser.id) {
                setStreamedMessages((prev) => ({
                  ...prev,
                  [mappedUser.id]: mappedUser,
                }));
              }
            }
          } else if (fType === "stream_chunk") {
            if (frame.message) {
              const mappedChunk = mapRawRef.current(frame.message);
              if (mappedChunk.id) {
                setStreamedMessages((prev) => ({
                  ...prev,
                  [mappedChunk.id]: mappedChunk,
                }));
              }
            }
          } else if (fType === "stream_complete") {
            const updates: Record<string, AsyncChatMessage> = {};
            if (frame.user_message) {
              const u = mapRawRef.current(frame.user_message);
              if (u.id) updates[u.id] = u;
            }
            if (frame.agent_message) {
              const a = mapRawRef.current(frame.agent_message);
              if (a.id) updates[a.id] = a;
            }
            if (Object.keys(updates).length > 0) {
              setStreamedMessages((prev) => ({
                ...prev,
                ...updates,
              }));
            }
          }
        } catch {
          // Ignore malformed frame
        }
      };

      socket.onclose = () => {
        if (!closedByEffect) {
          setWsConnected(false);
        }
      };

      socket.onerror = () => {
        if (!closedByEffect) {
          setWsConnected(false);
        }
      };
    } catch {
      setWsConnected(false);
    }

    return () => {
      closedByEffect = true;
      setWsConnected(false);
      if (socket) {
        try {
          socket.close();
        } catch {
          // Ignore close error
        }
      }
      wsRef.current = null;
    };
  }, [wsUrl]);

  // Send updated subscription filter when wsSubscription changes on an open WebSocket
  useEffect(() => {
    if (!wsConnected || !wsSubSerialized) return;
    const sock = wsRef.current;
    if (sock && sock.readyState === WebSocket.OPEN) {
      try {
        sock.send(
          JSON.stringify({
            type: "subscribe",
            ...JSON.parse(wsSubSerialized),
          })
        );
      } catch {
        // Ignore send error
      }
    }
  }, [wsConnected, wsSubSerialized]);

  // Merge base messages with live WebSocket streamed messages and sort chronologically
  const orderedMessages = useMemo(() => {
    const byId = new Map<string, AsyncChatMessage>();
    for (const m of messages) {
      byId.set(m.id, m);
    }
    const activeConvFilter = String(wsSubscription?.conversation_id || "");
    for (const sm of Object.values(streamedMessages)) {
      if (
        !activeConvFilter ||
        activeConvFilter === "All" ||
        sm.id.includes(activeConvFilter.slice(0, 8))
      ) {
        byId.set(sm.id, sm);
      }
    }
    return Array.from(byId.values()).sort((a, b) => {
      const ta = typeof a.sortTsMs === "number" ? a.sortTsMs : 0;
      const tb = typeof b.sortTsMs === "number" ? b.sortTsMs : 0;
      if (ta !== tb) return ta - tb;
      return a.id.localeCompare(b.id);
    });
  }, [messages, streamedMessages, wsSubscription?.conversation_id]);

  const maxWindowStart = useMemo(
    () => Math.max(0, orderedMessages.length - windowSize),
    [orderedMessages.length, windowSize]
  );

  // Reset stick-to-bottom ONLY when resetKey changes (e.g. tab switch or filter change),
  // never when background messages arrive while the user is scrolled up.
  useEffect(() => {
    stickToBottomRef.current = true;
    lastTailSignatureRef.current = "";
    setStickToBottom(true);
    setWindowStart(Math.max(0, orderedMessages.length - windowSize));
  }, [resetKey, windowSize]);

  // Periodic async refresh cycle: runs ONLY when stickToBottom is true and WebSocket is not actively streaming.
  // Scrolling up breaks the refresh cycle until the user hits the bottom again.
  useEffect(() => {
    if (!onRefresh || !stickToBottom || wsConnected) {
      return;
    }
    const interval = window.setInterval(() => {
      if (stickToBottomRef.current) {
        Promise.resolve(onRefresh()).catch(() => {});
      }
    }, refreshIntervalMs);
    return () => window.clearInterval(interval);
  }, [onRefresh, refreshIntervalMs, stickToBottom, wsConnected]);

  const effectiveWindowStart = stickToBottom
    ? maxWindowStart
    : Math.min(windowStart, maxWindowStart);
  const effectiveWindowEnd = Math.min(
    orderedMessages.length,
    effectiveWindowStart + windowSize
  );

  const visibleMessages = useMemo(
    () => orderedMessages.slice(effectiveWindowStart, effectiveWindowEnd),
    [orderedMessages, effectiveWindowStart, effectiveWindowEnd]
  );

  const topSpacerHeight = effectiveWindowStart * estimatedItemHeight;
  const bottomSpacerHeight = Math.max(
    0,
    (orderedMessages.length - effectiveWindowEnd) * estimatedItemHeight
  );

  const tailMessage = orderedMessages[orderedMessages.length - 1];
  const tailSignature = `${orderedMessages.length}:${tailMessage?.id || ""}:${tailMessage?.text?.length || 0}:${resetKey}:${stickToBottom ? "1" : "0"}`;

  // Pin scroll position to bottom ONLY while stickToBottom is true and the tail signature changed
  useLayoutEffect(() => {
    if (!stickToBottom) return;
    if (lastTailSignatureRef.current === tailSignature) return;
    lastTailSignatureRef.current = tailSignature;

    const el = scrollContainerRef.current;
    if (!el) return;
    isProgrammaticScrollRef.current = true;
    setWindowStart(maxWindowStart);
    el.scrollTop = el.scrollHeight;
    const raf = window.requestAnimationFrame(() => {
      if (scrollContainerRef.current && stickToBottomRef.current) {
        scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
      }
      isProgrammaticScrollRef.current = false;
    });
    return () => window.cancelAnimationFrame(raf);
  }, [stickToBottom, maxWindowStart, tailSignature]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const atBottom = distanceFromBottom <= 48;

    if (isProgrammaticScrollRef.current && atBottom) {
      return;
    }

    if (atBottom) {
      if (!stickToBottomRef.current) {
        stickToBottomRef.current = true;
        setStickToBottom(true);
      }
      setWindowStart(maxWindowStart);
      return;
    }

    // User scrolled up -> break the refresh cycle and slide the virtualization window smoothly
    if (stickToBottomRef.current) {
      stickToBottomRef.current = false;
      setStickToBottom(false);
    }
    if (orderedMessages.length <= windowSize) {
      setWindowStart(0);
      return;
    }

    const nextStart = Math.min(
      maxWindowStart,
      Math.max(0, Math.floor(el.scrollTop / estimatedItemHeight))
    );
    if (scrollRafRef.current !== null) {
      window.cancelAnimationFrame(scrollRafRef.current);
    }
    scrollRafRef.current = window.requestAnimationFrame(() => {
      setWindowStart((prev) => (prev === nextStart ? prev : nextStart));
      scrollRafRef.current = null;
    });
  };

  const toggleMessageThought = useCallback(
    (id: string) => {
      setExpandedThoughtIds((prev) => ({
        ...prev,
        [id]: !(prev[id] ?? showAllThoughts),
      }));
    },
    [showAllThoughts]
  );

  const handleToggleAllThoughts = useCallback(() => {
    setShowAllThoughts((prev) => {
      const next = !prev;
      setExpandedThoughtIds({});
      return next;
    });
  }, []);

  const handleSendDraft = useCallback(async () => {
    const trimmed = draftInput.trim();
    if (!trimmed) return;
    setDraftInput("");

    // Stick to bottom when sending a message
    stickToBottomRef.current = true;
    setStickToBottom(true);

    const sock = wsRef.current;
    if (sock && sock.readyState === WebSocket.OPEN) {
      sock.send(
        JSON.stringify({
          type: "user_message",
          ...(wsSubRef.current || {}),
          text: trimmed,
        })
      );
      return;
    }
    if (onSendMessage) {
      await onSendMessage(trimmed);
    }
  }, [draftInput, onSendMessage]);

  const surfaceBg = theme?.surfaceBg || "#121824";
  const canvasBg = theme?.canvasBg || "#0B0F17";
  const subtleBg = theme?.subtleBg || "#171F2E";
  const borderColor = theme?.borderColor || "#232F46";
  const primaryAccent = theme?.primaryAccent || "#38BDF8";
  const textPrimary = theme?.textPrimary || "#F1F5F9";
  const textSecondary = theme?.textSecondary || "#94A3B8";
  const fontMono = theme?.fontMono || "JetBrains Mono, monospace";
  const baseFontSize = theme?.baseFontSize || 13;

  const actionButtonSx = {
    textTransform: "none",
    fontFamily: fontMono,
    fontSize: `${baseFontSize}px`,
    px: 1.1,
    py: 0.25,
    minWidth: 0,
    whiteSpace: "nowrap",
    color: primaryAccent,
    borderColor: borderColor,
    backgroundColor: surfaceBg,
    "&:hover": {
      borderColor: primaryAccent,
    },
  };

  return (
    <Paper
      variant="outlined"
      data-testid="async-chat-window-card"
      data-pane-id={paneId || "primary"}
      data-ws-connected={wsConnected ? "true" : "false"}
      data-stick-to-bottom={stickToBottom ? "true" : "false"}
      data-refresh-active={stickToBottom ? "true" : "false"}
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        mt: 1.5,
        backgroundColor: surfaceBg,
        borderColor: borderColor,
        overflow: "hidden",
      }}
    >
      {headerSlot}

      {/* Unified Chat Window Toolbar: Clean Status, Optional Per-Pane Controls & Agent Thoughts Toggle */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          py: 1,
          borderBottom: `1px solid ${borderColor}`,
          backgroundColor: surfaceBg,
          flexShrink: 0,
          flexWrap: "wrap",
        }}
      >
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center", minWidth: 0 }}>
          <Typography
            variant="caption"
            data-testid="async-chat-sync-state"
            sx={{
              fontFamily: fontMono,
              color: textSecondary,
              fontWeight: 600,
            }}
          >
            {stickToBottom
              ? `${wsConnected ? "WS StreamConnected • " : "Live Follow • "}Auto-Refresh Active`
              : "Scrolled Up • Auto-Refresh Paused (Scroll to Bottom to Resume)"}
          </Typography>
          {toolbarExtraSlot}
        </Stack>

        {showThoughtsToggle && (
          <Button
            size="small"
            variant="outlined"
            data-testid="toggle-agent-thoughts-btn"
            data-thoughts-visible={showAllThoughts ? "true" : "false"}
            onClick={handleToggleAllThoughts}
            sx={actionButtonSx}
          >
            {showAllThoughts ? "Hide Agent Thoughts" : "Show Agent Thoughts"}
          </Button>
        )}
      </Stack>

      {/* Single Unified Chat Window Scroll Stream */}
      <Box
        ref={scrollContainerRef}
        onScroll={handleScroll}
        data-testid="antigravity-infinite-scroll-container"
        data-stick-to-bottom={stickToBottom ? "true" : "false"}
        data-refresh-active={stickToBottom ? "true" : "false"}
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          p: 2,
          backgroundColor: canvasBg,
        }}
      >
        <Stack spacing={1.75} sx={{ pb: 2 }}>
          {orderedMessages.length === 0 && emptyStateText && (
            <Box
              data-testid="antigravity-search-empty-state"
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 1,
                backgroundColor: surfaceBg,
                border: `1px solid ${borderColor}`,
              }}
            >
              <Typography variant="body1" sx={{ color: textSecondary }}>
                {emptyStateText}
              </Typography>
            </Box>
          )}

          <Box
            data-testid="antigravity-top-spacer"
            data-hidden-top-count={effectiveWindowStart}
            sx={{
              height: `${topSpacerHeight}px`,
              width: "100%",
              flexShrink: 0,
            }}
          />

          {visibleMessages.map((msg) => {
            const roleLabel = msg.role || "AGENT";
            const isUser = roleLabel === "USER";
            const cleanTs = formatCleanChatTimestamp(msg.timestamp, msg.sortTsMs);
            const cleanText = sanitizeChatText(msg.text || "");
            const cleanThoughts = sanitizeChatText(msg.thoughts || "");
            const hasThoughts = roleLabel === "AGENT" && cleanThoughts.length > 0;
            const isThoughtOpen = expandedThoughtIds[msg.id] ?? showAllThoughts;
            const artifacts = msg.artifacts || [];
            const primaryArtifactId =
              roleLabel === "ARTIFACT" ? msg.id : artifacts[0]?.id || "";

            return (
              <Box
                key={msg.id}
                data-testid={`antigravity-card-${msg.id}`}
                data-entry-id={msg.id}
                data-message-role={roleLabel}
                data-sort-ts={msg.sortTsMs ?? 0}
                sx={{
                  p: 2,
                  borderRadius: 1.5,
                  width: "100%",
                  boxSizing: "border-box",
                  backgroundColor: isUser ? subtleBg : surfaceBg,
                  border: `1px solid ${borderColor}`,
                  borderLeft: `3px solid ${isUser ? primaryAccent : borderColor}`,
                }}
              >
                <Stack spacing={1} sx={{ minWidth: 0, width: "100%" }}>
                  {/* Clean Chat Message Header: Role + Clean Timestamp + Thought Toggle / Artifact Modal Button */}
                  <Stack
                    direction="row"
                    spacing={1.5}
                    sx={{ justifyContent: "space-between", alignItems: "center" }}
                  >
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", minWidth: 0 }}>
                      <Typography
                        variant="caption"
                        data-testid={`antigravity-card-role-${msg.id}`}
                        sx={{
                          color: isUser ? primaryAccent : textPrimary,
                          fontWeight: 700,
                          fontFamily: fontMono,
                        }}
                      >
                        {roleLabel}
                      </Typography>
                      {cleanTs && (
                        <Typography
                          variant="caption"
                          data-testid={`antigravity-card-timestamp-${msg.id}`}
                          sx={{
                            color: textSecondary,
                            fontFamily: fontMono,
                          }}
                        >
                          {cleanTs}
                        </Typography>
                      )}
                    </Stack>

                    <Stack direction="row" spacing={0.75} sx={{ alignItems: "center", flexShrink: 0 }}>
                      {hasThoughts && showThoughtsToggle && (
                        <Button
                          size="small"
                          variant="outlined"
                          data-testid={`toggle-thought-btn-${msg.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMessageThought(msg.id);
                          }}
                          sx={actionButtonSx}
                        >
                          {isThoughtOpen ? "Hide Thoughts" : "Show Thoughts"}
                        </Button>
                      )}

                      {primaryArtifactId && onOpenArtifact && (
                        <Button
                          size="small"
                          variant="outlined"
                          data-testid={`inspect-brain-btn-${msg.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenArtifact(primaryArtifactId);
                          }}
                          sx={actionButtonSx}
                        >
                          Open Artifact Modal
                        </Button>
                      )}
                    </Stack>
                  </Stack>

                  {/* Collapsible Agent Thoughts Block */}
                  {hasThoughts && isThoughtOpen && (
                    <Box
                      data-testid={`agent-thoughts-${msg.id}`}
                      sx={{
                        p: 1.25,
                        borderRadius: 1,
                        backgroundColor: canvasBg,
                        border: `1px dashed ${borderColor}`,
                        color: textSecondary,
                        fontFamily: fontMono,
                        fontSize: `${Math.max(11, baseFontSize - 1)}px`,
                        whiteSpace: "pre-wrap",
                        overflowX: "auto",
                      }}
                    >
                      {cleanThoughts}
                    </Box>
                  )}

                  {/* Chat Message Body (User / Agent Text) */}
                  <Box
                    data-testid={`antigravity-card-snippet-${msg.id}`}
                    sx={{
                      width: "100%",
                      boxSizing: "border-box",
                      color: textPrimary,
                      overflowX: "auto",
                    }}
                  >
                    {renderMarkdown ? (
                      renderMarkdown(cleanText)
                    ) : (
                      <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                        {cleanText}
                      </Typography>
                    )}
                  </Box>

                  {/* Artifact Modal Triggers */}
                  {artifacts.length > 0 && onOpenArtifact && (
                    <>
                      <Divider sx={{ borderColor }} />
                      <Stack
                        direction="row"
                        spacing={0.75}
                        useFlexGap
                        data-testid={`antigravity-card-artifacts-${msg.id}`}
                        sx={{ flexWrap: "wrap", alignItems: "center" }}
                      >
                        {artifacts.map((art) => (
                          <Button
                            key={art.id}
                            size="small"
                            variant="outlined"
                            data-testid={`open-artifact-modal-btn-${art.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenArtifact(art.id);
                            }}
                            sx={actionButtonSx}
                          >
                            {art.name}
                          </Button>
                        ))}
                      </Stack>
                    </>
                  )}
                </Stack>
              </Box>
            );
          })}

          <Box
            data-testid="antigravity-bottom-spacer"
            data-hidden-bottom-count={Math.max(
              0,
              orderedMessages.length - effectiveWindowEnd
            )}
            sx={{
              height: `${bottomSpacerHeight}px`,
              width: "100%",
              flexShrink: 0,
            }}
          />
        </Stack>
      </Box>

      {/* Optional Chat Input Entry Box (Omitted When showInputBox is false) */}
      {showInputBox && (
        <Stack
          direction="row"
          spacing={1}
          data-testid="async-chat-input-box"
          sx={{
            alignItems: "center",
            p: 1.5,
            borderTop: `1px solid ${borderColor}`,
            backgroundColor: surfaceBg,
            flexShrink: 0,
          }}
        >
          <TextField
            size="small"
            fullWidth
            placeholder={inputPlaceholder}
            value={draftInput}
            onChange={(e) => setDraftInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendDraft();
              }
            }}
            slotProps={{
              htmlInput: {
                "data-testid": "async-chat-input-field",
              },
            }}
          />
          <Button
            size="small"
            variant="outlined"
            data-testid="async-chat-send-btn"
            onClick={handleSendDraft}
            sx={actionButtonSx}
          >
            Send
          </Button>
        </Stack>
      )}
    </Paper>
  );
};
