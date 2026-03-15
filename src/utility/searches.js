import {IsNullOrUndefined} from "./validation.js";

export const DepthFirstSearch = (lastKey, inputObject, callback) => {
    if (typeof inputObject === "object" && !IsNullOrUndefined(inputObject)) {
        for (let i = 0; i < Object.keys(inputObject).length; i++) {
            DepthFirstSearch(Object.keys(inputObject)[i], inputObject[Object.keys(inputObject)[i]], callback)
        }
    }
    callback(lastKey, inputObject)
}

export const BreadthFirstSearch = (inputObject, callback) => {
    if (typeof inputObject !== 'object') {
        return callback(inputObject)
    }

    const queue = [...inputObject]
    while (queue.length > 0) {
        const current = queue.pop()
        if (typeof current === 'object') {
            queue.push(...current)
            continue
        }
        callback(current)
    }
}