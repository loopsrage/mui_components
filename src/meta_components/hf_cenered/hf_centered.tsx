import {HeaderFooterLayout} from "../header_footer_layout/header_footer_layout";
import {CenteredContainer} from "../../components/centered_container/centered_container";
import {RefProvider} from "../../context/context";
import type {FC, ReactElement} from "react";

export interface HFCenteredLayoutProps {
    children: ReactElement | ReactElement[] | null;
}

export const HFCenteredLayout: FC<HFCenteredLayoutProps> = ({children}) => {
    return (
        <RefProvider>
            <HeaderFooterLayout>
                <CenteredContainer>
                    {children}
                </CenteredContainer>
            </HeaderFooterLayout>
        </RefProvider>
    )
}