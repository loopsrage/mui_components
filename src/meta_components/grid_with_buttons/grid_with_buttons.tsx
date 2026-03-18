import type {FC, ReactElement} from "react";
import { UITable} from "../../components/grid/grid";
import type {ApiClient} from "../../utility/api";
import {Stack, Typography} from "@mui/material";

export interface GridWithButtonsProps {
    api: ApiClient;
    grid_endpoint: string;

    title: string;
    ref_key: string;
    row_details: boolean;
    buttons: ReactElement[];
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({api, title, grid_endpoint, row_details, buttons, ref_key}) => {
    return (
        <Stack direction={"column"} gap={3}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                direction={"row"} >
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Stack direction={"row"} gap={3}>
                    {buttons?.map((button) => button)}
                </Stack>
            </Stack>
            <UITable api={api} endpoint={grid_endpoint} row_details={row_details} refKey={ref_key}/>
        </Stack>
    )
}