
import React, {useLayoutEffect, useRef, useState} from "react";

import {BuildContainerTree, NewObject, ReadFromContainers} from "@/utility/containers.js";
import {Box, Button, IconButton, Stack, Tab, Tabs} from "@mui/material";
import {IsNullOrUndefined} from "@/utility/validation.js";
import {CenteredModal} from "@";
import {
    AddElement,
    GetContainer, GetElements,
    InitialTypeFormBuilderRefState,
    SetContainer, SetHandleClose,
    TypeFormBuilder
} from "../../utility/form_builder.jsx";
import DescriptionIcon from '@mui/icons-material/Description'
import {useConditionalRef} from "@/context/context_index.ts";

export const TypeFormBuilderModal = ({title, getSchema, handleSave, elementSelector, footerButtons, refKey, register_component=false, context=null}) => {
    const setRegistryRef = useConditionalRef(refKey, register_component)
    const formRef = useRef(null)
    const [show, setShow] = useState(false);

    const handleOnClose = () => {
        setShow(false)
    }

    const handleOnSave = () => {
        handleSave(GetContainer(formRef).value)
        setShow(false)
    }

    if (!formRef.current) {
        formRef.current = InitialTypeFormBuilderRefState(elementSelector, {
            setShow: (value) => {setShow(value)},
            ...context
        })
    }

    useLayoutEffect(() => {
        setRegistryRef(formRef.current);
        return () => setRegistryRef(null);
    }, [setRegistryRef]);

    const [elements, setElements] = useState(undefined);
    const [activeTab, setActiveTab] = useState(0);

    const handleOnAdd = async () => {
        try {
            const data = await getSchema();
            const tree = BuildContainerTree(null, [], ".", data);
            SetContainer(formRef, tree);
            SetHandleClose(formRef, handleOnClose)
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
            tabs && (<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={activeTab} onChange={handleChange} aria-label="custom tabs">
                    <Tab label="File Upload" />
                    <Tab label="File Viewer" />
                </Tabs>
            </Box>)
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

    if (!footerButtons) {
        footerButtons = []
    }

    return (
        <Stack direction="row" gap={3} >
            <IconButton onClick={handleOnAdd}>
                <DescriptionIcon sx={{ color: 'red' }} />
            </IconButton>
            <CenteredModal title={title}
                           body={getbody()}
                           show={show}
                           footer={footerButtons}
                           title_sx={{background: "black", color: 'white'}}
            />
        </Stack>
    )
}