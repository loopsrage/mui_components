import { default as React } from 'react';
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
