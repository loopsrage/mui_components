import { FC, ReactElement } from 'react';
import { Props } from '../../components/grid/grid';
export interface GridWithButtonsProps extends Props {
    title: string;
    buttons?: ReactElement[] | null;
    title_topology_params?: object | null;
    button_stack_params?: object | null;
}
export declare const GridWithButtons: FC<GridWithButtonsProps>;
//# sourceMappingURL=grid_with_buttons.d.ts.map