import React from 'react';

/**
 * Props for the generic CenteredModal component.
 */
export interface CenteredModalProps {
    /** The text or element displayed in the DialogTitle */
    title?: React.ReactNode;
    /** The main content of the modal */
    body?: React.ReactNode;
    /** Controls whether the modal is visible */
    show: boolean;
    /** The actions or buttons displayed in DialogActions */
    footer?: React.ReactNode;
}

/**
 * A reusable Material UI Dialog wrapper that provides
 * a centered, scrollable "paper" layout.
 */
export const CenteredModal: React.FC<CenteredModalProps>;

/**
 * Props for the confirmation-specific modal.
 */
export interface CenteredConfirmCancelModalProps {
    /** Custom title, defaults to "Are you sure?" if omitted */
    title?: string;
    /** Controls whether the modal is visible */
    show: boolean;
    /** Callback function triggered when the Cancel button is clicked */
    onCancel?: () => void;
    /** Callback function triggered when the Confirm button is clicked */
    onConfirm?: () => void;
}

/**
 * A specialized version of CenteredModal that includes
 * Cancel and Confirm buttons in a vertical Stack.
 */
export const CenteredConfirmCancelModal: React.FC<CenteredConfirmCancelModalProps>;
