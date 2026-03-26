import {type FC, useLayoutEffect, useState} from "react";
import {
    GetRawHeaders, GetRows,
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

    const getGridRef = () => {
        const gridState = context?.get("key_value_grid") as TableState;
        return { current: gridState };
    };

    useLayoutEffect(() => {
        const ref = getGridRef();

        SetKeyValueHeaders(ref);
        const newRows = BuildContainerTree(null, [], ".", data);
        SetKeyValueRows(ref, newRows);

        setGridData({
            rows: GetRows(ref),
            columns: GetRawHeaders(ref)
        });

        Refresh(ref);
    }, [data, context]);

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
            getRowId: (row: {key: string}) => row.key
        }} refKey={"key_value_grid"} />
    )
}