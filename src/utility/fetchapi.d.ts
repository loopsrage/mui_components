export interface ApiArgs {
    endpoint: string;
    args?: Record<string, never>;
    inputHeaders?: Record<string, string>;
    fetchParams?: never;
}

export interface ApiWrapper {
    fetchPromise: (params: ApiArgs) => Promise<Response>;
    fetchJson: <T = never>(params: ApiArgs) => Promise<T>;
    fetchGunzip: (params: ApiArgs) => Promise<never>;
    fetchContainer: (params: ApiArgs) => Promise<never>;
    at: <T = never>(endpoint: string, params?: {
        fetchParams: object;
        args: object
    }) => Promise<T>;
    atContainer: (endpoint: string, params?: Partial<ApiArgs>) => Promise<never>;
}

export declare function FetchApi(coreUrl: string, options?: never): ApiWrapper;
export const DefaultApi: ApiWrapper;
