import type {FC, ReactElement, RefObject} from "react";
import {type TableState, UITable} from "../../components/grid/grid";
import type {ApiClient} from "../../utility/api";
import {Stack} from "@mui/material";
import {ApiButton} from "../../components/button/button";

export interface GridWithButtonsProps {
    api: ApiClient;
    ref: RefObject<TableState>;

    grid_endpoint: string;
    endpoints: string[];
    buttons: ReactElement[] | undefined;
}


export const GridWithButtons: FC<GridWithButtonsProps> = ({api, ref, grid_endpoint, endpoints, buttons}) => {
    return (
        <Stack direction={"column"} gap={3}>
            <Stack direction={"row"} gap={3}>
                {buttons?.map((button) => button)}
                {endpoints.map((endpoint) => <ApiButton api={api} endpoint={endpoint} />)}
            </Stack>
            <UITable ref={ref} api={api} endpoint={grid_endpoint} />
        </Stack>
    )
}