import { RefRegistry } from './context';
export interface IRefIndexContext {
    registry: () => RefRegistry;
    register: (key: string, el: unknown) => void;
    get: <T = unknown>(key: string) => T | null;
    unregister: (key: string) => void;
}
export declare const RefIndexContext: import('react').Context<IRefIndexContext | null>;
export declare const useRefIndex: () => IRefIndexContext | null;
export declare const useManagedRef: (key: string) => (el: unknown) => void;
export declare const useConditionalRef: (key: string, enabled?: boolean) => (el: unknown) => void;
//# sourceMappingURL=context_index.d.ts.map