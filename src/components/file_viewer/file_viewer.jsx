import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $getRoot, $insertNodes } from "lexical";
import { Box, Paper } from "@mui/material";

import { DecompressGzip, IsGzip, StringToArrayBuffer } from "../../utility/gzip.js";

// Helper Plugin to sync data in/out of Lexical
const DataSyncPlugin = ({ fileData, onChange, name }) => {
    const [editor] = useLexicalComposerContext();

    // Handle incoming data (fileData -> Editor)
    useEffect(() => {
        if (!fileData) return;

        const processData = async () => {
            const dataBuffer = StringToArrayBuffer(fileData);
            let decoded = "";

            if (IsGzip(dataBuffer)) {
                const decompressed = await DecompressGzip(new Blob([dataBuffer]));
                decoded = decompressed.replace(/(?:\\r\\n)+/g, "<br/>");
            } else {
                decoded = new TextDecoder("utf-8").decode(dataBuffer);
            }

            editor.update(() => {
                const parser = new DOMParser();
                const dom = parser.parseFromString(decoded, "text/html");
                const nodes = $generateNodesFromDOM(editor, dom);
                $getRoot().clear();
                $getRoot().append(...nodes);
            });
        };

        processData();
    }, [fileData, editor]);

    // Handle outgoing data (Editor -> onChange)
    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const htmlString = $generateHtmlFromNodes(editor);
                onChange({ target: { value: htmlString, name } });
            });
        });
    }, [editor, onChange, name]);

    return null;
};

export const DataViewer = ({ fileData, subtype, inputProps }) => {
    const initialConfig = {
        namespace: "MyEditor",
        theme: {}, // Add MUI-like classes here if needed
        onError: (error) => console.error(error),
        editable: subtype !== 0,
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper variant="outlined" sx={{ p: 2, minHeight: '200px', position: 'relative' }}>
                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin
                        contentEditable={<ContentEditable style={{ outline: 'none', minHeight: '170px' }} />}
                        placeholder={<div style={{ position: 'absolute', top: 20, color: '#aaa' }}>Enter text...</div>}
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                    <DataSyncPlugin
                        fileData={fileData}
                        onChange={inputProps.onChange}
                        name={inputProps.name}
                    />
                </LexicalComposer>
            </Paper>
        </Box>
    );
};
