import {type FC, type RefObject, useRef, useState} from "react";
import {
    DataGrid,
    type GridColDef,
    type GridDataSource, type GridFilterModel,
    GridGetRowsError,
    type GridGetRowsParams,
    type GridPaginationModel, type GridRowSelectionModel, type GridSortModel,
    type GridValidRowModel
} from '@mui/x-data-grid';
import {BuildContainerTree, type Container, RangePrimitiveValues} from "../../utility/containers";
import {IsNullOrUndefined, IsPrimitive} from "../../utility/validation";
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
    endpoint: string;
    args: Record<string, string | number | boolean | undefined | null>
    fetch_params: Record<string, string | number | boolean | undefined | null> | null
}

export interface Props {
    ref: RefObject<TableState>
    api: ApiClient

    endpoint: string;
}

export const SetEndpoint = (ref: RefObject<TableState>, endpoint: string) => {
    const st = ref.current;
    if (!st) return;

    st.endpoint = endpoint;
}

export const GetEndpoint = (ref: RefObject<TableState>) => {
    return ref.current.endpoint
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

export const SetArgs = (ref: RefObject<TableState>, args: Record<string, string | number | boolean | undefined | null>) => {
    const st = ref.current;
    if (!st) return;
    st.args = args
    ref.current = st
}

export const SetOrAddArgs = (ref: RefObject<TableState>, args: Record<string, string | number | boolean | undefined | null>) => {
    const st = ref.current;
    if (!st) return;

    st.args = {...st.args, ...args};
    ref.current = st;
}

export const SetSortModel = (ref: RefObject<TableState>, sortModel: GridSortModel) => {
    const st = ref.current;
    if (!st) return;

    st.args["sortModel"] = JSON.stringify(sortModel)
    ref.current = st
}

export const SetFilterModel = (ref: RefObject<TableState>, filterModel: GridFilterModel) => {
    const st = ref.current;
    if (!st) return;

    st.args["sortModel"] = JSON.stringify(filterModel)
    ref.current = st
}

export const SetPaginationModel = (ref: RefObject<TableState>, paginationModel: GridPaginationModel | undefined) => {
    return () => {
        const st = ref.current;
        if (!st) return;

        st.args["paginationModel"] = JSON.stringify(paginationModel);
        ref.current = st
    }
}

export const SetFetchParams = (ref: RefObject<TableState>, fetchParams: Record<string, string | number | boolean | undefined | null>)=> {
    const st = ref.current;
    if (!st) return;

    st.fetch_params = fetchParams
    ref.current = st
}

export const GetFetchParams = (ref: RefObject<TableState>) => {
    return ref.current.fetch_params
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

            SetFilterModel(ref, params.filterModel)
            SetSortModel(ref, params.sortModel)

            const currentArgs: Record<string, unknown> = {
                ...st.args,
                page: (params.paginationModel?.page || 0) + 1,
                limit: params.paginationModel?.pageSize,
            }

            const finalArgs: Record<string, unknown> = {}
            Object.keys(currentArgs).forEach((key) => {
                const val = currentArgs[key]
                if (Array.isArray(val) && val.length === 0) return;
                if (IsNullOrUndefined(val)) return;
                finalArgs[key] = val
            })

            if (!IsNullOrUndefined(params.sortModel)) {
                if (Array.isArray(params.sortModel) && params.sortModel.length === 0) {
                    delete finalArgs["sortModel"];
                }
            }

            if (!IsNullOrUndefined(params.filterModel)) {
                if (Array.isArray(params.filterModel["items"]) && params.filterModel["items"].length === 0) {
                    delete finalArgs["filterModel"];
                }
            }

            const result = await st.api.at("/" + st.endpoint, {
                fetchParams: {
                    method: "GET",
                    ...GetFetchParams(ref),
                },
                args: finalArgs,
            }) as ApiResponse;

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

export const SetSearch = (ref: RefObject<TableState>, value: string) => {
    const st = ref.current;
    if (!st) return;
    st.args["search"] = value;
    ref.current = st;
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

export const UITable: FC<Props> = ({ ref, api, endpoint}) => {
    const localRef = useRef<TableState>(null);
    const internalRef = (ref || localRef) as RefObject<TableState>;
    const [toggle, setToggle] = useState(false);

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
            selected_data: [],
            selected_ids: null,
            refresh: handleToggle,
            filter_model: null,
            api: api,
            fetch_params: null,
            endpoint: endpoint
        }
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    if (!internalRef.current) {
        (internalRef as RefObject<TableState>).current = initialRef()
    }

    return (
        <DataGrid
            style={{height: "80vh"}}
            columns={GetHeaders(internalRef)}
            dataSource={GetDatasource(internalRef)}
            pageSizeOptions={[5, 10, 25]}
            paginationModel={GetPaginationModel(internalRef)}
            onPaginationModelChange={SetPaginationModel(internalRef, GetPaginationModel(internalRef))}
            onRowSelectionModelChange={(newModel) => SetSelectedRows(internalRef)(newModel)}
            paginationMode="server"
            sortingMode="server"
            filterMode="server"
            checkboxSelection

            getRowId={(row) => row.id}
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
    );
};
