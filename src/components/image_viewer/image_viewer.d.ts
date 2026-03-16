import React from "react";

export interface DataImageProps {
    /** The gzipped image data string to be decompressed and rendered. */
    data: string;
    /**
     * The image format encoding (e.g., 'png', 'jpeg').
     * Defaults to 'png' if not provided.
     */
    encoding?: string;
    /**
     * Alternative text for the image.
     * Defaults to 'ERROR' if not provided.
     */
    alt?: string;
}

/**
 * A component that decompresses gzipped image data and renders it
 * as a base64-encoded responsive image.
 */
export const DataImage: React.FC<DataImageProps>;