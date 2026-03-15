import {type RefObject, type FC, useRef, useState} from "react";
import {
    DataGrid, type GridColDef,
    type GridDataSource, GridGetRowsError, type GridGetRowsParams,
    type GridPaginationModel,
    type GridValidRowModel
} from '@mui/x-data-grid';
import {type Container, BuildContainerTree, RangePrimitiveValues} from "../../utility/containers";
import {IsPrimitive} from "../../utility/validation";
import type {ApiWrapper} from "../../utility/fetchapi";

export interface TableState {
    index: number
    headers: GridColDef[]
    headers_ri: Record<string, number>
    rows: unknown[][]
    row_count: number
    datasource: GridDataSource
    paginationModel: GridPaginationModel

    api: ApiWrapper
    args: Record<string, string | number | boolean | undefined | null>
}

export interface Props {
    ref: RefObject<TableState>
    api: ApiWrapper
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

    RangePrimitiveValues(data, (cont) => {
        console.log(cont.path, cont.value)
        if (IsPrimitive(cont.value)) {
            const columnIndex = st.headers_ri[cont.path]
            if (columnIndex !== undefined) {
                st.rows[columnIndex].push(cont.value)
            }
        }
    })
}

export const GetRows = (ref: RefObject<TableState>): GridValidRowModel[] => {
    const st = ref.current;
    if (!st || st.headers.length === 0 || !st.rows[0]) return [];

    const rowCount = st.rows[0].length;

    return Array.from({ length: rowCount }).map((_, rowIndex) => {
        const rowObj: Record<string, unknown> = { id: rowIndex };
        st.headers.forEach((colDef, colIndex) => {
            const columnData = st.rows[colIndex];
            rowObj[colDef.field] = columnData ? columnData[rowIndex] : null;
        });
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

export interface ApiResponse<T = never> {
    results: T[];
    pagination?: {
        count: number;
        // add other fields like page, limit if needed
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

export const UITable: FC<Props> = ({ ref, api }) => {
    const localRef = useRef<TableState>(null);
    const internalRef = (ref || localRef) as RefObject<TableState>;
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const initialRef = () => {
        return {
            index: 0,
            headers: [],
            headers_ri: {},
            rows: [],
            row_count: 0,
            datasource: DataSourceWrapper(internalRef, handleToggle),
            paginationModel: { page: 0, pageSize: 5 },
            args: {},
            api: api,
        }
    }

    if (!internalRef.current) {
        (internalRef as RefObject<TableState>).current = initialRef()
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={GetRows(internalRef)}
                columns={GetHeaders(internalRef)}
                dataSource={GetDatasource(internalRef)}
                rowCount={internalRef.current.row_count}
                pageSizeOptions={[5, 10, 25]}
                paginationModel={GetPaginationModel(internalRef)}
                onPaginationModelChange={SetPaginationModel(internalRef)}
                paginationMode="server"
                sortingMode="server"
                filterMode="server"
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
