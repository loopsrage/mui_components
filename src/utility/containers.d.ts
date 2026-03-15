/**
 * T represents the type of the 'value' stored in the container.
 * Defaulting to 'unknown' satisfies ESLint while remaining safe.
 */
export interface ContainerIndex<T = unknown> {
    Values: Map<string, T>;
    Containers: Map<string, Container<T>>;
}

/**
 * The core Container structure using Generics.
 */
export interface Container<T = unknown> {
    readonly parent: Container<T> | null;
    readonly path: string;
    readonly value: T;
    readonly children: Container<T>[];
    readonly root: Container<T> | null;
    readonly containerIndex: ContainerIndex<T>;
}

/**
 * Arguments for the RangePrimitiveValues callback.
 */
export interface PrimitiveValueEntry {
    i: number;
    // Specifically defined as valid primitive types
    value: string | number | boolean | null | undefined;
    path: string;
    fullpath: string;
    key: string;
    // Uses Record<string, unknown> instead of any for objects
    containerValue: Record<string, unknown>;
}

/**
 * Core Library Functions
 */

export declare const createContainer: <T = unknown>(
    parent: Container<T> | null,
    path: string,
    value: T,
    containerIndex?: ContainerIndex<T>
) => Container<T>;

export declare const GetParent: <T = unknown>(container: Container<T>) => Container<T> | null;

export declare const GetChildren: <T = unknown>(container: Container<T>) => Container<T>[];

export declare const GetValue: <T = unknown>(container: Container<T>) => T;

export declare const GetPath: (container: Container) => string;

export declare const NewObject: <T = unknown>(parent: Container<T>, path: string, value: T) => Container<T>;

export declare const AppendChildren: <T = unknown>(container: Container<T>, ...children: Container<T>[]) => Container<T>;

export declare const ReadFromValue: <T = unknown>(container: Container<T>, path: string) => T | undefined;

export declare const ReadFromContainers: <T = unknown>(container: Container<T>, path: string) => Container<T> | undefined;

export declare const RangeValues: <T = unknown>(
    container: Container<T>,
    callback: (key: string, value: T) => void
) => void;

export declare const RangeContainers: <T = unknown>(
    container: Container<T>,
    callback: (value: Container<T>) => void
) => void;

export declare const RangePrimitiveValues: (
    container: Container,
    callback: (entry: PrimitiveValueEntry) => void,
    rootOffset?: number
) => void;

export declare const UpdateContainerByPath: <T = unknown>(
    rootContainer: Container<T>,
    path: string,
    key: string,
    newValue: T
) => Container<T>;

export declare const BuildContainerTree: <T = unknown>(
    parent: Container<T> | null,
    parts: string[],
    separator: string,
    data: T
) => Container<T>;