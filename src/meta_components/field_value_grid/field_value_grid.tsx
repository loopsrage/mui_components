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
        const gridState = context?.get("key_value_grid") as TableState;
        const ref = { current: gridState };

        if (!ref.current) return;

        SetKeyValueHeaders(ref);
        const newRows = BuildContainerTree(null, [], ".", data);
        SetKeyValueRows(ref, newRows);
        setGridData({
            rows: [...GetKeyValueRows(ref)],
            columns: [...GetRawHeaders(ref)]
        });

        Refresh(ref);
    }, [data, context])

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