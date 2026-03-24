import { FC, ReactNode } from 'react';
export interface RefProviderProps {
    children: ReactNode | ReactNode[] | null;
}
export type RefRegistry = {
    [key: string]: unknown;
};
export declare const RefProvider: FC<RefProviderProps>;
//# sourceMappingURL=context.d.ts.map