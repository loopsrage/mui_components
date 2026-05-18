import { FC, RefObject, ReactElement } from 'react';
import { IBaseRefProps } from '../../ibase/ibase';
export interface AppBarProps extends IBaseRefProps {
    title?: string;
    appbar_sx?: object;
}
export interface AppBarState {
    register_element: (elem: Record<string, ReactElement>) => void;
    title?: string;
    set_appbar_title: (title: string) => void;
}
export declare const SetAppBarTitle: (ref: RefObject<AppBarState>, title: string) => void;
export declare const GetAppBarTitle: (ref: RefObject<AppBarState>) => string | undefined;
export declare const UIAppBar: FC<AppBarProps>;
//# sourceMappingURL=appbar.d.ts.map