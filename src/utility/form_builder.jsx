import {RangeContainers, ReadFromContainers, UpdateContainerByPath} from "./containers.js";
import {IsNullOrUndefined, IsPrimitive, TitleCase} from "./validation.js";
import {Box, FormControl, FormLabel, Input, InputLabel, Stack, Switch} from "@mui/material";
import {KeyValue} from "../components/key_value/key_value.jsx";
import {DataViewer} from "../components/file_viewer/file_viewer.jsx";
import {DataImage} from "../components/image_viewer/image_viewer.jsx";
import {SelectOptions} from "../components/select_options/select_options.jsx";
import {FieldValueGrid} from "@";

const formatDate = (date) => {
    return date.toISOString().slice(0, 16);
}

export const SelectAssociation = ({jsxKey, key, inputProps}) => {
    let endpoint;
    if ((key.charAt(key.length-1) === "D" && key.charAt(key.length-2) === "I") ||
        (key.charAt(key.length-1) === "S" && key.charAt(key.length-2) === "D")) {
        if (key.charAt(key.length-1) === "D" && key.charAt(key.length-2) === "I"){
            endpoint = key.slice(5, key.length-2)
        }

        if (key.charAt(key.length-1) === "S" && key.charAt(key.length-2) === "D") {
            endpoint = key.slice(5, key.length-3)
            inputProps = {...inputProps, multiple: true}
        }

        return <SelectOptions endpoint={endpoint} jsxKey={jsxKey} inputProps={inputProps} />
    }
    return null
}

const defaultSelector = () => {

    return ({formRef, jsxKey, key, currentType, inputProps}) => {
        let elem = SelectAssociation({jsxKey, key,  inputProps})
        if (!IsNullOrUndefined(elem)){
            return elem
        }

        elem = <Input type="text" key={jsxKey} {...inputProps} />
        if (currentType === 'number' || currentType === 'bigint') {
            return <Input type='number' key={jsxKey} {...inputProps} />
        }

        if (currentType === 'boolean') {
            return <Switch key={jsxKey} {...inputProps} defaultChecked={inputProps.defaultValue}/>
        }

        if (currentType === 'object') {
            if (inputProps.defaultValue["Subtype"] === 19) {
                const container = ReadFromContainers(GetContainer(formRef), key.slice(0, key.lastIndexOf(".")))
                return <FieldValueGrid data={container?.value["Data"]} />
            }

            if (inputProps.defaultValue["Subtype"] === 17) {
                const container = ReadFromContainers(GetContainer(formRef), key.slice(0, key.lastIndexOf(".")))
                return <DataImage key={jsxKey} data={container?.value["Data"]} />
            }

            if (inputProps.defaultValue["Subtype"] === 16 || inputProps.defaultValue["Subtype"] === 0) {
                const container = ReadFromContainers(GetContainer(formRef), key.slice(0, key.lastIndexOf(".")))
                inputProps.name = key.slice(0, key.lastIndexOf("."))+".Data"
                return <DataViewer key={jsxKey} fileData={JSON.stringify(container?.value["Data"], null, 2)} inputProps={inputProps} subtype={inputProps.defaultValue["Subtype"]} />
            }

            if (!IsNullOrUndefined(inputProps.defaultValue["Subtype"]) ||
                !IsNullOrUndefined(inputProps.defaultValue["Data"])) {
                return null
            }

            if (Array.isArray(inputProps.defaultValue)) {
                return Object.keys(inputProps.defaultValue).map((i) => {
                    return (<Input
                        type="text"
                        key={jsxKey}
                        {...inputProps}
                        defaultValue={inputProps.defaultValue[i]}/>)
                })
            }

            if (IsNullOrUndefined(inputProps.defaultValue)) {
                return
            }

            const keyName = Object.keys(inputProps.defaultValue)[0]
            let keyValue = inputProps.defaultValue[keyName]
            if (typeof keyValue === 'object') {
                return null
            }
            return <KeyValue inputKey={key} inputProps={inputProps} />
        }
        return elem
    }
}

export const InitialTypeFormBuilderRefState = (elementSelector, context={}) => {
    return {
        index: 0,
        elements: {},
        nameIndex: {},
        labels: {},
        useLabels: {},
        element_component: {},
        container: undefined,
        handleOnClose: undefined,
        elementSelector: elementSelector || defaultSelector(),

        context: context,
    }
}

export const Close = (ref) => {
    ref.current.handleOnClose()
}

export const SetHandleClose = (ref, handleClose) => {
    const st = ref.current
    st.handleClose = handleClose
    ref.current = st
}

export const SetContainer = (ref, container) => {
    const st = ref.current
    if (!IsNullOrUndefined(st)) {
        st.container = container
    }
    ref.current = st
}

export const GetContainer = (ref) => {
    return ref.current.container
}

export const GetSet = (ref, ind) => {
    const st = ref.current
    const la = st.labels[ind]
    const cm = st.element_component[ind]
    const useLabelOnTop = st.useLabels[ind];
    if (useLabelOnTop) {
        return (
            <Stack key={ind} direction="column" spacing={1} sx={{ width: '100%', pb: 1 }}>
                <Box sx={{ width: '100%'}}>
                    {la}
                </Box>
                <Box sx={{ width: '100%' }}>
                    {cm}
                </Box>
            </Stack>
        );
    }
    return (
        <Stack
            key={ind}
            direction="row"
            gap={1}
            sx={{
                justifyContent: 'space-between',
                width: '100%',
                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                pb: 0.5,
                alignItems: 'flex-end'
            }}
        >
            <Box sx={{ width: "50%", flexShrink: 0 }}>
                {la}
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                {cm}
            </Box>
        </Stack>
    )
}

export const GetElements = (ref) => {
    const sets = {}
    Object.keys(ref.current.nameIndex).map((key, value) => {
        sets[key] = GetSet(ref, value)
    })
    return (
        <Stack direction={"column"} gap={0} >
            {Object.keys(sets).map(x => sets[x])}
        </Stack>
    )
}

export const UpdateElementValues = (ref) => {
    const st = ref.current
    return {
        onChange: (event) => {

            let value = event.target.value
            let op = event.target.selectedOptions

            if (!IsNullOrUndefined(op)) {
                const opts = [].slice.call(op)
                value = opts.map(item => item.value)
                if (opts.length === 1) {
                    value = value[0]
                }
            }

            if (event.target.type === "datetime-local") {
                value = new Date(Date.parse(value)).toISOString()
            }

            const name = event.target.name
            let id = st.nameIndex[name]
            if (IsNullOrUndefined(id)) {
                st.nameIndex[name] = st.index
                id = st.index
                ref.current = st
            }

            st.elements[id] = value

            const parts = name.split(".")
            let containerPath = parts.slice(0, parts.length-1).join(".")
            let field = parts.slice(parts.length-1)

            if (IsNullOrUndefined(ReadFromContainers(GetContainer(ref), containerPath))) {
                containerPath = parts.slice(0, parts.length-2).join(".")
            }

            if (event.target.type === "checkbox") {
                value = event.currentTarget.checked
            }

            ref.current = st
            SetContainer(ref,  UpdateContainerByPath(GetContainer(ref), containerPath, field, value))
            ref.current = st
        }
    }
}

export const GetElementValue = (ref, name) => {
    const st = ref.current
    const id = st.nameIndex[name]
    return st.elements[id]
}

export const GetElementTypes = (ref, key, element) => {
    const currentType = typeof element
    const st = ref.current
    const jsxKey = key + st.index
    const props = {
        name: key,
        defaultValue: GetElementValue(ref, key),
        onChange: UpdateElementValues(ref).onChange,
        sx: {width: "100%"}
    }
    return st.elementSelector({key, formRef: ref, jsxKey, currentType, inputProps: props})
}

export const AddElement = (ref, key, element) => {
    const st = ref.current
    const keyNoRoot = TitleCase(key.replace(/root\./, ""), '_')
    const pathSegments = keyNoRoot.split('.');
    const isInsideData = pathSegments.some(s => s.toLowerCase() === "data")
    if (isInsideData) return;
    if (IsNullOrUndefined(st.nameIndex[key])){
        st.nameIndex[key] = st.index
        st.elements[st.index] = element
        const elm = GetElementTypes(ref, key, element)
        if (!IsNullOrUndefined(elm)) {

            const lastSegment = pathSegments[pathSegments.length - 1];
            const isSubtype = lastSegment.toLowerCase() === "subtype"
            const isArrayIndex = /^\d+$/.test(lastSegment);

            st.useLabels[st.index] = isSubtype || !isArrayIndex;
            let displayName = keyNoRoot;
            if (isSubtype && pathSegments.length > 1) {
                displayName = pathSegments[pathSegments.length - 2];
            }

            st.labels[st.index] = (
                <InputLabel key={"Label" + key + st.index} column={key}>
                    {displayName}
                </InputLabel>
            );

            st.element_component[st.index] = elm;
            st.index++;
        }
    }
    ref.current = st
}

export const GetElementIndex = (ref, key) => {
    return ref.current.nameIndex[key]
}

export const DeleteLabel = (ref, key) => {
    const st = ref.current
    delete st.labels[GetElementIndex(ref, key)]
    ref.current = st
}

export const TypeFormBuilder = ({formRef, container}) => {
    RangeContainers(container, (cont) => {
        const path = cont.path
        const value = cont.value

        if (Array.isArray(value)) {
            const nv = []
            Object.keys(value).forEach(i => {
                if (IsNullOrUndefined(value[i]))  {
                    return
                }

                if (Array.isArray(value[i])) {
                    return;
                }
                nv.push(value[i])
            })
            if (nv.length > 0) {
                AddElement(formRef, path, nv)
            }
            return
        }

        Object.keys(value).forEach(k => {

            if (IsNullOrUndefined(value[k])) {
                return
            }

            if (typeof value[k] === 'object') {
                Object.keys(value[k]).forEach(kv => {
                    const nv = {}
                    nv[kv] = value[k][kv]
                    AddElement(formRef, path+"."+k+"."+kv, nv)
                })
            }

            if (IsPrimitive(value[k])) {
                AddElement(formRef, path+"."+k, value[k])
            }
        })
    })
}