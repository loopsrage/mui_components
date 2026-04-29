import { FC } from 'react';
import { Props } from '../../components/grid/grid';
export interface KeyValueProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}
export declare const DatagridSx: () => {
    '& .MuiDataGrid-columnHeader-last': {
        width: string;
        flex: number;
    };
    '& .MuiDataGrid-columnHeader[data-field="Field"]': {
        left: number;
        position: string;
        width: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-cell[data-field="Field"]': {
        left: number;
        borderRight: string;
        position: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-columnHeader[data-field="Value"]': {
        right: number;
        position: string;
        width: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-cell[data-field="Value"]': {
        right: number;
        borderLeft: string;
        position: string;
        zIndex: number;
        backgroundColor: string;
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
    '& .MuiDataGrid-main': {
        overflow: string;
    };
    '&': {
        width: string;
        display: string;
    };
};
export declare const FieldValueGrid: FC<KeyValueProps>;
//# sourceMappingURL=field_value_grid.d.ts.map