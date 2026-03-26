import {type FC, type ReactElement} from "react";
import {type Props, UITable} from "@/components/grid/grid";
import { Stack, Typography} from "@mui/material";

export interface GridWithButtonsProps extends Props {
    title: string;
    buttons?: ReactElement[] | null;
    title_topology_params?: object | null;
    button_stack_params?: object | null;
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({buttons, endpoint, title, title_topology_params, button_stack_params, ...props}) => {
    const headerButtons = buttons?.map((button) => button)
    return (
        <Stack direction={"column"} gap={2} sx={{width: "100%"}}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                direction={"row"} >
                <Typography variant={"h6"} sx={{m:2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}} {...title_topology_params}>
                    {title}
                </Typography>
                <Stack direction={"row"} gap={2} sx={{pr: 16, pl: 16, justifyContent: 'flex-end', width: '20%'}} {...button_stack_params}>
                    {headerButtons}
                </Stack>
            </Stack>
            <UITable {...props} endpoint={endpoint}/>
        </Stack>
    )
}