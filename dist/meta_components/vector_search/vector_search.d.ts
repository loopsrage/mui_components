import { FC, ReactElement } from 'react';
import { InputProps, StackProps } from '@mui/material';
import { ApiClient, GridWithButtonsProps } from 'components';
export interface VectorSearchProps {
    api: ApiClient;
    endpoint: string;
    grid_props?: GridWithButtonsProps;
    grid_sx?: object;
    stack_props?: StackProps;
    input_props?: InputProps;
    input_elem?: ReactElement;
}
export declare const VectorSearch: FC<VectorSearchProps>;
//# sourceMappingURL=vector_search.d.ts.map