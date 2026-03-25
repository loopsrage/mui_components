import { default as React } from 'react';
export interface CenteredModalProps {
    /** The text or element displayed in the DialogTitle */
    title?: React.ReactNode;
    /** The main content of the modal */
    body?: React.ReactNode;
    /** Controls whether the modal is visible */
    show: boolean;
    /** The actions or buttons displayed in DialogActions */
    footer?: React.ReactNode;
    title_sx?: object;
    content_sx?: object;
    footer_sx?: object;
    paper_sx?: object;
}
export declare const CenteredModal: React.FC<CenteredModalProps>;
//# sourceMappingURL=centered_modal.d.ts.map