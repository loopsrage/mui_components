
import React, { useRef, useState} from "react";

import {BuildContainerTree, NewObject, ReadFromContainers} from "../../utility/containers.js";
import {Box, Button, IconButton, Stack, Tab, Tabs} from "@mui/material";
import {IsNullOrUndefined} from "../../utility/validation.js";
import {CenteredModal} from "../centered_modal/centered_modal.jsx";
import {
    AddElement,
    GetContainer, GetElements,
    InitialTypeFormBuilderRefState,
    SetContainer,
    TypeFormBuilder
} from "../../utility/form_builder.jsx";
import DescriptionIcon from '@mui/icons-material/Description'
export const TypeFormBuilderModal = ({title, button_title, getSchema, handleSave, elementSelector}) => {
    const [show, setShow] = useState(false);
    const [elements, setElements] = useState(undefined);
    const [activeTab, setActiveTab] = useState(0);

    const formRef = useRef(InitialTypeFormBuilderRefState(elementSelector))

    const handleOnAdd = async () => {
        try {
            const data = await getSchema();
            const tree = BuildContainerTree(null, [], ".", data);
            SetContainer(formRef, tree);

            TypeFormBuilder({formRef, container: GetContainer(formRef)});

            setElements(GetElements(formRef));
            setShow(true);
        } catch (error) {
            console.error("Failed to load schema:", error);
        }
    }

    const getbody = () => {
        const handleChange = (event, newValue) => setActiveTab(newValue);
        return (<Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange} aria-label="custom tabs">
                    <Tab label="File Upload" />
                    <Tab label="File Viewer" />
                </Tabs>
            </Box>
            {/* Tab 1: File Upload */}
            {activeTab === 0 && (
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                    {elements}
                </Box>
            )}
            {/* Tab 2: File Viewer */}
            {activeTab === 1 && (
                <Box sx={{ p: 3 }}>
                    <pre>{JSON.stringify(GetContainer(formRef)?.value, null, 2)}</pre>
                </Box>
            )}
        </Box>)
    }

    const handleOnClose = () => {
        setShow(false)
    }

    const handleOnSave = () => {
        handleSave(GetContainer(formRef).value)
        setShow(false)
    }

    const handleAddCustomField = () => {
        const elm = {}
        elm[formRef.current.index] = ""
        const current = GetContainer(formRef)
        if (IsNullOrUndefined(ReadFromContainers(current, "root.Fields"))) {
            SetContainer(formRef, NewObject(current, "root.Fields", {}))
        }
        AddElement(formRef, "root.Fields."+formRef.current.index, elm)
        setElements(GetElements(formRef))
    }

    const footerButtons = () => {
        return (
            <Stack direction="row" gap={1}>
                <Button onClick={handleAddCustomField}>Add Field</Button>
                <Button onClick={handleOnSave}>Save</Button>
                <Button onClick={handleOnClose}>Close</Button>
            </Stack>
        )
    }

    return (
        <Stack direction="row" gap={3} >
            <IconButton onClick={handleOnAdd}>
                <DescriptionIcon sx={{ color: 'red' }} />
            </IconButton>
            <CenteredModal title={title}
                           body={getbody()}
                           show={show}
                           footer={footerButtons()}
                           title_sx={{background: "black", color: 'white'}}
            />
        </Stack>
    )
}