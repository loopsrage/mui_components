import {
    useCallback,
    useState,
    type ChangeEvent,
    type FC,
    useLayoutEffect,
    useRef,
    type RefObject
} from "react";
import { useDropzone } from 'react-dropzone';
import {InputAdornment, IconButton, TextField, CircularProgress, Box, Typography,} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import {useConditionalRef} from "@/context/context_index";

export interface ProgressAdornmentProps {
    loading: boolean;
    value: number;
}

export const ProgressAdornment: FC<ProgressAdornmentProps> = ({loading, value}) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <InputAdornment position="end">
                {loading && <CircularProgress sx={{ color: '#ff0000' }}  variant="determinate" value={value} />}
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >{`${Math.round(value)}%`}</Typography>
                </Box>
            </InputAdornment>
        </Box>
    )
}

export const SendIconButton = ({ ...props}) => {
    return (
        <IconButton {...props} >
            <SendIcon />
        </IconButton>
    )
}

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

export const SetProgressValue = (ref: RefObject<UploadInputState>, value: number) => {
    const st = ref.current;
    if (!st) return;

    st.setProgressValue(value);
    st.progressValue = value
    ref.current = st
}

export const GetProgressValue = (ref: RefObject<UploadInputState>) => {
    if (!ref || !ref.current) return 1;
    return ref.current.progressValue
}

export const SetLoading = (ref: RefObject<UploadInputState>, loading: boolean) => {
    const st = ref.current;
    if (!st) return;
    st.handleToggle(loading)
}


export const UIInput: FC<UploadInputProps> = ({refKey, register_component, hidden, onDropSuccess, onSend, textFieldSx, textFieldProps, sendButtonProps}) => {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)

    const setRegistryRef = useConditionalRef(refKey, register_component)

    const handleToggle = (isLoading: boolean) =>{
        setLoading(isLoading)
    }

    const localRef = useRef<UploadInputState>({
        handleToggle,
        progressValue: 0,
        setProgressValue: setProgress
    });

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const st = localRef.current
            setLoading(true)
            st.setProgressValue = setProgress
            onDropSuccess(localRef, acceptedFiles)
            localRef.current = st
        }
    }, [onDropSuccess]);

    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
        onDrop,
        noClick: true,
        noKeyboard: true,
        multiple: false
    });

    useLayoutEffect(() => {
        setRegistryRef(localRef.current);
        return () => setRegistryRef(null);
    }, [setRegistryRef]);

    const { ref, ...rootProps } = getRootProps();

    const currentEndAdornment = loading ? (
        <ProgressAdornment loading={true} value={progress} />
    ) : (
        <SendIconButton
            onClick={onSend()(ref)}
            sx={{ color: progress === 100 ? 'red' : 'inherit' }}
            {...sendButtonProps}
        />
    );

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (/^[0-9,]*$/.test(newValue)) {
            setText(newValue);
        }
    };

    return (
        <TextField
            variant="outlined"
            value={text}
            onChange={handleTextChange}
            placeholder="3186815,3192062,3107146,3192072...."
            slotProps={{
                htmlInput: {
                    inputMode: "numeric",
                } as object | undefined,
                input: {
                    ...rootProps,
                    inputRef: ref,
                    startAdornment: (
                        <InputAdornment position="start">
                            <input {...getInputProps()} />
                            <IconButton onClick={open}>
                                <CloudUploadIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: currentEndAdornment
                } as object | undefined,
            }}
            sx={{
                width: "100%",
                // Change background color when a file is being dragged over
                backgroundColor: isDragActive ? 'action.hover' : 'inherit',
                '& .MuiOutlinedInput-root': {
                    transition: 'background-color 0.2s',
                },
                display: hidden ? 'none' : 'flex',
                ...textFieldSx
            }}
            {...textFieldProps}
        />
    );
};
