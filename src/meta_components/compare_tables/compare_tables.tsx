import {type FC, type RefObject, useRef} from "react";
import {Button, Stack} from "@mui/material";
import {type GridWithButtonsProps} from "@/meta_components/grid_with_buttons/grid_with_buttons";
import {type TableState, type UITable} from "@/components/grid/grid";
import {useRefIndex} from "@/context/context_index";
import type {GridRowSelectionModel} from "@mui/x-data-grid";
import {IsNullOrUndefined} from "@/utility/validation";

export interface TableGroup {
    table: typeof UITable
    props: GridWithButtonsProps
}

export interface CompareTablesProps {
    tables: TableGroup[];
    compare: (state: Record<string, string>) => void;
}

export interface CompareTablesRef {
    state: Record<string, string>;
}

export const SetTableState = (ref: RefObject<CompareTablesRef>, refKey: string, value: string) => {
    const st = ref.current
    if (!st) return

    st.state[refKey] = value
    ref.current = st
}

export const CompareTables: FC<CompareTablesProps> = ({tables, compare}) => {
    const context = useRefIndex()
    const localRef = useRef<CompareTablesRef>({state: {}})
    const handleRowSelect = (refKey: string) => {
        return (newModel: GridRowSelectionModel) =>{
            const ref: TableState | undefined | null = context?.get(refKey)
            const selectionArray = Array.from(newModel.ids);
            const gridApi = ref?.gridRef.current
            const rows = selectionArray.map(x => gridApi?.getRow(x))
            SetTableState(localRef, refKey, JSON.stringify(rows))
        }
    }

    const handleOnClick = () => {
        const st = localRef.current
        compare(st.state)
    }

    return (
        <Stack direction={"column"}>
            <Button key={0} onClick={handleOnClick}>Compare</Button>
            <Stack direction={"row"} gap={2} sx={{width: "100%"}}>
                <>
                    {
                        tables.map((value) => {
                            if (IsNullOrUndefined(value.props.grid_options)) {
                                value.props["grid_options"] = {
                                    onRowSelectionModelChange: handleRowSelect(value.props.refKey),
                                }
                            }
                            return <value.table {...value.props}  />
                        })
                    }
                </>
            </Stack>
        </Stack>
    )
}