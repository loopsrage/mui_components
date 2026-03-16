import React from "react";

export interface KeyValueProps {
    /** The base key used to generate unique names for the inputs */
    inputKey: string;
    /**
     * Standard input properties.
     * Must include a `defaultValue` object where the first key is the label
     * and its value is the input content.
     */
    inputProps: {
        defaultValue: Record<string, unknown>;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
        [key: string]: unknown;
    };
}

/**
 * A component that renders two linked text fields:
 * one for a 'key' and one for its corresponding 'value'.
 */
export const KeyValue: React.FC<KeyValueProps>;