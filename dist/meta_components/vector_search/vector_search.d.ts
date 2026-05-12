import { FC } from 'react';
import { InputProps, PaperProps, StackProps } from '@mui/material';
import { ApiClient, GridWithButtonsProps } from 'components';
export interface VectorSearchProps {
    api: ApiClient;
    endpoint: string;
    grid_props?: GridWithButtonsProps;
    grid_sx?: object;
    paper_props?: PaperProps;
    stack_props?: StackProps;
    input_props?: InputProps;
}
export declare const VectorSearch: FC<VectorSearchProps>;
//# sourceMappingURL=vector_search.d.ts.map