// COMMENTED BY AI

import {IsNullOrUndefined} from "./validation.js";

const buildUrl = (params) => {
    let url = ""
    const serializedParams = Object.keys(params)
        .map(key => {
            const value = params[key]
            if (IsNullOrUndefined(value)) {
                return ''
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        })
        .filter(pair => pair !== '')
        .join('&')

    if (serializedParams) {
        const hashIndex = url.indexOf('#');
        if (hashIndex !== -1) {
            url = url.slice(0, hashIndex)
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
    }
    return url
}

/**
 * A factory function that creates a reusable API wrapper for making fetch requests.
 * @param {string} coreUrl - The base URL for all API requests.
 * @param {object} options - Configuration options for the API wrapper.
 * @param {object} [options.baseHeaders={}] - Default headers to be included with every request.
 * @param {function} [options.handleErr] - A callback function to handle network-level errors (e.g., failed to reach server).
 * @param {function} [options.handleFinally] - A callback function to execute after every fetch request, regardless of success or failure.
 * @param {boolean} [options.debug=false] - A flag to enable or disable console logging for debugging.
 * @returns {object} An object containing pre-configured fetch functions.
 */

export const FetchApi = (coreUrl, {baseHeaders, handleErr, handleFinally, debug} = {}) => {
    // Merge provided baseHeaders with a default 'Content-Type' header.
    const header = {'Content-Type': 'application/json', ...baseHeaders}

    // A helper function for logging parameters when the debug flag is true.
    const debugFunc = (params) => {
        console.log(params);
    }

    /**
     * A base promise-based fetch function that handles common logic.
     * It appends the endpoint to the core URL, sets headers, handles network errors,
     * and executes the `handleFinally` callback.
     * @param {object} params - Request parameters.
     * @param {string} params.endpoint - The specific API endpoint.
     * @param {object} [params.inputHeaders={}] - Headers specific to this request.
     * @param {object} [params.fetchParams={}] - Additional parameters for the `fetch` call.
     * @param args
     * @returns {Promise<void>} A promise that resolves to the raw Response object.
     */
    const fetchPromise = ({endpoint, inputHeaders, fetchParams, args}) => {
        if (IsNullOrUndefined(endpoint)) {
            endpoint = ""
        }
        let fetchUrl = coreUrl + endpoint
        const mergedHeaders = { ...header, ...inputHeaders };
        Object.keys(mergedHeaders).forEach(key => {
            if (IsNullOrUndefined(mergedHeaders[key])) {
                delete mergedHeaders[key];
            }
        });

        const options = {
            method: "GET",
            headers: {
                ...mergedHeaders,
            },
            ...fetchParams,
        }

        if (!IsNullOrUndefined(args)) {
            if (options.method === "POST") {
                options.body = JSON.stringify(args)
            }

            if (options.method === "GET") {
                fetchUrl = fetchUrl + buildUrl(args)
            }
        }

        return fetch(fetchUrl, options).catch(reason => handleErr(reason)).finally(() => {
            // Log request parameters if debugging is enabled.
            if (debug) {
                debugFunc({endpoint, inputHeaders, fetchParams})
            }
            // Execute the `handleFinally` callback if it exists.
            !IsNullOrUndefined(handleFinally) ? handleFinally({endpoint, inputHeaders, fetchParams}) : () => {}
        })


    }

    /**
     * Fetches data and decompresses the Gzip response.
     * Note: This assumes `DecompressGzip` is a function available in the context.
     * @param {object} params - The same parameters as `fetchPromise`.
     * @returns {Promise<any>} A promise that resolves to the decompressed data.
     */
    const fetchGunzip = (params) => fetchPromise(params).then(result => DecompressGzip(result))

    /**
     * Fetches data and parses the response as JSON.
     * @param {object} params - The same parameters as `fetchPromise`.
     * @returns {Promise<object>} A promise that resolves to the JSON data.
     */
    const fetchJson = (params) => fetchPromise(params).then(result => result.json() || {})

    /**
     * Fetches JSON data and processes it into a container tree structure.
     * @param {object} params - The same parameters as `fetchPromise`.
     * @returns {Promise<object>} A promise that resolves to the container tree.
     */
    const fetchContainer = (params) => fetchJson(params).then(result => BuildContainerTree(null, [], ".", result))
    const at = (endpoint, params = {}) => {
        return fetchJson({ endpoint, ...params });
    };

    const atContainer = (endpoint, params = {}) => {
        return fetchContainer({ endpoint, ...params });
    };
    // Return the object containing the various fetch functions.
    return { fetchPromise, fetchJson, fetchGunzip, fetchContainer, at, atContainer};
}



/**
 * A default instance of the FetchApi configured for a local development server.
 * @type {object}
 */
export const DefaultApi = FetchApi("http://localhost:8080/", {
    handleErr: (reason) => console.log(reason), // Simple error logging for the default case.
    debug: true // Debugging is enabled for this instance.
});