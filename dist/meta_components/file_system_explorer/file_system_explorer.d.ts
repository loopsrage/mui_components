import { FC, MouseEvent, ReactNode } from 'react';
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
    onSelectFile?: (file: FileSystemFileItem, rootNode: FileSystemRootNode) => void;
    onSelectRoot?: (rootNode: FileSystemRootNode) => void;
    onDownloadFile?: (file: FileSystemFileItem, rootNode: FileSystemRootNode, event: MouseEvent<HTMLElement>) => void;
    getDownloadUrl?: (file: FileSystemFileItem) => string;
    enableCrud?: boolean;
    onUploadFiles?: (files: FileList, targetFolder?: string) => void | Promise<void>;
    onCreateFile?: (path: string, content: string) => void | Promise<void>;
    onDeleteFile?: (file: FileSystemFileItem, rootNode: FileSystemRootNode, event: MouseEvent<HTMLElement>) => void | Promise<void>;
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
export declare function resolveFilePath(file: FileSystemFileItem): string;
export declare function resolveFolderFiles(folder: FileSystemFolderNode): FileSystemFileItem[];
export declare function resolveRootFolders(root: FileSystemRootNode): FileSystemFolderNode[];
export declare const FileSystemExplorer: FC<FileSystemExplorerProps>;
//# sourceMappingURL=file_system_explorer.d.ts.map