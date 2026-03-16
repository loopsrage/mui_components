import {FetchApi} from "./fetchapi.js";

export const Api = ({ endpoint, handleErr}) => {
    const api = FetchApi(endpoint, {handleErr})
    return {
        at: async (endpoint, params) => await api.fetchJson({endpoint: endpoint, ...params}),
        atContainer: async (endpoint, params) => await api.fetchContainer({endpoint: endpoint, ...params}),
        selectOptions: async (args) => await api.fetchJson({
            endpoint: "/select_options",
            args,
        }),
        create: async (args, params = {}) => await api.fetchJson({
            endpoint: "/create",
            fetchParams: {
                method: "POST",
                ...params
            },
            args,
        }),
        update: async (args, id) => await api.fetchJson({
            endpoint: "/update?id="+id,
            fetchParams: {
                method: "POST"
            },
            args,
        }),
        list: async (args) => await api.fetchJson({endpoint: "/list", args}),
        get: async (id) => await api.fetchJson({endpoint: "/get", args: {id: id}}),
        deleteId: async (id) => await api.fetchJson({endpoint: "/delete", args: {id: id}}),
        deleteIds: async (ids) => await api.fetchJson({fetchParams: {method: "POST"},endpoint: "/delete", args: {...ids}}),
        endpoint: () => {
            return endpoint
        }
    }
}

export const HandleGet = (api, id) => {
    return () => api.get(id)
}