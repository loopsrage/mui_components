import { FC } from 'react';
import { GridWithButtonsProps } from '../grid_with_buttons/grid_with_buttons';
import { UITable } from '../../components/grid/grid';
export interface TableGroup {
    table: typeof UITable;
    props: GridWithButtonsProps;
}
export interface CompareTablesProps {
    tables: TableGroup[];
}
export declare const CompareTables: FC<CompareTablesProps>;
//# sourceMappingURL=compare_tables.d.ts.map