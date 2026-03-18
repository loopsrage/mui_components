import {type FC, type ReactNode,  useMemo, useRef} from 'react';
import { RefIndexContext } from "./context_index";

export interface RefProviderProps {
    children: ReactNode | ReactNode[] | null;
}

export type RefRegistry = { [key: string]: unknown };

export const RefProvider: FC<RefProviderProps> = ({ children }) => {
    const registry = useRef<RefRegistry>({});

    const api = useMemo(() => ({
        register: (key: string, el: unknown) => {
            registry.current[key] = el;
        },
        get: <T = unknown>(key: string): T | null => {
            return (registry.current[key] as T) || null;
        },
        registry: () => registry.current
    }), []);

    return (
        <RefIndexContext.Provider value={api}>
            {children}
        </RefIndexContext.Provider>
    );
};

