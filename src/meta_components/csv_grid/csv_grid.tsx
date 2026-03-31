import {type FC, useEffect, useState} from "react";
import {
    GetHeaders, GetRows,
    type Props, Refresh, SetHeadersFromJson, SetRowsFromJson,
    type TableState,
    UITable
} from "@/components/grid/grid";
import {useRefIndex} from "@/context/context_index";
import {BuildContainerTree} from "@/utility/containers";

export interface CsvGridProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}

export const CsvDatagridSx = () => {
    const stickyCommon = {
        position: 'sticky',
        zIndex: 2, // Cells sit above normal content
        backgroundColor: 'white', // Crucial to hide content scrolling behind
    };

    const stickyHeaderCommon = {
        position: 'sticky',
        zIndex: 3, // Headers sit above sticky cells
        backgroundColor: '#191E23 !important', // Match your header color
    };
    return {
        '& .MuiDataGrid-columnHeader[data-field="Field"]': {
            ...stickyHeaderCommon,
            left: 0,
        },
        '& .MuiDataGrid-cell[data-field="Field"]': {
            ...stickyCommon,
            left: 0,
            borderRight: '1px solid #e0e0e0', // Optional: visual separator
        },

        // --- 2. Pin "Value" to the RIGHT ---
        '& .MuiDataGrid-columnHeader[data-field="Value"]': {
            ...stickyHeaderCommon,
            right: 0,
        },
        '& .MuiDataGrid-cell[data-field="Value"]': {
            ...stickyCommon,
            right: 0,
            borderLeft: '1px solid #e0e0e0', // Optional: visual separator
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
        '& .MuiDataGrid-main': {
            overflow: 'auto',
            minWidth: '100%', // Add this to force container expansion
        },
        // Ensure the root container takes full width
        '&': {
            width: '100%',
        }
    }
}

export const CsvGrid: FC<CsvGridProps> = ({data, ...props}) => {
    const context = useRefIndex();
    const [gridData, setGridData] = useState<Record<string, object[]>>({ rows: [], columns: [] });

    useEffect(() => {
        const updateGrid = async () => {
            const gridState = context?.get("csv_grid") as TableState;
            if (!gridState) return;

            const ref = { current: { ...gridState } };

            const cont = BuildContainerTree(null, [], ".", data)
            SetHeadersFromJson(ref, cont);
            SetRowsFromJson(ref, cont);

            setGridData({
                rows: [...GetRows(ref)],
                columns: [...GetHeaders(ref)]
            });

            await Refresh(ref);
        };

        updateGrid();
    }, [data, context]);

    return (
        <UITable register_component={true} datagrid_sx={CsvDatagridSx()}  {...props} grid_options={{
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
        }} refKey={"csv_grid"} />
    )
}