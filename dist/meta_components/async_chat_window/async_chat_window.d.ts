import { FC, ReactNode } from 'react';
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
export declare function formatCleanChatTimestamp(rawTimestamp?: string, fallbackMs?: number): string;
export declare function sanitizeChatText(rawText: string): string;
export declare const AsyncChatWindow: FC<AsyncChatWindowProps>;
//# sourceMappingURL=async_chat_window.d.ts.map