import {type FC, type ReactElement} from "react";
import { UITable} from "@/components/grid/grid";
import type {ApiClient} from "@/utility/api";
import { Stack, Typography} from "@mui/material";
import type {IBaseRefProps} from "@/ibase/ibase";

export interface GridWithButtonsProps extends IBaseRefProps {
    api: ApiClient;
    grid_endpoint: string;

    title: string;
    row_details: boolean;
    buttons?: ReactElement[] | null;
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({api, title, grid_endpoint, row_details, buttons, refKey, register_component}) => {
    const headerButtons = buttons?.map((button) => button)
    return (
        <Stack direction={"column"} gap={2}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                direction={"row"} >
                <Typography sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {title}
                </Typography>
                <Stack direction={"row"} gap={1}   sx={{
                    justifyContent: 'flex-end',
                    width: '50%'
                }}>
                    {headerButtons}
                </Stack>
            </Stack>
            <UITable api={api} endpoint={grid_endpoint} row_details={row_details} refKey={refKey} register_component={register_component}/>
        </Stack>
    )
}