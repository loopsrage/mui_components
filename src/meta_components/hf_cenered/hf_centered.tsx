import {HeaderFooterLayout} from "../header_footer_layout/header_footer_layout";
import {RefProvider} from "@/context/context";
import type {FC, ReactElement} from "react";
import {createTheme, CssBaseline, Stack, type Theme, ThemeProvider} from "@mui/material";

export interface HFCenteredLayoutProps {
    children: ReactElement | ReactElement[] | null;
    theme?: Theme | null;
}

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        allVariants: {
            fontFamily: 'Inter, Arial, sans-serif',
        },
    },
});

export const HFCenteredLayout: FC<HFCenteredLayoutProps> = ({children, theme}) => {
    let useTheme = defaultTheme
    if (!theme) {
        useTheme = defaultTheme
    }
    return (
        <RefProvider>
            <ThemeProvider theme={useTheme}>
                <CssBaseline />
                <HeaderFooterLayout>
                    <Stack direction={"column"} gap={2} alignItems="center" sx={{width: "100%"}}>
                        {children}
                    </Stack>
                </HeaderFooterLayout>
            </ThemeProvider>
        </RefProvider>
    )
}