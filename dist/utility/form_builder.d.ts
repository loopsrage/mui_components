import { default as React, RefObject } from 'react';
import { Container } from './containers';
/**
 * Utility Types
 */
declare const formatDate: (date: Date) => string;

interface InputProps extends Record<string, unknown> {
    defaultValue?: unknown;
    multiple?: boolean;
    name?: string;
}

interface SelectorParams {
    formRef: RefObject<FormBuilderState | null>;
    jsxKey: string;
    key: string;
    currentType: string;
    inputProps: InputProps;
}

/**
 * Component Props
 */
export declare interface SelectAssociationProps {
    jsxKey: string;
    key: string;
    inputProps: InputProps;
}

export declare interface ListSelectProps {
    formRef: RefObject<FormBuilderState | null>;
    inputKey: string;
    jsxKey: string;
    inputProps: InputProps;
}

/**
 * Components
 */
export declare const SelectAssociation: React.FC<SelectAssociationProps>;

/**
 * State Management & Refs
 */
export interface FormBuilderState {
    index: number;
    elements: Record<string, unknown>;
    nameIndex: Record<string, unknown>;
    labels: Record<string, string>;
    useLabels: Record<string, boolean>;
    element_component: Record<string, unknown>;
    container: Container | undefined;
    elementSelector: (params: SelectorParams) => React.JSX.Element | null | undefined;
    context?: Record<string, unknown> | null | undefined;
}

export declare const InitialTypeFormBuilderRefState: (
    elementSelector?: (params: SelectorParams) => React.JSX.Element | null | undefined
) => FormBuilderState;

export declare const SetContainer: (
    ref: RefObject<FormBuilderState | null>,
    container: Container
) => void;

/**
 * State Accessors & UI Generators
 */
export declare const GetContainer: (
    ref: RefObject<FormBuilderState | null>
) => Container;

export declare const GetSet: (
    ref: RefObject<FormBuilderState | null>,
    ind: string | number
) => React.JSX.Element;

export declare const GetElements: (
    ref: RefObject<FormBuilderState | null>
) => React.JSX.Element;

/**
 * Event Handlers
 */
export declare const UpdateElementValues: (
    ref: RefObject<FormBuilderState | null>
) => {
    onChange: (event: React.ChangeEvent<unknown>) => void;
};

/**
 * Element & State Management
 */
export declare const GetElementValue: (
    ref: RefObject<FormBuilderState | null>,
    name: string
) => unknown;

export declare const GetElementTypes: (
    ref: RefObject<FormBuilderState | null>,
    key: string,
    element: unknown
) => React.JSX.Element | null | undefined;

export declare const AddElement: (
    ref: RefObject<FormBuilderState | null>,
    key: string,
    element: unknown,
) => void;

export declare const GetElementIndex: (
    ref: RefObject<FormBuilderState | null>,
    key: string
) => number;

export declare const DeleteLabel: (
    ref: RefObject<FormBuilderState | null>,
    key: string
) => void;

/**
 * Form Builder Initialization
 * Note: This function appears to perform side effects (populating the ref)
 * rather than returning a React Element.
 */
export interface TypeFormBuilderProps {
    formRef: RefObject<FormBuilderState | null>;
    container: Container;
}

export declare const TypeFormBuilder: (props: TypeFormBuilderProps) => void;

