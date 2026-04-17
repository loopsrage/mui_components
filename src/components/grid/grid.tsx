import {type FC, type JSX, type RefObject, useLayoutEffect, useRef, useState} from "react";
import {
    DataGrid, type GridApi,
    type GridColDef, type GridColumnVisibilityModel,
    type GridDataSource, type GridFilterModel,
    GridGetRowsError,
    type GridGetRowsParams,
    type GridPaginationModel, type GridRenderCellParams, type GridRowSelectionModel, type GridSortModel,
    type GridValidRowModel, useGridApiRef
} from '@mui/x-data-grid';
import {BuildContainerTree, type Container, RangePrimitiveValues} from "@/utility/containers";
import {IsNullOrUndefined, IsPrimitive, TitleCase} from "@/utility/validation";
import type {ApiClient} from "@/utility/api";

import {EditCellRenderer} from "@/meta_components/crud_elements/crud_elements";
import type {IBaseRefProps} from "@/ibase/ibase";
import {useConditionalRef, useRefIndex} from "@/context/context_index";
import {Box, Button, IconButton, Stack} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import type {FormBuilderState} from "@/utility/form_builder";

export interface TableState extends IBaseRefProps {
    gridRef: RefObject<GridApi | null>;
    index: number
    headers: GridColDef[]
    headers_ri: Record<string, number>
    rows: unknown[][]
    row_count?: number | undefined
    row_details?: boolean | null
    cellRenderer?: (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null
    datasource?: GridDataSource | undefined
    paginationModel: GridPaginationModel | undefined

    refresh: () => void
    selected_ids: GridRowSelectionModel | null
    filter_model:  GridFilterModel | null
    selected_data: unknown[]
    api?: ApiClient | null
    endpoint?: string | undefined;
    args: Record<string, string | number | boolean | undefined | null | number[] | string[] >
    fetch_params: Record<string, string | number | boolean | undefined | null> | null
    modal_title: string | undefined | null
    modal_header_sx: object | undefined | null;
    modal_header_rows?: (undefined | JSX.Element | null)[] | null | undefined;
    context?: Record<string, unknown> | null | undefined;
}

export interface Props extends IBaseRefProps {
    api?: ApiClient | null | undefined;

    endpoint?: string | undefined;
    row_details?: boolean | null
    checkbox_select?: boolean | undefined
    toolbar?: boolean | undefined
    cellRenderer?:  (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null
    datagrid_sx?: object | undefined;

    grid_options?: object | undefined;
    context?: Record<string, unknown> | null | undefined;
}

export const SetEndpoint = (ref: RefObject<TableState>, endpoint: string) => {
    const st = ref.current;
    if (!st) return;

    st.endpoint = endpoint;
}

export const GetEndpoint = (ref: RefObject<TableState>) => {
    return ref.current.endpoint
}

export const GetApi = (ref: RefObject<TableState>) => {
    return ref.current.api
}

export const SetApi = (ref: RefObject<TableState>, api: ApiClient) => {
    const st = ref.current;
    if (!st) return;

    ref.current.api = api
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

export const SetKeyValueHeaders = (ref: RefObject<TableState>) => {
    const st = ref.current;
    if (!st) return;

    st.index = 0;
    st.headers = [];
    st.rows = [];
    st.headers_ri = {};

    ["Field", "Value"].forEach((i) => {
        const path = i;
        st.headers[st.index] = {
            field: path,
            sortable: true,
            filterable: true,
            flex: 1,
            width: 500,
            minWidth: 250,
            type: 'string',
            headerName: i
        };
        st.rows[st.index] = [];
        st.headers_ri[path] = st.index;
        st.index++;
    });
    ref.current = st
}

export const SetKeyValueRows = (ref: RefObject<TableState>, data: object) => {
    const st = ref.current;
    if (!st) return;

    st.rows = [[], []];
    st.row_count = 0;

    const fieldIndex = st.headers_ri["Field"];
    const valueIndex = st.headers_ri["Value"];

    Object.entries(data).forEach(([key, value]) => {
        if (fieldIndex !== undefined) {
            st.rows[fieldIndex].push(TitleCase(key, "_"));
        }

        if (valueIndex !== undefined) {
            const finalValue = Array.isArray(value) ? value.join(", ") : value;
            st.rows[valueIndex].push(finalValue);
        }
        st.row_count!++;
    });

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

export const GetKeyValueRows = (ref: RefObject<TableState>): GridValidRowModel[] => {
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

        const persistentId = rowObj["Field"];
        rowObj.Field = persistentId;

        return rowObj;
    });
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
        rowObj.id = rowObj.id = rowObj["id"] ?? rowIndex;
        return rowObj;
    });
}

export const GetRawHeaders =  (ref: RefObject<TableState>) => {
    const st = ref.current;
    if (!st || !st.headers) {
        return [];
    }
    return st.headers;
}

export const GetHeaders = (ref: RefObject<TableState>) => {
    const st = ref.current
    const headers = Object.keys(st.headers_ri).map(path => ({
        field: path,
        sortable: true,
        filterable: true,
        headerName: TitleCase(path.split('.').pop(), "_"),
        flex: 2,
        type: 'string',
        hideable: true
    } as GridColDef));

    if (st.row_details) {
        const editColumn: GridColDef = {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            filterable: false,
            flex: 1,
            type: 'actions',
            renderCell: GetCellRenderer(ref),
        };

        const insertPosition = Math.max(0, headers.length - 1);
        headers.splice(insertPosition, 0, editColumn);
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
    st.refresh();
}

export const SetOrAddArgs = (ref: RefObject<TableState>, args: object) => {
    const st = ref.current;
    if (!st) return;

    st.args = {...st.args, ...args};
    ref.current = st;
    st.refresh();
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
            const { page, pageSize } = params.paginationModel ?? { page: 0, pageSize: 10 };
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
            const result = await st.api?.at("/" + st.endpoint, {
                fetchParams: {
                    method: "GET",
                    ...GetFetchParams(ref),
                },
                args: finalArgs,
            }) as ApiResponse;
            console.log(st, finalArgs, result)

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
    return ref.current?.datasource
}

export const Refresh = async (ref: RefObject<TableState>) => {
    const st = ref.current;
    if (!st) return;
    const api = st.gridRef.current as GridApi;

    api.dataSource.cache.clear();
    await api.dataSource.fetchRows();
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

export const SetCellRenderer = (ref: RefObject<TableState>, cellRenderer:  (ref: RefObject<TableState>) => (params: GridRenderCellParams) => (undefined | JSX.Element) | null) => {
    const st = ref.current;
    if (!st) return;

    st.cellRenderer = cellRenderer

    ref.current = st;
}

export const GetCellRenderer = (ref: RefObject<TableState>) => {
    const st = ref.current;
    if (!st) return;
    return st.cellRenderer
        ? st.cellRenderer(ref)
        : ModalCellRendererWrapper(ref)
}

export const ModalCellRendererWrapper = (ref: RefObject<TableState>) => {
    const context = useRefIndex();
    return (params: GridRenderCellParams) => {
        const st = ref.current;
        if (!st) return;

        const handleShow = (show: boolean = false) => {
            const update: FormBuilderState | null | undefined = context?.get("update_modal")

            const up = update?.context
            if (!up) return;

            const ss = up.setShow as (show: boolean) => void;
            ss(show)
        }

        const title = (
            <Stack direction="column" justifyContent="space-between" spacing={2} sx={{ width: '100%' }}>
                <Stack gap={3} direction="row">
                    <Box sx={{...st.modal_header_sx}}>
                        {"Update"}
                    </Box>
                    <Box key="spacer" sx={{ flexGrow: 1 }} />
                    <IconButton onClick={() => handleShow(false)} sx={{backgroundColor: "black", color: "white"}}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <Stack gap={3} direction="row">
                    {Object.entries(st.modal_header_rows || []).map(k => k)}
                </Stack>
            </Stack>
        )

        const input_params =  {footerButtons: [
            <Button onClick={() => handleShow(false)}>{"Close"}</Button>,
            <Box key="spacer" sx={{ flexGrow: 1 }} />,
            <Button sx={{backgroundColor: "red"}}>{"Update"}</Button>],
            title: title, ...params.row}
        return <EditCellRenderer  params={input_params} handleRefreshGrid={async () =>await  Refresh(ref)} api={st.api} id={params.id} />
    }
}

export const UITable: FC<Props> = ({ api, endpoint, row_details, refKey, cellRenderer, register_component=false, toolbar=false, checkbox_select=false, datagrid_sx=undefined, grid_options=undefined, context=undefined}) => {
    const setRegistryRef = useConditionalRef(refKey, register_component)
    const localRef = useRef<TableState>(null as unknown as TableState);
    const [, setToggle] = useState(false);
    const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 25 });
    const [rowCount, setRowCount] = useState(0);
    const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
        'id': false,
    });
    const apiRef = useGridApiRef();

    const handleToggle = () => {
        if (localRef.current) {
            setRowCount(localRef.current?.row_count ?? 0);
        }
        setToggle(prev => !prev);
    };

    const initialRef = () => {
        return {
            context: context,
            gridRef: apiRef,
            index: 0,
            headers: [],
            headers_ri: {},
            rows: [],
            row_count: endpoint ? 0 : undefined,
            datasource: endpoint ? DataSourceWrapper(localRef, handleToggle) : undefined,
            paginationModel: { page: 0, pageSize: 5 },
            args: {},
            selected_data: [],
            selected_ids: null,
            refresh: handleToggle,
            cellRenderer: cellRenderer,
            filter_model: null,
            api: api,
            row_details: row_details,
            fetch_params: null,
            endpoint: endpoint,
            register_component: register_component,
            refKey: refKey,
            modal_title: null,
            modal_header_rows: null,
            modal_header_sx: null,
            modal_header_row: null,
            ...grid_options
        }
    }

    if (!localRef.current) {
        (localRef as RefObject<TableState>).current = initialRef()
    }

    useLayoutEffect(() => {
        setRegistryRef(localRef.current);
        return () => setRegistryRef(null);
    }, [setRegistryRef]);

    return (
        <DataGrid
            apiRef={apiRef}
            disableVirtualization
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            rowCount={rowCount}
            sx={{
                width: "100%",
                ...datagrid_sx
            }}
            columns={GetHeaders(localRef)}
            dataSource={GetDatasource(localRef)}
            pageSizeOptions={[25, 50, 100]}
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
            {...grid_options}
        />
    );
};
