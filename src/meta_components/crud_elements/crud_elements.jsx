import {useState} from "react";
import {TypeFormBuilderModal} from "../../components/modal/modal.jsx";
import {Box, Button, Stack} from "@mui/material";
import {
    CenteredConfirmCancelModal
} from "../../components/centered_modal_confirm_cancel/centered_confirm_cancel_modal.jsx";
import {HandleGet} from "@/utility/api.js";

export const Create = ({refreshGrid, api}) => {
    const handleOnSave = (output) => {
        api.create(output).then(() => refreshGrid())
    }
    return <TypeFormBuilderModal title={"Create"} getSchema={api.schema} handleSave={handleOnSave}  />
}

export const Update = ({refreshGrid, api, id, title, footerButtons}) => {
    const handleOnSave = (output) => {
        api.update(output, id).then(() => refreshGrid())
    }
    return <TypeFormBuilderModal
        title={title}
        button_title={"Update"}
        getSchema={HandleGet(api, id)}
        handleSave={handleOnSave}
        footerButtons={footerButtons} register_component={true} refKey={"update_modal"}/>
}

export const DeleteMany = ({refreshGrid, api, handleSelectedIds}) => {
    const [show, setShow] = useState(false)

    const handleOnCLick = () => {
        setShow(!show)
    }

    const handleConfirm = () => {
        api.deleteIds(handleSelectedIds()).then(refreshGrid())
        setShow(false)
    }

    return (
        <Stack direction="horizontal" gap={2}>
            <Button onClick={handleOnCLick}>Delete</Button>
            <CenteredConfirmCancelModal onConfirm={handleConfirm} show={show}/>
        </Stack>
    )
}

export const Delete = ({refreshGrid, api, id}) => {
    const [show, setShow] = useState(false)

    const handleOnCLick = () => {
        setShow(!show)
    }

    const handleConfirm = () => {
        api.deleteId(id).then(refreshGrid())
    }

    return (
        <Stack direction="row" gap={3}>
            <Button onClick={handleOnCLick}>Delete</Button>
            <CenteredConfirmCancelModal onConfirm={handleConfirm} show={show}/>
        </Stack>
    )
}

export const EditCellRenderer = ({handleRefreshGrid, api, id, params}) => {
    const props = {...params, refreshGrid: handleRefreshGrid, api, id};
    return (
        <Stack direction="row" gap={1}>
            <Update  {...props} />
        </Stack>
    )
}