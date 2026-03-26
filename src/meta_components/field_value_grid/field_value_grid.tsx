import {type FC, useEffect, useState} from "react";
import {
    GetKeyValueRows,
    GetRawHeaders,
    type Props, Refresh,
    SetKeyValueHeaders,
    SetKeyValueRows,
    type TableState,
    UITable
} from "@/components/grid/grid";
import {useRefIndex} from "@/context/context_index";

export interface KeyValueProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}

export const DatagridSx = () => {
    return {
        // // Sticky Header
        // '& .MuiDataGrid-columnHeader[data-field="edit"]': {
        //     position: 'sticky',
        //     right: 0,
        //     backgroundColor: 'black !important',
        //     color: 'white',
        //     zIndex: 3,
        // },
        // Sticky Cells
        '& .MuiDataGrid-cell[data-field="edit"]': {
            position: 'sticky',
            right: 0,
            width: 'auto',
            backgroundColor: 'white',
            zIndex: 2,
        },
        // Ensure the container doesn't clip the sticky effect
        '& .MuiDataGrid-main': {
            overflow: 'auto',
        },
        "& .MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon": {
            color: '#fff',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        '& .MuiDataGrid-columnHeaders div[role="row"]': {
            backgroundColor: '#191E23 !important',
            color: 'white',
        },
        '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#191E23 !important',
            color: 'white',
        },
        '& .MuiDataGrid-filler': {
            backgroundColor: 'black !important',
        },
        '& .MuiDataGrid-menuIcon': {
            color: 'white',
        },
        '& .MuiDataGrid-columnSeparator': {
            color: '#333',
        },
    }
}

export const FieldValueGrid: FC<KeyValueProps> = ({data, ...props}) => {
    const context = useRefIndex();
    const [gridData, setGridData] = useState<Record<string, object[]>>({ rows: [], columns: [] });

    useEffect(() => {
        const updateGrid = async () => {
            const gridState = context?.get("key_value_grid") as TableState;
            if (!gridState) return;

            const ref = { current: { ...gridState } };

            SetKeyValueHeaders(ref);
            SetKeyValueRows(ref, data);

            setGridData({
                rows: [...GetKeyValueRows(ref)],
                columns: [...GetRawHeaders(ref)]
            });

            await Refresh(ref);
        };

        updateGrid();
    }, [data, context]);

    return (
        <UITable register_component={true} datagrid_sx={DatagridSx()}  {...props} grid_options={{
            columns: gridData.columns,
            rows: gridData.rows,
            paginationMode: "client",
            sortingMode: "client",
            filterMode: "client",
            dataSource: undefined,
            rowSelection: false,
            disableVirtualization: true,
            getRowId: (row: any) => {
                return row.id || row.Field
            },
            rowCount: undefined,
        }} refKey={"key_value_grid"} />
    )
}