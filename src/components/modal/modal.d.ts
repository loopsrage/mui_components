import React, {type ReactElement} from 'react';
import { SelectorParams } from "@/utility/form_builder";

/**
 * Props for the TypeFormBuilderModal component.
 */
export interface TypeFormBuilderModalProps {
    /** The label for the trigger button and the header of the modal. */
    title: unknown;
    button_title: string;
    tabs?: boolean;
    /**
     * Async function that returns the schema data (e.g., from an API).
     * Used to build the initial container tree.
     */
    getSchema: () => Promise<unknown>;
    /**
     * Callback function triggered when the 'Save' button is clicked.
     * Receives the final value object from the FormBuilder container.
     */
    handleSave: (data: unknown) => void;
    /**
     * Optional custom function to decide which React component to render
     * for a specific data type or key.
     */
    elementSelector?: (params: SelectorParams) => React.JSX.Element | null | undefined;

    footerButtons?: ReactElement[] | ReactElement | null;
    context?: Record<string, unknown> | null | undefined;
}

/**
 * A comprehensive Modal component that:
 * 1. Fetches a schema on-demand.
 * 2. Generates a dynamic form using TypeFormBuilder.
 * 3. Provides a Tabbed interface to switch between the form and a JSON preview.
 * 4. Allows adding custom dynamic fields to the 'root.Fields' path.
 */
export const TypeFormBuilderModal: React.FC<TypeFormBuilderModalProps>;
