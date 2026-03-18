import {Box, Container, Typography} from "@mui/material";

export const UIBottomNav = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: "black",
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © Your Website 2026.'}
                </Typography>
            </Container>
        </Box>
    )
}