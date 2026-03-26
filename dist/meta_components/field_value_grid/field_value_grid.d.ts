import { FC } from 'react';
import { Props } from '../../components/grid/grid';
export interface KeyValueProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}
export declare const DatagridSx: () => {
    '& .MuiDataGrid-cell[data-field="edit"]': {
        position: string;
        right: number;
        width: string;
        backgroundColor: string;
        zIndex: number;
    };
    '& .MuiDataGrid-main': {
        overflow: string;
    };
    "& .MuiSvgIcon-root MuiSvgIcon-fontSizeSmall MuiDataGrid-sortIcon": {
        color: string;
    };
    '& .MuiDataGrid-columnHeaderTitle': {
        fontSize: string;
        fontWeight: string;
    };
    '& .MuiDataGrid-columnHeaders div[role="row"]': {
        backgroundColor: string;
        color: string;
    };
    '& .MuiDataGrid-columnHeader': {
        backgroundColor: string;
        color: string;
    };
    '& .MuiDataGrid-filler': {
        backgroundColor: string;
    };
    '& .MuiDataGrid-menuIcon': {
        color: string;
    };
    '& .MuiDataGrid-columnSeparator': {
        color: string;
    };
};
export declare const FieldValueGrid: FC<KeyValueProps>;
//# sourceMappingURL=field_value_grid.d.ts.map