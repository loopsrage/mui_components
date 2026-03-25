import { useEffect, useRef } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $getRoot, $createTextNode, ParagraphNode, TextNode } from "lexical";
import { Box, Paper } from "@mui/material";

const DataSyncPlugin = ({ fileData, onChange, name }) => {
    const [editor] = useLexicalComposerContext();
    const lastContentRef = useRef("");

    useEffect(() => {
        if (!fileData) return;

        const processData = async () => {
            if (!fileData) return;

            let cleanText = String(fileData)
                .replace(/^"|"$/g, '')
                .replace(/\\n/g, '<br/>');

            if (cleanText === lastContentRef.current) return;
            lastContentRef.current = cleanText;

            editor.update(() => {
                const root = $getRoot();
                root.clear();

                const parser = new DOMParser();
                const dom = parser.parseFromString(`<div>${cleanText}</div>`, "text/html");
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