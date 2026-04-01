import { FC } from 'react';
import { Props } from '../../components/grid/grid';
export declare const CsvDatagridSx: () => {
    '& .MuiDataGrid-columnHeader[data-field="Field"]': {
        left: number;
        position: string;
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
        minWidth: string;
    };
    '&': {
        width: string;
    };
};
export declare const CsvGrid: FC<Props>;
//# sourceMappingURL=csv_grid.d.ts.map