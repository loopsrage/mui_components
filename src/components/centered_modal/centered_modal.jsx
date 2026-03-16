import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Stack} from "@mui/material";
import {IsNullOrUndefined} from "../../utility/validation.js";

export const CenteredModal = ({title, body, show, footer}) => {
    return (
        <Dialog
            open={show}
            maxWidth="lg"
            fullWidth={true}
            scroll="paper"
            aria-labelledby="centered-modal-title"
        >
            <DialogTitle id="centered-modal-title">
                {title}
            </DialogTitle>
            <DialogContent dividers={true}>
                {body}
            </DialogContent>
            <DialogActions>
                {footer}
            </DialogActions>
        </Dialog>
    )
}
