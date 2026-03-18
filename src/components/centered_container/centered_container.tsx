import {Box, Container, Paper, Stack} from "@mui/material";
import type {FC, ReactElement} from "react";

export interface ICenteredContainer {
    children: ReactElement[] | ReactElement | null;
}

export const CenteredContainer: FC<ICenteredContainer> = ({children}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Container maxWidth="sm">
                    <Paper sx={{ p: 4 }}>
                        <Stack direction={"column"}>
                            {children}
                        </Stack>
                    </Paper>
            </Container>
        </Box>
    )
}