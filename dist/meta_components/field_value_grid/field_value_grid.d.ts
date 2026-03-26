import { FC } from 'react';
import { Props } from '../../components/grid/grid';
export interface KeyValueProps extends Omit<Props, 'api' | 'endpoint' | 'refKey'> {
    data: object;
}
export declare const FieldValueGrid: FC<KeyValueProps>;
//# sourceMappingURL=field_value_grid.d.ts.map