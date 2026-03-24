import { FC, ReactElement } from 'react';
import { ApiClient } from '../../utility/api';
import { IBaseRefProps } from '../../ibase/ibase';
export interface GridWithButtonsProps extends IBaseRefProps {
    api: ApiClient;
    grid_endpoint: string;
    title: string;
    row_details: boolean;
    buttons?: ReactElement[] | null;
}
export declare const GridWithButtons: FC<GridWithButtonsProps>;
//# sourceMappingURL=grid_with_buttons.d.ts.map