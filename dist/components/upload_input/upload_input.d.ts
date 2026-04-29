import { FC, RefObject } from 'react';
export interface ProgressAdornmentProps {
    loading: boolean;
    value: number;
}
export declare const ProgressAdornment: FC<ProgressAdornmentProps>;
export declare const SendIconButton: ({ ...props }: {
    [x: string]: any;
}) => import("react/jsx-runtime").JSX.Element;
export interface UploadInputProps {
    refKey: string;
    register_component: boolean;
    onSend: () => ((ref: RefObject<UploadInputState>) => void);
    onDropSuccess: (ref: RefObject<UploadInputState>, acceptedFiles: File[]) => void;
    hidden?: boolean;
    textFieldSx?: object;
    textFieldProps?: object;
    sendButtonProps?: object;
}
export interface UploadInputState {
    setProgressValue: (value: number) => void;
    progressValue: number;
    handleToggle: (loading: boolean) => void;
}
export declare const SetProgressValue: (ref: RefObject<UploadInputState>, value: number) => void;
export declare const GetProgressValue: (ref: RefObject<UploadInputState>) => number;
export declare const SetLoading: (ref: RefObject<UploadInputState>, loading: boolean) => void;
export declare const UIInput: FC<UploadInputProps>;
//# sourceMappingURL=upload_input.d.ts.map