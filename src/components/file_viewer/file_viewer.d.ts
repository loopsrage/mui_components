import React from 'react';

/**
 * Props for the DataViewer component.
 */
export interface DataViewerProps {
    /** The raw file data (string or base64) which may be Gzipped. */
    fileData: string;
    /**
     * If subtype is 0, the viewer is set to read-only.
     * Other subtypes allow editing.
     */
    subtype: number;
    /**
     * Form properties used to sync the editor content back to your state.
     */
    inputProps: {
        /** The field name/path for the data. */
        name: string;
        /**
         * Custom change handler that mimics a standard HTML event
         * so it works with your existing FormBuilder logic.
         */
        onChange: (event: { target: { value: string; name: string } }) => void;
        /** Allows any additional props passed from the parent. */
        [key: string]: unknown;
    };
}

/**
 * DataViewer handles decompression of Gzipped data and provides
 * a Rich Text Editor (ReactQuill) with a clipboard copy feature.
 */
export const DataViewer: React.FC<DataViewerProps>;
