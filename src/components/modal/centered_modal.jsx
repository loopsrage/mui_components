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

export const CenteredConfirmCancelModal = ({title, show, onCancel, onConfirm}) => {

    const handleOnCancel = () => {
        if (!IsNullOrUndefined(onCancel)) onCancel()
    }

    const handleOnConfirm = () => {
        if (!IsNullOrUndefined(onConfirm)) onConfirm()
    }

    const footerButtons = () => {
        return (
            <Stack direction={"column"} gap={3}>
                <Button onClick={handleOnCancel}>Cancel</Button>
                <Button onClick={handleOnConfirm}>Confirm</Button>
            </Stack>
        )
    }

    return <CenteredModal title={title ? title: "Are you sure?"} show={show} footer={footerButtons()} />
}