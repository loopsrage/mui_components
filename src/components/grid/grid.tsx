import {type FC, type RefObject, useRef, useState} from "react";
import {
    DataGrid,
    type GridColDef,
    type GridDataSource, type GridFilterModel,
    GridGetRowsError,
    type GridGetRowsParams,
    type GridPaginationModel, type GridRowSelectionModel,
    type GridValidRowModel
} from '@mui/x-data-grid';
import {BuildContainerTree, type Container, RangePrimitiveValues} from "../../utility/containers";
import {IsPrimitive} from "../../utility/validation";
import type {ApiClient} from "../../utility/api";

export interface TableState {
    index: number
    headers: GridColDef[]
    headers_ri: Record<string, number>
    rows: unknown[][]
    row_count: number
    datasource: GridDataSource
    paginationModel: GridPaginationModel

    refresh: () => void
    selected_ids: GridRowSelectionModel | null
    filter_model:  GridFilterModel | null
    selected_data: unknown[]
    api: ApiClient
    args: Record<string, string | number | boolean | undefined | null>
}

export interface Props {
    ref: RefObject<TableState>
    api: ApiClient
}

const initialRef = (ref: RefObject<TableState>, api: ApiClient, handleToggle: () => void) => {
    return {
        index: 0,
        headers: [],
        headers_ri: {},
        rows: [],
        row_count: 0,
        datasource: DataSourceWrapper(ref, handleToggle),
        paginationModel: { page: 0, pageSize: 5 },
        args: {},
        selected_data: [],
        selected_ids: null,
        refresh: handleToggle,
        filter_model: null,
        api: api,
    }
}

export const SetHeadersFromJson = (ref: RefObject<TableState>, data: Container) => {
    const st = ref.current
    RangePrimitiveValues(data, (cont) => {
        const val = cont.value;
        const path = cont.path;
        const valueType = typeof val;

        if (st.headers_ri[path] !== undefined) return;
        let muiType: 'number' | 'date' | 'dateTime' | 'string' = 'string';
        if (valueType === 'number') {
            muiType = 'number';
        }
        else if (path.toLowerCase().includes("date") || path.toLowerCase().includes("modified")) {
            muiType = 'date';
        }
        else if (valueType === 'string') {
            muiType = 'string';
        }
        st.headers[st.index] = {
            field: path,
            type: muiType,
            headerName: path
        };
        st.rows[st.index] = []
        st.headers_ri[path] = st.index;
        st.index++;
    })
    ref.current = st
}

export const SetRowsFromJson = (ref: RefObject<TableState>, data: Container) => {
    const st = ref.current;
    if (!st) return;
    st.rows = []
    st.row_count = 0;

    st.headers.forEach(() => {
        st.rows.push([]);
    });

    RangePrimitiveValues(data, (cont) => {
        if (IsPrimitive(cont.value)) {
            const columnIndex = st.headers_ri[cont.path]
            if (columnIndex !== undefined) {
                st.rows[columnIndex].push(cont.value)
            }
        }
    })
    ref.current = st
}

export const GetRows = (ref: RefObject<TableState>): GridValidRowModel[] => {
    const st = ref.current;
    if (!st || !st.rows || st.rows.length === 0) return [];

    const idColumn = st.rows[0];
    const rowCount = idColumn.length;

    return Array.from({ length: rowCount }).map((_, rowIndex) => {
        const rowObj: Record<string, unknown> = {};

        st.headers.forEach((colDef, colIndex) => {
            const columnData = st.rows[colIndex];
            rowObj[colDef.field] = columnData ? columnData[rowIndex] : null;
        });

        const persistentId = rowObj["id"];
        rowObj.id = persistentId;

        return rowObj;
    });
}

export const GetHeaders = (ref: RefObject<TableState>) => {
    const st = ref.current
    return Object.keys(st.headers_ri).map(path => ({
        field: path,
        headerName: path.split('.').pop(),
        flex: 1
    }));
}

export const GetPaginationModel = (ref: RefObject<TableState>) => {
    return ref.current.paginationModel
}

export const SetPaginationModel = (ref: RefObject<TableState>) => {
    return (paginationModel: GridPaginationModel) => {
        const st = ref.current;
        if (!st) return;
        st.paginationModel = paginationModel;
        ref.current = st;
    }
}

export interface ApiResponse<T = unknown> {
    results: T[];
    pagination?: {
        count: number;
    };
}

export const DataSourceWrapper = (ref: RefObject<TableState>, handleToggle: () => void ) => {
    return {
        getRows: async (params: GridGetRowsParams) => {
            const st = ref.current;
            if (!st) return { rows: [], rowCount: 0 };

            const currentArgs = {
                ...st.args,
                page: (params.paginationModel?.page || 0) + 1,
                limit: params.paginationModel?.pageSize,
                sortModel: JSON.stringify(params.sortModel),
                filterModel: JSON.stringify(params.filterModel),
            }
            const result: ApiResponse = await st.api.at("", {
                fetchParams: { method: "GET" },
                args: currentArgs,
            })
            const resultContainer = BuildContainerTree(null, [], ".", result)
            SetHeadersFromJson(ref, resultContainer)
            SetRowsFromJson(ref, resultContainer)

            st.row_count = result.pagination?.count || 0;
            ref.current = st;
            handleToggle()
            return {
                rows: GetRows(ref),
                rowCount: ref.current.row_count,
            };
        }
    }
}

export const GetDatasource = (ref: RefObject<TableState>) => {
    return ref.current.datasource
}

export const Refresh = (ref: RefObject<TableState>) => {
    const st = ref.current;
    if (!st) return;
    st.refresh()
}

export const SetSelectedRows = (ref: RefObject<TableState>) => {
    return (model: GridRowSelectionModel) => {
        const st = ref.current;
        if (!st || st.rows.length === 0) return;

        const selectedIDs = model.ids;
        const rowCount = st.rows[0].length;

        const indices = Array.from({ length: rowCount }, (_, i) => i);
        const selectedIndices = indices.filter(rowIndex => {
            const rowId = st.rows[0][rowIndex] as string | number;
            return selectedIDs.has(rowId);
        });

        st.selected_data = st.rows.map(column =>
            selectedIndices.map(rowIndex => column[rowIndex])
        );
        st.selected_ids = model;
        ref.current = st;
    }
}

export const UITable: FC<Props> = ({ ref, api }) => {
    const localRef = useRef<TableState>(null);
    const internalRef = (ref || localRef) as RefObject<TableState>;
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

    if (!internalRef.current) {
        (internalRef as RefObject<TableState>).current = initialRef(ref, api, handleToggle)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                columns={GetHeaders(internalRef)}
                dataSource={GetDatasource(internalRef)}
                pageSizeOptions={[5, 10, 25]}
                paginationModel={GetPaginationModel(internalRef)}
                onPaginationModelChange={SetPaginationModel(internalRef)}
                paginationMode="server"
                sortingMode="server"
                getRowId={(row) => row.id}
                filterMode="server"
                checkboxSelection
                onRowSelectionModelChange={
                    (newModel) => SetSelectedRows(internalRef)(newModel)
                }
                onDataSourceError={(error) => {
                    console.error("DataGrid Error Type:", error.name);
                    console.error("DataGrid Error Message:", error.message);

                    if (error.cause) {
                        console.group("Original Error Cause");
                        console.error("Message:", error.cause.message);
                        console.error("Stack:", error.cause.stack);
                        console.groupEnd();
                    }

                    if (error instanceof GridGetRowsError) {
                        console.warn("Fetch failed. Check your API mock or network.");
                    } else {
                        console.warn("Row update failed.");
                    }
                }}
            />
        </div>
    );
};
