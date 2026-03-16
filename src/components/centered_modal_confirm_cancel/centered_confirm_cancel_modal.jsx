import {IsNullOrUndefined} from "../../utility/validation.js";
import {Button, Stack} from "@mui/material";
import {CenteredModal} from "../centered_modal/centered_modal.jsx";

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