import React from 'react';

export interface SelectOptionsProps {
    /** Unique key for the React component */
    jsxKey: string;
    /** The API endpoint string used to fetch the dropdown data */
    endpoint: string;
    /**
     * Props passed from the form builder,
     * including defaultValue and onChange handlers.
     */
    inputProps: {
        defaultValue?: unknown;
        onChange?: (event: unknown) => void;
        [key: string]: unknown;
    };
}

/**
 * A dynamic Material UI Select component that fetches its
 * options from a remote API endpoint on mount.
 */
export const SelectOptions: React.FC<SelectOptionsProps>;
