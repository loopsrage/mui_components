import {type FC, useLayoutEffect, useState} from "react";
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

export const SubGrid: FC<KeyValueProps> = ({data, datagrid_sx, ...props}) => {
    const context = useRefIndex();
    const [gridData, setGridData] = useState<Record<string, object[]>>({ rows: [], columns: [] });

    useLayoutEffect(() => {
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

            await Refresh(ref);
        };

        updateGrid();
    }, [data, context]);
    const sx = datagrid_sx?  datagrid_sx() : DatagridSx()

    return (
        <UITable register_component={true} datagrid_sx={sx}  {...props} grid_options={{
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