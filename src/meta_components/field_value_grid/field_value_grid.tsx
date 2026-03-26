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
import {BuildContainerTree} from "@/utility/containers";

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

            const ref = { current: gridState };

            SetKeyValueHeaders(ref);
            const newRowsRaw = BuildContainerTree(null, [], ".", data);
            SetKeyValueRows(ref, newRowsRaw);

            const mappedRows = GetKeyValueRows(ref);
            const headers = GetRawHeaders(ref);

            setGridData({
                rows: [...mappedRows],
                columns: [...headers]
            });

            await Refresh(ref);
        };

        updateGrid();
    }, [data, context]);// Reacts when data changes OR when context registry updates


    return (
        <UITable  {...props} grid_options={{
            columns: gridData.columns,
            rows: gridData.rows,
            paginationMode: "client",
            sortingMode: "client",
            filterMode: "client",
            datasource: undefined,
            rowSelection: false,
            disableVirtualization: true,
            sx: {
                height: 400,
                width: '100%',
                ...props.datagrid_sx
            },
            getRowId: (row: {key: string}) => row.key,
            rowCount: undefined,
        }} refKey={"key_value_grid"} />
    )
}