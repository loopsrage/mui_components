import {useState} from "react";
import {TypeFormBuilderModal} from "../../components/modal/modal.jsx";
import {Box, Button, Stack} from "@mui/material";
import {
    CenteredConfirmCancelModal
} from "../../components/centered_modal_confirm_cancel/centered_confirm_cancel_modal.jsx";
import {HandleGet} from "@/utility/api.js";

export const Create = ({refreshGrid, api, ...props}) => {
    const handleOnSave = (output) => {
        api.create(output).then(() => refreshGrid())
    }
    return <TypeFormBuilderModal title={"Create"} getSchema={api.schema} handleSave={handleOnSave} {...props} />
}

export const Update = ({refreshGrid, api, id, title, footerButtons, ...props}) => {
    const handleOnSave = (output) => {
        api.update(output, id).then(() => refreshGrid())
    }
    return <TypeFormBuilderModal
        title={title}
        button_title={"Update"}
        getSchema={HandleGet(api, id)}
        handleSave={handleOnSave}
        footerButtons={footerButtons}
        register_component={true}
        refKey={String(id)}
        {...props}/>
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
        <Stack direction="horizontal" spacing={2} sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
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
        <Stack direction="row" spacing={1} sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Button onClick={handleOnCLick}>Delete</Button>
            <CenteredConfirmCancelModal onConfirm={handleConfirm} show={show}/>
        </Stack>
    )
}

export const EditCellRenderer = ({handleRefreshGrid, api, id, params}) => {
    const props = {...params, refreshGrid: handleRefreshGrid, api, id};
    return (
        <Stack direction="row" spacing={1} sx={{width: "100%", justifyContent: "center", alignItems: "center"}}>
            <Update  {...props} />
            <Delete  {...props} />
        </Stack>
    )
}