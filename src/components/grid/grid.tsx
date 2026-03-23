import {type FC, type RefObject, useLayoutEffect, useRef, useState} from "react";
import {
    DataGrid, type GridApi,
    type GridColDef,
    type GridDataSource, type GridFilterModel,
    GridGetRowsError,
    type GridGetRowsParams,
    type GridPaginationModel, type GridRenderCellParams, type GridRowSelectionModel, type GridSortModel,
    type GridValidRowModel, useGridApiRef
} from '@mui/x-data-grid';
import {BuildContainerTree, type Container, RangePrimitiveValues} from "../../utility/containers";
import {IsNullOrUndefined, IsPrimitive} from "../../utility/validation";
import type {ApiClient} from "../../utility/api";

import {EditCellRenderer} from "../../meta_components/crud_elements/crud_elements";
import type {IBaseRefProps} from "../../ibase/ibase";
import {useConditionalRef} from "../../context/context_index";
import {Box, Stack} from "@mui/material";

export interface TableState {
    gridRef: RefObject<GridApi | null>;
    index: number
    headers: GridColDef[]
    headers_ri: Record<string, number>
    rows: unknown[][]
    row_count: number
    row_details?: boolean | null
    datasource: GridDataSource
    paginationModel: GridPaginationModel | undefined

    refresh: () => void
    selected_ids: GridRowSelectionModel | null
    filter_model:  GridFilterModel | null
    selected_data: unknown[]
    api: ApiClient
    endpoint: string;
    args: Record<string, string | number | boolean | undefined | null>
    fetch_params: Record<string, string | number | boolean | undefined | null> | null
    modal_title: string | undefined | null
}

export interface Props extends IBaseRefProps {
    api: ApiClient

    endpoint: string;
    row_details?: boolean | null
    checkbox_select?: boolean | undefined
    toolbar?: boolean | undefined
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
    const headers = Object.keys(st.headers_ri).map(path => ({
        field: path,
        sortable: true,
        filterable: true,
        headerName: path.split('.').pop(),
        flex: 2,
        type: 'string',
    } as GridColDef));

    if (st.row_details) {
        headers.push({
            sortable: false,
            filterable: false,
            width: 100,
            field: "edit",
            headerName: "Edit",
            pinnable: true,
            flex: 1,
            type: 'actions',
            renderCell: ModalCellRendererWrapper(ref),
        } as GridColDef)
    }
    return headers;
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

    st.args["filterModel"] = JSON.stringify(filterModel)
    ref.current = st
}

export const SetPaginationModel = (ref: RefObject<TableState>, paginationModel: GridPaginationModel | undefined) => {
    return () => {
        const st = ref.current;
        if (!st) return;
        st.paginationModel = paginationModel
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
        total: number;
    };
}

export const DataSourceWrapper = (ref: RefObject<TableState>, handleToggle: () => void ) => {
    return {
        getRows: async (params: GridGetRowsParams) => {
            const st = ref.current;
            if (!st) return { rows: [], rowCount: 0 };

            SetFilterModel(ref, params.filterModel)
            SetSortModel(ref, params.sortModel)
            const { page, pageSize } = params.paginationModel;
            const  currentArgs: Record<string, unknown> = {
                ...st.args,
                offset: page * pageSize,
                limit: pageSize,
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

            const resultContainer = BuildContainerTree(null, [], ".", result.results)
            SetHeadersFromJson(ref, resultContainer)
            SetRowsFromJson(ref, resultContainer)
            st.row_count = result.pagination?.total || 0;
            ref.current = st;
            handleToggle()
            return {
                rows: GetRows(ref),
                rowCount: result.pagination?.total || 0,
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

export const ModalCellRendererWrapper = (ref: RefObject<TableState>) => {
    return (params: GridRenderCellParams) => {
        const st = ref.current;
        if (!st) return;

        let bgc = "white"
        if (params.row["stage"] === "rejected") {
            bgc = "red"
        }

        if (params.row["stage"] === "approved") {
            bgc = "green"
        }

        const title = (
            <Stack direction="column" spacing={2}>
                <Stack gap={3} direction="row">
                    {params.row["item_id"]}
                    <Box sx={{
                        backgroundColor: bgc,
                        color: "black",
                        borderRadius: 2,
                        px: 1.5,
                    }}>
                        {params.row["stage"]}
                    </Box>
                </Stack>
                <Stack gap={3} direction="row">
                    {params.row["truth"]}
                </Stack>
            </Stack>
        )
        const input_params =  {title: title, ...params.row};
        return <EditCellRenderer params={input_params} handleRefreshGrid={() => Refresh(ref)} api={st.api} id={params.id} />
    }
}

export const UITable: FC<Props> = ({ api, endpoint, row_details, refKey, register_component=false, toolbar=false, checkbox_select=false}) => {
    const setRegistryRef = useConditionalRef(refKey, register_component)
    const localRef = useRef<TableState>(null as unknown as TableState);
    const [, setToggle] = useState(false);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 });
    const [rowCount, setRowCount] = useState(0);

    const apiRef = useGridApiRef();
    const initialRef = () => {
        return {
            gridRef: apiRef,
            index: 0,
            headers: [],
            headers_ri: {},
            rows: [],
            row_count: 0,
            datasource: DataSourceWrapper(localRef, handleToggle),
            paginationModel: { page: 0, pageSize: 5 },
            args: {},
            selected_data: [],
            selected_ids: null,
            refresh: handleToggle,
            filter_model: null,
            api: api,
            row_details: row_details,
            fetch_params: null,
            endpoint: endpoint,
            modal_title: null
        }
    }

    const handleToggle = () => {
        if (localRef.current) {
            setRowCount(localRef.current.row_count);
        }
        setToggle(prev => !prev);
    };

    if (!localRef.current) {
        (localRef as RefObject<TableState>).current = initialRef()
    }

    useLayoutEffect(() => {
        setRegistryRef(localRef.current);
        return () => setRegistryRef(null);
    }, [setRegistryRef]);

    return (
        <Box sx={{height: "45vh", width: "100%"}}>
            <DataGrid
                disableVirtualization
                rowCount={rowCount}
                sx={{
                    // Sticky Header
                    '& .MuiDataGrid-columnHeader[data-field="edit"]': {
                        position: 'sticky',
                        right: 0,
                        backgroundColor: 'black !important',
                        color: 'white',
                        zIndex: 3,
                    },
                    // Sticky Cells
                    '& .MuiDataGrid-cell[data-field="edit"]': {
                        position: 'sticky',
                        right: 0,
                        backgroundColor: 'white',
                        zIndex: 2,
                        boxShadow: '-4px 0px 4px -2px rgba(0,0,0,0.1)', // Subtle shadow "floats" it
                    },
                    // Ensure the container doesn't clip the sticky effect
                    '& .MuiDataGrid-main': {
                        overflow: 'auto',
                    },
                    '& .MuiDataGrid-cell--pinnedRight': {
                        boxShadow: '-2px 0px 4px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                    },
                    '& .MuiDataGrid-columnHeader--pinnedRight': {
                        backgroundColor: 'black', // Matches your header theme
                        color: 'white'
                    },
                    // 1. Target the actual row container inside the headers
                    '& .MuiDataGrid-columnHeaders div[role="row"]': {
                        backgroundColor: 'black !important',
                        color: 'white',
                    },
                    // 2. Ensure individual header cells also inherit the color
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: 'black !important',
                        color: 'white',
                    },
                    // 3. Style the "filler" space (empty space after the last column)
                    '& .MuiDataGrid-filler': {
                        backgroundColor: 'black !important',
                    },
                    // 4. Make sort icons and menu dots white
                    '& .MuiDataGrid-iconButtonContainer': {
                        color: 'white',
                    },
                    '& .MuiDataGrid-menuIcon': {
                        color: 'white',
                    },
                    // 5. Change the column separator color so it's visible on black
                    '& .MuiDataGrid-columnSeparator': {
                        color: '#333',
                    },
                }}
                columns={GetHeaders(localRef)}
                dataSource={GetDatasource(localRef)}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                paginationModel={paginationModel}
                onPaginationModelChange={(model) => {
                    setPaginationModel(model);
                }}
                onRowSelectionModelChange={(newModel) => SetSelectedRows(localRef)(newModel)}
                paginationMode="server"
                sortingMode="server"
                filterMode="server"
                autosizeOnMount
                autosizeOptions={{
                    includeOutliers: true,
                    includeHeaders: true,
                }}
                checkboxSelection={checkbox_select}
                showToolbar={toolbar}

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
        </Box>
    );
};
