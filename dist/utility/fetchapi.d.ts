export interface ApiArgs {
    endpoint: string;
    args?: Record<string, unknown>;
    inputHeaders?: Record<string, string>;
    fetchParams?: unknown;
}

export interface ApiWrapper {
    fetchPromise: (params: ApiArgs) => Promise<Response>;
    fetchJson: (params: ApiArgs) => Promise<unknown>;
    fetchGunzip: (params: ApiArgs) => Promise<unknown>;
    fetchContainer: (params: ApiArgs) => Promise<unknown>;
    at: (endpoint: string, params?: {
        fetchParams: object;
        args: object
    }) => Promise<unknown>;
    atContainer: (endpoint: string, params?: Partial<ApiArgs>) => Promise<unknown>;
}

export declare function FetchApi(coreUrl: string, options?: unknown): ApiWrapper;
export const DefaultApi: ApiWrapper;
