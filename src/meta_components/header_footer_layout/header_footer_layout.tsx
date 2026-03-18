import {UIBottomNav} from "../../components/bottomnav/bottomnav";
import {UIAppBar} from "../../components/appbar/appbar";
import type {FC, ReactElement} from "react";

export interface IHeaderFooterLayout {
    children: ReactElement[] | ReactElement | null;
}

export const HeaderFooterLayout: FC<IHeaderFooterLayout>= ({children}) => {
    return (
        <div>
            <UIAppBar />
                {children}
            <UIBottomNav />
        </div>
    )
}