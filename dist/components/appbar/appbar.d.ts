import { FC, ReactElement } from 'react';
import { IBaseRefProps } from '../../ibase/ibase';
export interface AppBarProps extends IBaseRefProps {
    title?: string;
    appbar_sx?: object;
}
export interface AppBarState {
    register_element: (elem: Record<string, ReactElement>) => void;
}
export declare const UIAppBar: FC<AppBarProps>;
//# sourceMappingURL=appbar.d.ts.map