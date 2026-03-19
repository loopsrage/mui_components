import {HeaderFooterLayout} from "../header_footer_layout/header_footer_layout";
import {RefProvider} from "../../context/context";
import type {FC, ReactElement} from "react";
import {Stack} from "@mui/material";

export interface HFCenteredLayoutProps {
    children: ReactElement | ReactElement[] | null;
}

export const HFCenteredLayout: FC<HFCenteredLayoutProps> = ({children}) => {
    return (
        <RefProvider>
            <HeaderFooterLayout>
                <Stack direction={"column"} gap={3}>
                    {children}
                </Stack>
            </HeaderFooterLayout>
        </RefProvider>
    )
}