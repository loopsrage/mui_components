import {useEffect, useRef, useState} from "react";
import {DecompressGzip, IsGzip, StringToArrayBuffer} from "../../utility/gzip.js";
import {IsNullOrUndefined} from "../../utility/validation.js";
import {Stack} from "@mui/material";
import * as PropTypes from "prop-types";
import ReactQuill from "react-quill-new";
import {BsClipboard2} from "react-icons/bs";

ReactQuill.propTypes = {
    ref: PropTypes.any,
    theme: PropTypes.string,
    value: PropTypes.any,
    style: PropTypes.shape({overflow: PropTypes.string}),
    readOnly: PropTypes.bool,
    modules: PropTypes.shape({toolbar: PropTypes.any}),
    onChange: PropTypes.func
}

export const DataViewer = ({fileData, subtype, inputProps}) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        const dataBuffer = StringToArrayBuffer(fileData);
        if (IsGzip(dataBuffer)) {
            DecompressGzip(new Blob([dataBuffer])).then(decompressed => {
                setData(decompressed.replace(/(?:\\r\\n)+/g, "</br>"));
            });
            return
        }
        const decoder = new TextDecoder("utf-8");
        setData(decoder.decode(dataBuffer))
    }, []);


    const quilRef = useRef(null)

    const GetEditorText = () => {
        const st = quilRef.current
        if (IsNullOrUndefined(st)) {
            return ""
        }

        const editor = st.getEditor()
        if (IsNullOrUndefined(editor)) {
            return ""
        }

        return editor.getText()
    }

    const handleOnChange = (e) => {
        inputProps.onChange({target: {value: GetEditorText(), name: inputProps.name}})
    }

    const handleCopy = async () => {
        await navigator.clipboard.writeText(GetEditorText())
    }

    const readOnly = subtype === 0
    return (
        <Stack direction={"row"} gap={1}>
            <Stack direction={"column"} gap={3}>
                <BsClipboard2 onClick={handleCopy}>Copy</BsClipboard2>
            </Stack>
            <ReactQuill ref={quilRef} theme="snow"
                        value={data} style={{overflow: "auto"}}
                        readOnly={readOnly} modules={{ toolbar: !readOnly }}
                        onChange={handleOnChange} />
        </Stack>
    )
}