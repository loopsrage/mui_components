import {Box, Stack} from "@mui/material";
import type {FC, ReactElement} from "react";

export interface ICenteredContainer {
    children: ReactElement[] | ReactElement | null;
    sx: object | null | undefined;
}

export const CenteredContainer: FC<ICenteredContainer> = ({children, sx = {}}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                ...sx
            }}
        >
            <Stack direction={"column"}>
                {children}
            </Stack>
        </Box>
    )
}