import {UIBottomNav} from "@/components/bottomnav/bottomnav";
import {UIAppBar} from "@/components/appbar/appbar";
import type {FC, ReactElement} from "react";
import {Box} from "@mui/material";

export interface IHeaderFooterLayout {
    children: ReactElement[] | ReactElement | null;
}

export const HeaderFooterLayout: FC<IHeaderFooterLayout>= ({children}) => {
    return (
        <Box sx={{width: "100%"}}>
            <UIAppBar />
                {children}
            <UIBottomNav />
        </Box>
    )
}