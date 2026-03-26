import React from 'react';

/**
 * Defines the shape of the 'api' prop used across your components.
 * Adjust return types (currently Promise<any>) if you have specific response types.
 */
export interface CrudApi {
    schema: () => unknown;
    create: (data: unknown) => Promise<unknown>;
    update: (data: unknown, id: string | number) => Promise<unknown>;
    deleteId: (id: string | number) => Promise<unknown>;
    deleteIds: (ids: (string | number)[]) => Promise<unknown>;
}

export interface BaseProps {
    refreshGrid: () => void;
    api: CrudApi;
}

export interface IdProps extends BaseProps {
    id: string | number;
}

export interface DeleteManyProps extends BaseProps {
    handleSelectedIds: () => (string | number)[];
}

export interface EditCellRendererProps {
    handleRefreshGrid: () => Promise<void>;
    api?: CrudApi | null;
    id: string | number;
    params: object;
}

// Component Exports
export const Create: React.FC<BaseProps>;
export const Update: React.FC<IdProps>;
export const DeleteMany: React.FC<DeleteManyProps>;
export const Delete: React.FC<IdProps>;
export const EditCellRenderer: React.FC<EditCellRendererProps>;