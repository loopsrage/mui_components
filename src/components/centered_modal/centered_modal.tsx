import { Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import React from "react";


export interface CenteredModalProps {
    /** The text or element displayed in the DialogTitle */
    title?: React.ReactNode;
    /** The main content of the modal */
    body?: React.ReactNode;
    /** Controls whether the modal is visible */
    show: boolean;
    /** The actions or buttons displayed in DialogActions */
    footer?: React.ReactNode;

    title_sx?: object;
    content_sx?: object;
    footer_sx?: object;
}

export const CenteredModal: React.FC<CenteredModalProps> = ({title, body, show, footer, title_sx, footer_sx, content_sx}) => {
    return (
        <Dialog
            open={show}
            maxWidth="lg"
            fullWidth={true}
            scroll="paper"
            aria-labelledby="centered-modal-title"
        >
            <DialogTitle id="centered-modal-title" sx={{
                ...title_sx,
            }}>
                {title}
            </DialogTitle>
            <DialogContent dividers={true} sx={{...content_sx}}>
                {body}
            </DialogContent>
            <DialogActions sx={footer_sx}>
                {footer}
            </DialogActions>
        </Dialog>
    )
}
