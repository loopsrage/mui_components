import {
  type ChangeEvent,
  type FC,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export interface FileSystemFileItem {
  name: string;
  friendly_name?: string;
  path?: string;
  absolute_path?: string;
  relative_path: string;
  folder?: string;
  size_bytes: number;
  updated_at?: string;
  modified_at?: string;
  modified_ts_ms?: number;
  extension?: string;
  file_type?: string;
  mime_type?: string;
  is_multimedia?: boolean;
  is_binary?: boolean;
  scope?: string;
  entry_id?: string;
  is_artifact?: boolean;
  has_mermaid?: boolean;
  has_code_blocks?: boolean;
  title?: string;
  artifact_entry_id?: string | null;
  node_id?: string;
  layer?: string;
  repo_name?: string;
}

export interface FileSystemFolderNode {
  folder_id?: string;
  node_id?: string;
  name?: string;
  friendly_name?: string;
  relative_path: string;
  file_count?: number;
  files?: FileSystemFileItem[];
  children?: FileSystemFileItem[];
  folders?: FileSystemFolderNode[];
}

export interface FileSystemRootNode {
  node_id?: string;
  conversation_id: string;
  short_id: string;
  friendly_name: string;
  workspace_project: string;
  path?: string;
  updated_at?: string;
  mtime_ns?: number;
  total_files?: number;
  artifact_count?: number;
  task_log_count?: number;
  artifact_files_count?: number;
  latest_ts_ms?: number;
  latest_timestamp?: string;
  folders?: FileSystemFolderNode[];
  children?: FileSystemFolderNode[];
  root_files?: FileSystemFileItem[];
}

export interface FileSystemExplorerTheme {
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

export interface FileSystemExplorerProps {
  tree: FileSystemRootNode[];
  selectedFilePath?: string;
  selectedRootId?: string;
  onSelectFile?: (
    file: FileSystemFileItem,
    rootNode: FileSystemRootNode
  ) => void;
  onSelectRoot?: (rootNode: FileSystemRootNode) => void;
  onDownloadFile?: (
    file: FileSystemFileItem,
    rootNode: FileSystemRootNode,
    event: MouseEvent<HTMLElement>
  ) => void;
  getDownloadUrl?: (file: FileSystemFileItem) => string;
  enableCrud?: boolean;
  onUploadFiles?: (files: FileList, targetFolder?: string) => void | Promise<void>;
  onCreateFile?: (path: string, content: string) => void | Promise<void>;
  onDeleteFile?: (
    file: FileSystemFileItem,
    rootNode: FileSystemRootNode,
    event: MouseEvent<HTMLElement>
  ) => void | Promise<void>;
  crudUploadAccept?: string;
  title?: string;
  subtitle?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  initialExpandedCount?: number;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string | Record<string, unknown>;
  testIdPrefix?: string;
  containerTestId?: string;
  emptyStateText?: string;
  headerExtraSlot?: ReactNode;
  theme?: FileSystemExplorerTheme;
}

export function resolveFilePath(file: FileSystemFileItem): string {
  return file.path || file.absolute_path || file.relative_path || file.name;
}

export function resolveFolderFiles(
  folder: FileSystemFolderNode
): FileSystemFileItem[] {
  return folder.files || folder.children || [];
}

export function resolveRootFolders(
  root: FileSystemRootNode
): FileSystemFolderNode[] {
  return root.folders || root.children || [];
}

function folderMatchesFilter(
  folder: FileSystemFolderNode,
  queryLower: string
): FileSystemFolderNode | null {
  if (!queryLower) return folder;
  const folderLabel = (
    folder.friendly_name ||
    folder.name ||
    folder.relative_path ||
    ""
  ).toLowerCase();
  const selfMatch =
    folderLabel.includes(queryLower) ||
    (folder.relative_path || "").toLowerCase().includes(queryLower);
  if (selfMatch) return folder;

  const matchedFiles = resolveFolderFiles(folder).filter(
    (f) =>
      f.name.toLowerCase().includes(queryLower) ||
      (f.friendly_name || "").toLowerCase().includes(queryLower) ||
      (f.relative_path || "").toLowerCase().includes(queryLower) ||
      (f.title || "").toLowerCase().includes(queryLower)
  );
  const matchedSubfolders: FileSystemFolderNode[] = [];
  for (const sub of folder.folders || []) {
    const subMatch = folderMatchesFilter(sub, queryLower);
    if (subMatch) matchedSubfolders.push(subMatch);
  }
  if (matchedFiles.length === 0 && matchedSubfolders.length === 0) {
    return null;
  }
  return {
    ...folder,
    files: matchedFiles,
    children: matchedFiles,
    folders: matchedSubfolders,
  };
}

export const FileSystemExplorer: FC<FileSystemExplorerProps> = ({
  tree,
  selectedFilePath = "",
  selectedRootId = "",
  onSelectFile,
  onSelectRoot,
  onDownloadFile,
  getDownloadUrl,
  enableCrud = false,
  onUploadFiles,
  onCreateFile,
  onDeleteFile,
  crudUploadAccept = "*/*,image/*,audio/*,video/*,application/pdf,.md,.py,.ts,.tsx,.json,.txt,.svg",
  title = "DIRECTORY EXPLORER",
  subtitle,
  showSearch = false,
  searchPlaceholder = "Filter files or directories...",
  initialExpandedCount = 2,
  maxHeight = "100%",
  minHeight = 0,
  width,
  testIdPrefix = "artifacts",
  containerTestId,
  emptyStateText = "No files found in directory tree.",
  headerExtraSlot,
  theme,
}) => {
  const canvasBg = theme?.canvasBg || "#0b0e14";
  const surfaceBg = theme?.surfaceBg || "#11161f";
  const subtleBg = theme?.subtleBg || "#161c26";
  const borderColor = theme?.borderColor || "#30363d";
  const primaryAccent = theme?.primaryAccent || "#58a6ff";
  const textPrimary = theme?.textPrimary || "#e6edf3";
  const textSecondary = theme?.textSecondary || "#9ca3af";
  const fontMono =
    theme?.fontMono || '"Source Code Pro", Consolas, Monaco, monospace';

  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>(
    {}
  );
  const [filterText, setFilterText] = useState("");
  const [showNewFileForm, setShowNewFileForm] = useState(false);
  const [newFilePath, setNewFilePath] = useState("artifacts/note.md");
  const [newFileContent, setNewFileContent] = useState("# Promoted Model Artifact\n");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInputChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0 && onUploadFiles) {
        await onUploadFiles(e.target.files);
      }
      e.target.value = "";
    },
    [onUploadFiles]
  );

  const handleCreateFileSubmit = useCallback(async () => {
    const trimmed = newFilePath.trim();
    if (!trimmed || !onCreateFile) return;
    await onCreateFile(trimmed, newFileContent);
    setShowNewFileForm(false);
  }, [newFilePath, newFileContent, onCreateFile]);

  useEffect(() => {
    if (!tree || tree.length === 0) return;
    setExpandedNodes((prev) => {
      if (Object.keys(prev).length > 0) return prev;
      const initial: Record<string, boolean> = {};
      tree.slice(0, initialExpandedCount).forEach((node) => {
        const rootKey = node.node_id || node.conversation_id;
        initial[rootKey] = true;
        for (const folder of resolveRootFolders(node)) {
          const fRel = folder.relative_path || folder.name || "";
          initial[`${rootKey}/${fRel}`] = true;
        }
      });
      return initial;
    });
  }, [tree, initialExpandedCount]);

  const toggleNode = useCallback((nodeKey: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeKey]: !prev[nodeKey],
    }));
  }, []);

  const expandAll = useCallback(() => {
    const next: Record<string, boolean> = {};
    const visitFolders = (rootKey: string, folders: FileSystemFolderNode[]) => {
      for (const f of folders) {
        const fRel = f.relative_path || f.name || "";
        next[`${rootKey}/${fRel}`] = true;
        if (f.folders && f.folders.length > 0) {
          visitFolders(rootKey, f.folders);
        }
      }
    };
    for (const root of tree) {
      const rootKey = root.node_id || root.conversation_id;
      next[rootKey] = true;
      visitFolders(rootKey, resolveRootFolders(root));
    }
    setExpandedNodes(next);
  }, [tree]);

  const collapseAll = useCallback(() => {
    setExpandedNodes({});
  }, []);

  const filteredTree = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    if (!q) return tree;
    const result: FileSystemRootNode[] = [];
    for (const root of tree) {
      const rootMatches =
        root.friendly_name.toLowerCase().includes(q) ||
        root.short_id.toLowerCase().includes(q) ||
        (root.workspace_project || "").toLowerCase().includes(q);
      if (rootMatches) {
        result.push(root);
        continue;
      }
      const rootFiles = (root.root_files || []).filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          (f.friendly_name || "").toLowerCase().includes(q) ||
          (f.relative_path || "").toLowerCase().includes(q) ||
          (f.title || "").toLowerCase().includes(q)
      );
      const folders: FileSystemFolderNode[] = [];
      for (const fld of resolveRootFolders(root)) {
        const m = folderMatchesFilter(fld, q);
        if (m) folders.push(m);
      }
      if (rootFiles.length > 0 || folders.length > 0) {
        result.push({
          ...root,
          root_files: rootFiles,
          folders,
          children: folders,
        });
      }
    }
    return result;
  }, [tree, filterText]);

  const renderFolderSvg = (open: boolean, color: string, size: number = 15) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      {open ? (
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      ) : (
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      )}
    </svg>
  );

  const renderFileSvg = (color: string, size: number = 13) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );

  const renderFileItem = (
    file: FileSystemFileItem,
    rootNode: FileSystemRootNode,
    depth: number
  ) => {
    const fPath = resolveFilePath(file);
    const isSelected = Boolean(selectedFilePath && selectedFilePath === fPath);
    const downloadHref = getDownloadUrl ? getDownloadUrl(file) : undefined;
    const showDownload = Boolean(onDownloadFile || downloadHref);

    return (
      <Box
        key={fPath}
        data-testid={`${testIdPrefix}-tree-file-${rootNode.short_id}-${file.name}`}
        onClick={() => onSelectFile?.(file, rootNode)}
        sx={{
          pl: Math.max(1.25, depth * 1.1),
          pr: 0.75,
          py: 0.4,
          borderRadius: 0.75,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 0.75,
          bgcolor: isSelected ? subtleBg : "transparent",
          borderLeft: isSelected
            ? `2px solid ${primaryAccent}`
            : "2px solid transparent",
          "&:hover": { bgcolor: subtleBg },
        }}
      >
        <Stack
          direction="row"
          spacing={0.6}
          sx={{ alignItems: "center", minWidth: 0, flex: 1 }}
        >
          {renderFileSvg(isSelected ? primaryAccent : textSecondary, 13)}
          <Typography
            sx={{
              fontSize: "0.74rem",
              fontFamily: fontMono,
              color: isSelected ? primaryAccent : textPrimary,
              fontWeight: isSelected ? 600 : 400,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {file.name}
          </Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
          {showDownload ? (
            <Button
              size="small"
              component={downloadHref ? "a" : "button"}
              href={downloadHref}
              onClick={(e: MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                if (onDownloadFile) {
                  onDownloadFile(file, rootNode, e);
                }
              }}
              data-testid={`tree-download-btn-${rootNode.short_id}-${file.name}`}
              sx={{
                minWidth: "auto",
                px: 0.6,
                py: 0.1,
                fontSize: "0.66rem",
                fontFamily: fontMono,
                textTransform: "none",
                color: textSecondary,
                border: `1px solid ${borderColor}`,
              }}
            >
              DL
            </Button>
          ) : null}
          {onDeleteFile && file.scope !== "promoted_repo" ? (
            <Button
              size="small"
              onClick={(e: MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                onDeleteFile(file, rootNode, e);
              }}
              data-testid={`${testIdPrefix}-tree-delete-btn-${rootNode.short_id}-${file.name}`}
              sx={{
                minWidth: "auto",
                px: 0.5,
                py: 0.1,
                fontSize: "0.64rem",
                fontFamily: fontMono,
                textTransform: "none",
                color: textSecondary,
                border: `1px solid ${borderColor}`,
              }}
            >
              Del
            </Button>
          ) : null}
        </Stack>
      </Box>
    );
  };

  const renderFolderTree = (
    rootNode: FileSystemRootNode,
    folder: FileSystemFolderNode,
    depth: number = 1
  ): ReactNode => {
    const rootKey = rootNode.node_id || rootNode.conversation_id;
    const fRel = folder.relative_path || folder.name || "";
    const folderKey = `${rootKey}/${fRel}`;
    const isExpanded =
      Boolean(filterText.trim()) || Boolean(expandedNodes[folderKey]);
    const files = resolveFolderFiles(folder);
    const subFolders = folder.folders || [];
    const folderLabel = folder.friendly_name || folder.name || fRel;
    const count =
      typeof folder.file_count === "number"
        ? folder.file_count
        : files.length + subFolders.length;

    return (
      <Box key={folder.folder_id || folderKey}>
        <Box
          onClick={() => toggleNode(folderKey)}
          data-testid={`${testIdPrefix}-tree-folder-${rootNode.short_id}-${fRel}`}
          sx={{
            pl: 0.6 + depth * 0.65,
            pr: 0.75,
            py: 0.4,
            borderRadius: 0.75,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 0.6,
            "&:hover": { bgcolor: subtleBg },
          }}
        >
          {renderFolderSvg(
            isExpanded,
            isExpanded ? primaryAccent : textSecondary,
            14
          )}
          <Typography
            sx={{
              fontSize: "0.74rem",
              fontWeight: 600,
              color: textPrimary,
              fontFamily: fontMono,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
            }}
          >
            {folderLabel} ({count})
          </Typography>
        </Box>
        {isExpanded && (
          <Box sx={{ pl: 1, pt: 0.25 }}>
            {subFolders.map((sub) =>
              renderFolderTree(rootNode, sub, depth + 1)
            )}
            {files.map((file) =>
              renderFileItem(file, rootNode, depth + 1)
            )}
          </Box>
        )}
      </Box>
    );
  };

  const resolvedContainerTestId =
    containerTestId || `${testIdPrefix}-page-directory-tree`;

  return (
    <Paper
      variant="outlined"
      data-testid={resolvedContainerTestId}
      sx={{
        width: width || { xs: "100%", md: 340 },
        flexShrink: 0,
        bgcolor: surfaceBg,
        borderColor,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        maxHeight,
        minHeight,
      }}
    >
      <Box
        sx={{
          px: 1.5,
          py: 1.1,
          bgcolor: subtleBg,
          borderBottom: `1px solid ${borderColor}`,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: textPrimary,
                fontFamily: fontMono,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                sx={{
                  fontSize: "0.68rem",
                  color: textSecondary,
                  fontFamily: fontMono,
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            {headerExtraSlot}
            {(enableCrud || onUploadFiles) && (
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={crudUploadAccept}
                  data-testid={`${testIdPrefix}-fs-upload-input`}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                <Button
                  size="small"
                  onClick={() => fileInputRef.current?.click()}
                  data-testid={`${testIdPrefix}-fs-upload-btn`}
                  sx={{
                    minWidth: "auto",
                    px: 0.7,
                    py: 0.15,
                    fontSize: "0.66rem",
                    fontFamily: fontMono,
                    textTransform: "none",
                    color: primaryAccent,
                    border: `1px solid ${primaryAccent}`,
                  }}
                >
                  Upload
                </Button>
              </>
            )}
            {(enableCrud || onCreateFile) && (
              <Button
                size="small"
                onClick={() => setShowNewFileForm((prev) => !prev)}
                data-testid={`${testIdPrefix}-fs-new-file-toggle-btn`}
                sx={{
                  minWidth: "auto",
                  px: 0.7,
                  py: 0.15,
                  fontSize: "0.66rem",
                  fontFamily: fontMono,
                  textTransform: "none",
                  color: textPrimary,
                  border: `1px solid ${borderColor}`,
                }}
              >
                +File
              </Button>
            )}
            <Button
              size="small"
              onClick={expandAll}
              data-testid={`${testIdPrefix}-tree-expand-all`}
              sx={{
                minWidth: "auto",
                px: 0.7,
                py: 0.15,
                fontSize: "0.66rem",
                fontFamily: fontMono,
                textTransform: "none",
                color: textSecondary,
                border: `1px solid ${borderColor}`,
              }}
            >
              +All
            </Button>
            <Button
              size="small"
              onClick={collapseAll}
              data-testid={`${testIdPrefix}-tree-collapse-all`}
              sx={{
                minWidth: "auto",
                px: 0.7,
                py: 0.15,
                fontSize: "0.66rem",
                fontFamily: fontMono,
                textTransform: "none",
                color: textSecondary,
                border: `1px solid ${borderColor}`,
              }}
            >
              -All
            </Button>
          </Stack>
        </Box>

        {showNewFileForm && (enableCrud || onCreateFile) && (
          <Stack
            spacing={0.75}
            data-testid={`${testIdPrefix}-fs-new-file-form`}
            sx={{
              p: 1,
              borderRadius: 0.75,
              bgcolor: canvasBg,
              border: `1px solid ${borderColor}`,
            }}
          >
            <TextField
              size="small"
              fullWidth
              value={newFilePath}
              onChange={(e) => setNewFilePath(e.target.value)}
              placeholder="artifacts/new_file.md"
              slotProps={{
                htmlInput: {
                  "data-testid": `${testIdPrefix}-fs-new-file-name-input`,
                  style: {
                    fontSize: "0.72rem",
                    fontFamily: fontMono,
                    padding: "4px 8px",
                  },
                },
              }}
            />
            <TextField
              size="small"
              fullWidth
              multiline
              minRows={2}
              maxRows={4}
              value={newFileContent}
              onChange={(e) => setNewFileContent(e.target.value)}
              placeholder="File content..."
              slotProps={{
                htmlInput: {
                  "data-testid": `${testIdPrefix}-fs-new-file-content-input`,
                  style: {
                    fontSize: "0.72rem",
                    fontFamily: fontMono,
                    padding: "4px 8px",
                  },
                },
              }}
            />
            <Stack direction="row" spacing={0.75} sx={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                variant="outlined"
                data-testid={`${testIdPrefix}-fs-new-file-submit-btn`}
                onClick={handleCreateFileSubmit}
                sx={{
                  fontSize: "0.68rem",
                  fontFamily: fontMono,
                  textTransform: "none",
                  py: 0.2,
                  px: 1,
                }}
              >
                Save to FSBase
              </Button>
            </Stack>
          </Stack>
        )}

        {showSearch && (
          <TextField
            size="small"
            fullWidth
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder={searchPlaceholder}
            slotProps={{
              htmlInput: {
                "data-testid": `${testIdPrefix}-tree-search-input`,
                style: {
                  fontSize: "0.75rem",
                  fontFamily: fontMono,
                  padding: "4px 8px",
                },
              },
            }}
          />
        )}
      </Box>

      <Box sx={{ flex: 1, overflowY: "auto", p: 1 }}>
        {filteredTree.length === 0 ? (
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography
              sx={{
                fontSize: "0.76rem",
                color: textSecondary,
                fontFamily: fontMono,
              }}
            >
              {emptyStateText}
            </Typography>
          </Box>
        ) : (
          <Stack spacing={0.75}>
            {filteredTree.map((node) => {
              const rootKey = node.node_id || node.conversation_id;
              const isExpanded =
                Boolean(filterText.trim()) || Boolean(expandedNodes[rootKey]);
              const isSelectedRoot =
                selectedRootId !== "" &&
                (selectedRootId === node.conversation_id ||
                  selectedRootId === rootKey);
              const folders = resolveRootFolders(node);
              const rootFiles = node.root_files || [];
              const subMeta =
                typeof node.artifact_count === "number"
                  ? `${node.artifact_count} artifacts${node.updated_at ? ` · ${node.updated_at}` : ""}`
                  : `${node.workspace_project || node.short_id}${typeof node.total_files === "number" ? ` · ${node.total_files} files` : ""}`;

              return (
                <Box
                  key={rootKey}
                  data-testid={`${testIdPrefix}-tree-session-${node.short_id}`}
                  sx={{
                    border: `1px solid ${borderColor}`,
                    borderRadius: 1,
                    bgcolor: canvasBg,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    onClick={() => {
                      toggleNode(rootKey);
                      onSelectRoot?.(node);
                    }}
                    sx={{
                      px: 1.25,
                      py: 0.75,
                      cursor: "pointer",
                      bgcolor: isSelectedRoot ? subtleBg : "transparent",
                      "&:hover": { bgcolor: subtleBg },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={0.75}
                      sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{ alignItems: "center", minWidth: 0, flex: 1 }}
                      >
                        {renderFolderSvg(
                          isExpanded,
                          isExpanded || isSelectedRoot ? primaryAccent : textSecondary,
                          16
                        )}
                        <Typography
                          sx={{
                            fontSize: "0.76rem",
                            fontWeight: 600,
                            color: isSelectedRoot ? primaryAccent : textPrimary,
                            fontFamily: fontMono,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {node.friendly_name}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          fontSize: "0.68rem",
                          color: textSecondary,
                          fontFamily: fontMono,
                          flexShrink: 0,
                        }}
                      >
                        {node.short_id}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{
                        fontSize: "0.68rem",
                        color: textSecondary,
                        fontFamily: fontMono,
                        mt: 0.2,
                      }}
                    >
                      {subMeta}
                    </Typography>
                  </Box>

                  {isExpanded && (
                    <Box
                      sx={{
                        px: 0.75,
                        pb: 0.75,
                        pt: 0.4,
                        borderTop: `1px solid ${borderColor}`,
                      }}
                    >
                      {folders.map((folder) =>
                        renderFolderTree(node, folder, 1)
                      )}
                      {rootFiles.map((file) =>
                        renderFileItem(file, node, 1.25)
                      )}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Stack>
        )}
      </Box>
    </Paper>
  );
};
