import {type FC, useLayoutEffect} from "react";
import {
    GetRawHeaders,
    type Props,
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

    const getGridRef = () => {
        const gridState = context?.get("key_value_grid") as TableState
        return {current: gridState}
    }

    useLayoutEffect(() => {
        const ref = getGridRef()
        SetKeyValueHeaders(ref)
        SetKeyValueRows(ref, BuildContainerTree(null, [], ".", data))
    }, [data]);

    return (
        <UITable  {...props} grid_options={{
            columns: GetRawHeaders(getGridRef()),
            paginationMode: "client",
            sortingMode: "client",
            filterMode: "client",
            rowSelection: false,
            disableVirtualization: true,
            getRowId: (row: {key: string}) => row.key
        }} refKey={"key_value_grid"} />
    )
}