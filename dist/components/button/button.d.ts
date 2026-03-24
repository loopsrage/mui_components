import { FC, ReactElement } from 'react';
import { ButtonProps } from '@mui/material';
import { ApiClient } from '../../utility/api';
interface ApiButtonProps extends ButtonProps {
    api: ApiClient;
    endpoint: string | null;
    children?: ReactElement | ReactElement[] | null | string;
    get_args?: () => object;
    fetch_params?: () => object;
    callback?: (fetchParams: object, args: object, result: unknown) => void;
}
export declare const ApiButton: FC<ApiButtonProps>;
export {};
//# sourceMappingURL=button.d.ts.map