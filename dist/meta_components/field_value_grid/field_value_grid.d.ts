import { FC } from 'react';
import { Props } from '../../components/grid/grid';
export interface KeyValueProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}
export declare const DatagridSx: () => {
    '& .MuiDataGrid-cell': {
        whiteSpace: string;
        display: string;
        alignItems: string;
    };
    '& .MuiDataGrid-columnHeader[data-field="Field"]': {
        width: string;
        flex: number;
        left: number;
        position: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-cell[data-field="Field"]': {
        width: string;
        left: number;
        flex: number;
        borderRight: string;
        position: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-columnHeader[data-field="Value"]': {
        flex: number;
        right: number;
        width: string;
        position: string;
        zIndex: number;
        backgroundColor: string;
    };
    '& .MuiDataGrid-cell[data-field="Value"]': {
        flex: number;
        width: string;
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