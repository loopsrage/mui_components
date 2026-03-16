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
