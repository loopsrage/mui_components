import {type FC, useEffect, useState} from "react";
import {
    GetRows,
    GetHeaders,
    Refresh,
    SetHeadersFromJson,
    SetRowsFromJson,
    type TableState,
    UITable
} from "@/components/grid/grid";
import {useRefIndex} from "@/context/context_index";
import {BuildContainerTree} from "@/utility/containers";
import {type KeyValueProps, DatagridSx} from "@/meta_components/field_value_grid/field_value_grid"

export const SubGrid: FC<KeyValueProps> = ({data, ...props}) => {
    const context = useRefIndex();
    const [gridData, setGridData] = useState<Record<string, object[]>>({ rows: [], columns: [] });

    useEffect(() => {
        const updateGrid = async () => {
            const gridState = context?.get("sub_grid") as TableState;
            if (!gridState) return;

            const ref = { current: { ...gridState } };

            const resultContainer = BuildContainerTree(null, [], ".", data)
            SetHeadersFromJson(ref, resultContainer);
            SetRowsFromJson(ref, resultContainer);

            setGridData({
                rows: [...GetRows(ref)],
                columns: [...GetHeaders(ref)]
            });

            if (gridState.gridRef.current) {
                gridState.gridRef.current.autosizeColumns();
            }
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
        }} refKey={"sub_grid"} />
    )
}