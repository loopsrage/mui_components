import {type FC, type ReactElement} from "react";
import {type Props, UITable} from "@/components/grid/grid";
import { Stack, Typography} from "@mui/material";

export interface GridWithButtonsProps extends Props {
    title: string;
    buttons?: ReactElement[] | null;
}

export const GridWithButtons: FC<GridWithButtonsProps> = ({buttons, endpoint, title, ...props}) => {
    const headerButtons = buttons?.map((button) => button)
    return (
        <Stack direction={"column"} gap={2} sx={{width: "100%"}}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                direction={"row"} >
                <Typography sx={{
                    m:2,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    {title}
                </Typography>
                <Stack direction={"row"} gap={1}   sx={{
                    justifyContent: 'flex-end',
                    width: '20%'
                }}>
                    {headerButtons}
                </Stack>
            </Stack>
            <UITable {...props} endpoint={endpoint}/>
        </Stack>
    )
}