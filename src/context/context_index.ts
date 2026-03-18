import {createContext,  useContext} from "react";
import type { RefRegistry} from "./context";

export interface IRefIndexContext {
    registry: () => RefRegistry;
    register: (key: string, el: unknown) => void;
    get: <T = unknown>(key: string) => T | null;
}

export const RefIndexContext = createContext<IRefIndexContext | null>(null);

export const useRefIndex = () => {
    const context = useContext(RefIndexContext);
    if (!context) throw new Error("useRefIndex must be used within a RefProvider");
    return context;
};