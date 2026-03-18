import type {FC} from "react";
import {AppBar, Box} from "@mui/material";

export const UIAppBar: FC = () => {
    return (
        <Box sx={{
            py: 6,
            px: 2,
            mt: 'auto',
            backgroundColor: "black",
            width: '100%',
            flexGrow: 1,
        }}>
            <AppBar position="static" />
        </Box>
    )
}