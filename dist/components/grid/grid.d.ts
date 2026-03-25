import { FC, JSX, RefObject } from 'react';
import { GridApi, GridColDef, GridDataSource, GridFilterModel, GridGetRowsParams, GridPaginationModel, GridRenderCellParams, GridRowSelectionModel, GridSortModel, GridValidRowModel } from '@mui/x-data-grid';
import { Container } from '../../utility/containers';
import { ApiClient } from '../../utility/api';
import { IBaseRefProps } from '../../ibase/ibase';
export interface TableState extends IBaseRefProps {
    gridRef: RefObject<GridApi | null>;
    index: number;
    headers: GridColDef[];
    headers_ri: Record<string, number>;
    rows: unknown[][];
    row_count: number;
    row_details?: boolean | null;
    cellRenderer?: (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null;
    datasource: GridDataSource;
    paginationModel: GridPaginationModel | undefined;
    refresh: () => void;
    selected_ids: GridRowSelectionModel | null;
    filter_model: GridFilterModel | null;
    selected_data: unknown[];
    api: ApiClient;
    endpoint: string;
    args: Record<string, string | number | boolean | undefined | null | number[] | string[]>;
    fetch_params: Record<string, string | number | boolean | undefined | null> | null;
    modal_title: string | undefined | null;
    context?: Record<string, unknown> | null | undefined;
}
export interface Props extends IBaseRefProps {
    api: ApiClient;
    endpoint: string;
    row_details?: boolean | null;
    checkbox_select?: boolean | undefined;
    toolbar?: boolean | undefined;
    cellRenderer?: (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null;
}
export declare const SetEndpoint: (ref: RefObject<TableState>, endpoint: string) => void;
export declare const GetEndpoint: (ref: RefObject<TableState>) => string;
export declare const SetHeadersFromJson: (ref: RefObject<TableState>, data: Container) => void;
export declare const SetRowsFromJson: (ref: RefObject<TableState>, data: Container) => void;
export declare const GetRows: (ref: RefObject<TableState>) => GridValidRowModel[];
export declare const GetHeaders: (ref: RefObject<TableState>) => GridColDef[];
export declare const GetPaginationModel: (ref: RefObject<TableState>) => GridPaginationModel | undefined;
export declare const SetArgs: (ref: RefObject<TableState>, args: Record<string, string | number | boolean | undefined | null>) => void;
export declare const SetOrAddArgs: (ref: React.RefObject<TableState>, args: {
    item_ids: number[];
}) => void;
export declare const SetSortModel: (ref: RefObject<TableState>, sortModel: GridSortModel) => void;
export declare const SetFilterModel: (ref: RefObject<TableState>, filterModel: GridFilterModel) => void;
export declare const SetPaginationModel: (ref: RefObject<TableState>, paginationModel: GridPaginationModel | undefined) => () => void;
export declare const SetFetchParams: (ref: RefObject<TableState>, fetchParams: Record<string, string | number | boolean | undefined | null>) => void;
export declare const GetFetchParams: (ref: RefObject<TableState>) => Record<string, string | number | boolean | null | undefined> | null;
export interface ApiResponse<T = unknown> {
    results: T[];
    pagination?: {
        total: number;
    };
}
export declare const DataSourceWrapper: (ref: RefObject<TableState>, handleToggle: () => void) => {
    getRows: (params: GridGetRowsParams) => Promise<{
        rows: GridValidRowModel[];
        rowCount: number;
    }>;
};
export declare const SetSearch: (ref: RefObject<TableState>, value: string) => void;
export declare const GetDatasource: (ref: RefObject<TableState>) => GridDataSource;
export declare const Refresh: (ref: RefObject<TableState>) => Promise<void>;
export declare const SetSelectedRows: (ref: RefObject<TableState>) => (model: GridRowSelectionModel) => void;
export declare const SetCellRenderer: (ref: RefObject<TableState>, cellRenderer: (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null) => void;
export declare const GetCellRenderer: (ref: RefObject<TableState>) => ((params: GridRenderCellParams) => (undefined | JSX.Element) | null) | undefined;
export declare const ModalCellRendererWrapper: (ref: RefObject<TableState>) => (params: GridRenderCellParams) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const UITable: FC<Props>;
//# sourceMappingURL=grid.d.ts.map