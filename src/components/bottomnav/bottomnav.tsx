import {Box, Container} from "@mui/material";

export const UIBottomNav = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                px: 2,
                mt: 'auto',
                backgroundColor: "black",
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Container maxWidth="sm" />
        </Box>
    )
}