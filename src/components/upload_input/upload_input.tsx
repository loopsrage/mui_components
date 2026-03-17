import {useCallback, useState, type ChangeEvent} from "react";
import { useDropzone } from 'react-dropzone';
import { InputAdornment, IconButton, TextField,  } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';

export const UIInput = () => {
    const [text, setText] = useState("");
    const [, setFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
        onDrop,
        noClick: true,
        noKeyboard: true,
        multiple: false
    });
    const { ref, ...rootProps } = getRootProps();

    return (
        <TextField
            variant="outlined"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            slotProps={{
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
                    endAdornment: (
                        <IconButton>
                            <SendIcon />
                        </IconButton>
                    )
                } as object | undefined,
            }}
            sx={{
                // Change background color when a file is being dragged over
                backgroundColor: isDragActive ? 'action.hover' : 'inherit',
                '& .MuiOutlinedInput-root': {
                    transition: 'background-color 0.2s',
                }
            }}
        />
    );
};
