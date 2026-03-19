import type {FC, ReactElement} from "react";
import { UITable} from "../../components/grid/grid";
import type {ApiClient} from "../../utility/api";
import {Stack, Typography} from "@mui/material";
import type {IBaseRefProps} from "../../ibase/ibase";

export interface GridWithButtonsProps extends IBaseRefProps {
    api: ApiClient;
    grid_endpoint: string;

    title: string;
    row_details: boolean;
    buttons: ReactElement[];
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({api, title, grid_endpoint, row_details, buttons, refKey}) => {
    return (
        <Stack direction={"column"} gap={3}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                direction={"row"} sx={{ px: 2, pt: 1 }} >
                <Typography variant="h6" component="h2"  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {title}
                </Typography>
                <Stack direction={"row"} gap={3}>
                    {buttons?.map((button) => button)}
                </Stack>
            </Stack>
            <UITable api={api} endpoint={grid_endpoint} row_details={row_details} refKey={refKey}/>
        </Stack>
    )
}