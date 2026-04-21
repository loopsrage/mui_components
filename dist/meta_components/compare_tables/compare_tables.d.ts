import { FC, RefObject } from 'react';
import { GridWithButtonsProps } from '../grid_with_buttons/grid_with_buttons';
import { UITable } from '../../components/grid/grid';
export interface TableGroup {
    table: typeof UITable;
    props: GridWithButtonsProps;
}
export interface CompareTablesProps {
    tables: TableGroup[];
    compare: (state: Record<string, string>) => void;
}
export interface CompareTablesRef {
    state: Record<string, string>;
}
export declare const SetTableState: (ref: RefObject<CompareTablesRef>, refKey: string, value: string) => void;
export declare const CompareTables: FC<CompareTablesProps>;
//# sourceMappingURL=compare_tables.d.ts.map