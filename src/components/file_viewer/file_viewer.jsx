import { useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
// IMPORT THE NODE CLASSES
import { $getRoot, $createTextNode, ParagraphNode, TextNode } from "lexical";
import { Box, Paper } from "@mui/material";

const DataSyncPlugin = ({ fileData, onChange, name }) => {
    const [editor] = useLexicalComposerContext();
    const lastContentRef = useRef("");

    useEffect(() => {
        if (!fileData) return;

        const processData = async () => {
            let decoded = "";

            // FIX 1: Safely extract the text string from your object
            if (typeof fileData === 'object' && fileData !== null) {
                // If your payload has 'reasoning', use it, otherwise stringify the whole thing
                decoded = fileData || JSON.stringify(fileData, null, 2);
            } else {
                decoded = String(fileData);
            }

            // Guard: Prevent infinite loop clearing the editor
            if (decoded === lastContentRef.current) return;
            lastContentRef.current = decoded;

            editor.update(() => {
                const root = $getRoot();
                root.clear();

                const parser = new DOMParser();
                // FIX 2: Ensure we pass a string to replace
                const isHtml = decoded.includes('<') && decoded.includes('>');
                const htmlContent = isHtml ? decoded : `<div>${decoded.replace(/\n/g, '<br/>')}</div>`;

                const dom = parser.parseFromString(htmlContent, "text/html");
                const nodes = $generateNodesFromDOM(editor, dom);

                if (nodes.length > 0) {
                    root.append(...nodes);
                }
            });
        };

        processData();
    }, [fileData, editor]);

    useEffect(() => {
        return editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                const htmlString = $generateHtmlFromNodes(editor);
                lastContentRef.current = htmlString;
                onChange({ target: { value: htmlString, name } });
            });
        });
    }, [editor, onChange, name]);

    return null;
};

export const DataViewer = ({ fileData, subtype, inputProps }) => {
    const initialConfig = {
        namespace: "MyEditor",
        // FIX 3: Register the nodes here or Lexical will crash
        nodes: [ParagraphNode, TextNode],
        theme: {},
        onError: (error) => console.error("Lexical Error:", error),
        editable: subtype !== 0,
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Paper variant="outlined" sx={{ p: 2, minHeight: '200px', position: 'relative' }}>
                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin
                        contentEditable={<ContentEditable style={{ outline: 'none', minHeight: '170px' }} />}
                        placeholder={<div style={{ position: 'absolute', top: 20, left: 20, color: '#aaa' }}>Enter text...</div>}
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