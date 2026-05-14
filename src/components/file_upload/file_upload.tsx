import {type FC, type ReactElement, type RefObject, useCallback, useRef} from "react";
import {Box, type BoxProps, Paper, type PaperProps, Typography} from "@mui/material";
import {useDropzone} from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export interface FileUploadState {
    onFilesSelected: (acceptedFiles: File[]) => void
    paper_props?: PaperProps
    box_props?: BoxProps
    input_elem: (props: object) => ReactElement
    icon_elem: () => ReactElement
    dropzone_options: object
    typography: () => ReactElement
}

export const SetFilesSelected = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.onFilesSelected = state.onFilesSelected
    ref.current = st
}

export const SetPaperProps = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.paper_props = state.paper_props
    ref.current = st
}

export const SetBoxProps = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.box_props = state.box_props
    ref.current = st
}

export const SetInputElem = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.input_elem = state.input_elem
    ref.current = st
}

export const SetIconElem = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.icon_elem = state.icon_elem
    ref.current = st
}

export const SetTypography = (ref: RefObject<FileUploadState>, state: FileUploadState)=> {
    const st = ref.current
    if (!st) return

    st.typography = state.typography
    ref.current = st
}

export interface FileUploadParams {
    onFilesSelected: (acceptedFiles: File[]) => void
    paper_props?: PaperProps
    box_props?: BoxProps
    input_elem?: (props: object) => ReactElement
    icon_elem?: () => ReactElement
    dropzone_options: object
    typography?: () => ReactElement
}

export const GetPaperProps = (ref: RefObject<FileUploadState>) => {
    const st = ref.current
    if (!st) return
    return {...st.paper_props, }
}

export const GetBoxProps = (ref: RefObject<FileUploadState>) => {
    const st = ref.current
    if (!st) return
    return st.box_props
}

export const GetInputElem = (ref: RefObject<FileUploadState>, props: object) => {
    const st = ref.current
    if (!st) return
    return st.input_elem(props)
}

export const GetIconElem = (ref: RefObject<FileUploadState>) => {
    return ref.current.icon_elem()
}

export const GetTypography = (ref: RefObject<FileUploadState>) => {
    return ref.current.typography()
}

export const FileUpload: FC<FileUploadParams> = (params) => {

    const localRef = useRef<FileUploadState>(null as unknown as FileUploadState)
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (params.onFilesSelected) {
            params.onFilesSelected(acceptedFiles);
        }
    }, [params.onFilesSelected]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone(params.dropzone_options);

    const initialRef = (isDragActive: boolean) => {
        return {
            onFilesSelected: params.onFilesSelected,
            paper_props: params.paper_props || {
                variant: "outlined",
                sx: {
                    p: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    border: '2px dashed',
                    borderColor: isDragActive ? 'primary.main' : 'text.disabled',
                    backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'action.hover',
                    },
                    outline: 'none'
                }
            },
            box_props: params.box_props || {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }
            },
            icon_elem: params.icon_elem || (() => {
                return <CloudUploadIcon
                    sx={{
                        fontSize: 48,
                        color: isDragActive ? 'primary.main' : 'text.secondary'
                    }}
                />
            }),
            input_elem: params.input_elem || ((props: object) => {
                return <input { ...props} />
            }),
            dropzone_options: params.dropzone_options || {
                onDrop,
                accept: {'image/*': ['.jpeg', '.jpg', '.png'],
                    'application/pdf': ['.pdf'],

                },
                multiple: true
            },
            typography: params.typography || (() => {
                return isDragActive ?
                    (
                        <Typography color="primary.main" variant="h6">
                            Drop the files here...
                        </Typography>
                    ) : (
                        <>
                            <Typography variant="h6" color="text.primary">
                                Drag & drop files here, or click to select
                            </Typography>
                        </>
                    )
            })
        }
    }

    if (!localRef.current) {
        localRef.current = initialRef(isDragActive)
    }

    return (
        <Paper {...GetPaperProps(localRef)} { ...getRootProps()}>
            {GetInputElem(localRef, getInputProps())}
            <Box {...GetBoxProps(localRef)}>
                {GetIconElem(localRef)}
                {GetTypography(localRef)}
            </Box>
        </Paper>
    )
}