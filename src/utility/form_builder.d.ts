import React, {type RefObject} from 'react';
import type {Container} from "./containers";

/**
 * Utility Types
 */
declare const formatDate: (date: Date) => string;

interface InputProps extends Record<string, never> {
    defaultValue?: never;
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
export interface SelectAssociationProps {
    jsxKey: string;
    key: string;
    inputProps: InputProps;
}

export interface ListSelectProps {
    formRef: RefObject<FormBuilderState | null>;
    inputKey: string;
    jsxKey: string;
    inputProps: InputProps;
}

/**
 * Components
 */
export const SelectAssociation: React.FC<SelectAssociationProps>;

declare function ListSelect(props: ListSelectProps): React.JSX.Element | null;

/**
 * State Management & Refs
 */
export interface FormBuilderState {
    index: number;
    elements: Record<string, never>;
    nameIndex: Record<string, never>;
    labels: Record<string, string>;
    element_component: Record<string, never>;
    container: Container | undefined;
    elementSelector: (params: SelectorParams) => React.JSX.Element | null | undefined;
}

export const InitialTypeFormBuilderRefState: (
    elementSelector?: (params: SelectorParams) => React.JSX.Element | null | undefined
) => FormBuilderState;

export const SetContainer: (
    ref: RefObject<FormBuilderState | null>,
    container: Container
) => void;

/**
 * State Accessors & UI Generators
 */
export const GetContainer: (
    ref: RefObject<FormBuilderState | null>
) => Container;

export const GetSet: (
    ref: RefObject<FormBuilderState | null>,
    ind: string | number
) => React.JSX.Element;

export const GetElements: (
    ref: RefObject<FormBuilderState | null>
) => React.JSX.Element;

/**
 * Event Handlers
 */
export const UpdateElementValues: (
    ref: RefObject<FormBuilderState | null>
) => {
    onChange: (event: React.ChangeEvent<never>) => void;
};

/**
 * Element & State Management
 */
export const GetElementValue: (
    ref: RefObject<FormBuilderState | null>,
    name: string
) => never;

export const GetElementTypes: (
    ref: RefObject<FormBuilderState | null>,
    key: string,
    element: never
) => React.JSX.Element | null | undefined;

export const AddElement: (
    ref: RefObject<FormBuilderState | null>,
    key: string,
    element: never
) => void;

export const GetElementIndex: (
    ref: RefObject<FormBuilderState | null>,
    key: string
) => number;

export const DeleteLabel: (
    ref: RefObject<FormBuilderState | null>,
    key: string
) => void;

/**
 * Form Builder Initialization
 * Note: This function appears to perform side effects (populating the ref)
 * rather than returning a React Element.
 */
export interface TypeFormBuilderProps {
    formRef: React.MutableRefObject<FormBuilderState | null>;
    container: Container;
}

export const TypeFormBuilder: (props: TypeFormBuilderProps) => void;

