import { ApiResponse } from '../components/grid/grid';
/**
 * Interface for the API client returned by the Api factory.
 */
export interface ApiClient {
    /** Generic JSON fetch at a specific sub-path */
    at: (endpoint: string, params?: Record<string, unknown>) => Promise<ApiResponse | unknown>;
    /** Specialized fetch for container-wrapped data structures */
    atContainer: (endpoint: string, params?: Record<string, unknown>) => Promise<ApiResponse  | unknown>;
    /** Fetches options specifically for dropdowns/selects */
    selectOptions: (args?: unknown) => Promise<Record<string, unknown>>;
    /** Sends a POST request to the /Create endpoint */
    create: (args: unknown, params?: Record<string, unknown>) => Promise<ApiResponse  | unknown>;
    /** Sends a POST request to the /Update endpoint with a specific ID */
    update: (args: unknown, id: string | number) => Promise<ApiResponse  | unknown>;
    /** Fetches a list of items from the /List endpoint */
    list: (args?: unknown) => Promise<ApiResponse | unknown>;
    /** Fetches the schema definition from the /Create endpoint */
    schema: () => Promise<ApiResponse | unknown>;
    /** Fetches a single record by ID from the /Get endpoint */
    get: (id: string | number) => Promise<ApiResponse | unknown>;
    /** Deletes a single record by ID */
    deleteId: (id: string | number) => Promise<ApiResponse>;
    /** Deletes multiple records via a POST request */
    deleteIds: (ids: (string | number)[]) => Promise<ApiResponse | unknown>;
    /** Returns the base endpoint string */
    endpoint: () => string;
}

export interface ApiProps {
    endpoint: string;
    handleErr?: (error: unknown) => void | null;
}

/**
 * Factory function that creates a standardized API client
 * for a specific backend entity/endpoint.
 */
export const Api: (props: ApiProps) => ApiClient;

/**
 * Higher-order function utility to trigger a GET request for a specific ID.
 */
export const HandleGet: (api: ApiClient, id: string | number) => () => Promise<unknown>;
