import type {FC} from "react";
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import BugReportIcon from '@mui/icons-material/BugReport';

export interface AppBarProps {
    title?: string;
    appbar_sx?: object;
}

export const UIAppBar: FC<AppBarProps> = ({title, appbar_sx}) => {
    return (
        <AppBar position="static" sx={{
            minHeight: 50,
            px: 2,
            mt: 'auto',
            backgroundColor: "black",
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            ...appbar_sx,
        }}>
            <Toolbar disableGutters>
                <Box
                    component="img"
                    sx={{ height: 20, marginRight: 2 }}
                    alt="Logo"
                    src="/logo.png"
                />

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>

                <IconButton
                    size="small"
                    sx={{ color: 'white' }}
                    onClick={() => console.log('Debug Clicked')}
                >
                    <BugReportIcon fontSize="small" />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}