import {type FC} from "react";
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
}

export const CompareTables: FC<CompareTablesProps> = ({tables}) => {
    const context = useRefIndex()
    const handleRowSelect = (refKey: string) => {
        return (newModel: GridRowSelectionModel) =>{
            const ref: TableState | undefined | null = context?.get(refKey)
            const selectionArray = Array.from(newModel.ids);
            const gridApi = ref?.gridRef.current
            const rows = selectionArray.map(x => gridApi?.getRow(x))
            console.log(rows)
        }
    }

    return (
        <Stack direction={"column"}>
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
            <Button key={0}>Compare</Button>
        </Stack>
    )
}