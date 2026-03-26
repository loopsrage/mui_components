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
        <UITable register_component={true} datagrid_sx={props.datagrid_sx}  {...props} grid_options={{
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