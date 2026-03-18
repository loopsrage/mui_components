import {createContext,  useContext} from "react";
import type { RefRegistry} from "./context";

export interface IRefIndexContext {
    registry: () => RefRegistry;
    register: (key: string, el: unknown) => void;
    get: <T = unknown>(key: string) => T | null;
    unregister: (key: string) => void;
}

export const RefIndexContext = createContext<IRefIndexContext | null>(null);

export const useRefIndex = () => {
    return useContext(RefIndexContext);
};

export const useManagedRef = (key: string) => {
    const context = useRefIndex();

    return (el: unknown) => {
        if (el) context?.register(key, el);
        else context?.unregister(key);
    };
};

export const useConditionalRef = (key: string, enabled: boolean = true) => {
    const context = useRefIndex();

    return (el: unknown) => {
        if (enabled && el) {
            context?.register(key, el);
        } else {
            context?.unregister(key);
        }
    };
};