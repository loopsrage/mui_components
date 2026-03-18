import {Box, Container, Paper, Stack, Typography} from "@mui/material";
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
                            <Typography variant="h5">H5 Heading</Typography>
                            {children}
                        </Stack>
                    </Paper>
            </Container>
        </Box>
    )
}