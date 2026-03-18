import type {FC, ReactElement, RefObject} from "react";
import {type TableState, UITable} from "../../components/grid/grid";
import type {ApiClient} from "../../utility/api";
import {Stack} from "@mui/material";

export interface GridWithButtonsProps {
    api: ApiClient;
    grid_ref: RefObject<TableState>;
    grid_endpoint: string;

    buttons: ReactElement[];
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({api, grid_ref, grid_endpoint, buttons}) => {
    return (
        <Stack direction={"column"} gap={3}>
            <Stack direction={"row"} gap={3}>
                {buttons?.map((button) => button)}
            </Stack>
            <UITable ref={grid_ref} api={api} endpoint={grid_endpoint} row_details={true}/>
        </Stack>
    )
}