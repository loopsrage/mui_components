
// WRITTEN BY AI, Asked Google AI to convert the following GO library to its javascript equivalent
// https://github.com/vitality-energy/uploader-server-lib-v3/tree/main/lib/jsonContainers
// Update modification to match searchers in GO
// Manual modifications done to ensure working are tagged MANUAL OVERWRITE

// Constants, simulating the Go string values

import {IsPrimitive} from "./validation.js";

const VALUES_STRING = 'Values'
const CONTAINERS_STRING = 'Containers'

/**
 * Creates a new, immutable container object.
 *
 * @param {object|null} parent The parent container object.
 * @param {string} path The full path of the container.
 * @param {*} value The value to store in the container.
 * @param {object|null} containerIndex The centralized index for the tree.
 * @returns {object} A new container object.
 */
export const createContainer = (parent, path, value, containerIndex) => {
    // If no index is provided (i.e., this is the root), create one.
    const newIndex = containerIndex || {
        [VALUES_STRING]: new Map(),
        [CONTAINERS_STRING]: new Map()
    }

    const currentPath = parent ? path : 'root'

    const newContainer = {
        parent,
        path: currentPath,
        value,
        children: [],
        root: parent ? parent.root : null,
        containerIndex: newIndex
    }

    if (!parent) {
        newContainer.root = newContainer
    }

    // Update the index with the new container and its value.
    newIndex[VALUES_STRING].set(currentPath, value)
    newIndex[CONTAINERS_STRING].set(currentPath, newContainer)

    return Object.freeze(newContainer)
}

/**
 * Returns the parent container object.
 *
 * @param {object} container The container to get the parent of.
 * @returns {object|null} The parent container.
 */
export const GetParent = (container) => container.parent || null

/**
 * Returns an array of children containers.
 *
 * @param {object} container The container to get children from.
 * @returns {object[]} An array of children containers.
 */
export const GetChildren = (container) => [...container.children]

/**
 * Returns the value stored in the container.
 *
 * @param {object} container The container to get the value from.
 * @returns {*} The value of the container.
 */
export const GetValue = (container) => container.value

/**
 * Returns the full path of the container.
 *
 * @param {object} container The container to get the path from.
 * @returns {string} The path of the container.
 */
export const GetPath = (container) => container.path

/**
 * Creates a new child container and appends it to the parent's children.
 * Returns a new parent container with the updated children array.
 *
 * @param {object} parent The parent container.
 * @param {string} path The full path of the new object.
 * @param {*} value The value for the new object.
 * @returns {object} The new parent container with the updated children.
 */
export const NewObject = (parent, path, value) => {
    const newChild = createContainer(parent, path, value, parent.containerIndex)
    return {
        ...parent,
        children: [...parent.children, newChild]
    }
}

/**
 * Appends new children to a container, returning a new container object.
 *
 * @param {object} container The container to append to.
 * @param {...object} children The child containers to append.
 * @returns {object} A new container with the updated children array.
 */
export const AppendChildren = (container, ...children) => ({
    ...container,
    children: [...container.children, ...children]
})

/**
 * Reads a value from the container's index.
 *
 * @param {object} container The container to read from.
 * @param {string} path The path to the value.
 * @returns {*} The value at the specified path.
 */
export const ReadFromValue = (container, path) =>
    container.containerIndex[VALUES_STRING].get(path)

/**
 * Reads a container object from the index.
 *
 * @param {object} container The container to read from.
 * @param {string} path The path to the container.
 * @returns {object|undefined} The container object at the specified path, or undefined.
 */
export const ReadFromContainers = (container, path) => container.containerIndex[CONTAINERS_STRING].get(path)

/**
 * Iterates over all values in the index and calls a callback function.
 *
 * @param {object} container The container to range over.
 * @param {Function} callback The function to call for each key-value pair.
 */
export const RangeValues = (container, callback) => {
    for (const [key, value] of container.containerIndex[VALUES_STRING].entries()) {
        callback(key, value)
    }
}

/**
 * Iterates over all container objects in the index and calls a callback function.
 *
 * @param {object} container The container to range over.
 * @param {Function} callback The function to call for each container object.
 */
export const RangeContainers = (container, callback) => {
    for (const [, value] of container.containerIndex[CONTAINERS_STRING].entries()) {
        callback(value)
    }
}

/**
 * MANUAL OVERWRITE
 * Iterates over all container objects in the index and calls a callback function.
 *
 * @param {object} container The container to range over.
 * @param {Function} callback The function to call for each container object.
 * @param {bigint} rootOffset Ensure key.split(".").length > rootOffset before callback. Defaults to 2 for agrid pagination
 */
export const RangePrimitiveValues = (container, callback, rootOffset = 2) => {
    RangeValues(container, (key, value) => {
        const keys = Object.keys(value)
        for (let i = 0; i < keys.length; i++) {
            const parts = key.split(".")
            parts.push(keys[i])
            const path = parts.slice(2).join(".")
            const val = value[keys[i]]
            if (parts.length > rootOffset && IsPrimitive(val)) {
                callback({i, value: val, path, fullpath: parts.join("."), key, containerValue: value})
            }
        }
    })
}

// Add a helper function to perform the deep update on the container object itself.
// This function must also rebuild the path, ensuring immutability.
const updateAndRebuildPath = (container, newValue) => {
    // If the value is a primitive, a new container is sufficient.
    if (IsPrimitive(newValue)) {
        return createContainer(container.parent, container.path, newValue, container.containerIndex);
    }

    // If the value is an object, we must create new child containers for it.
    // This is similar to the BuildContainerTree logic but starts from the updated point.
    const newContainer = createContainer(container.parent, container.path, {}, container.containerIndex);
    return BuildContainerTree(newContainer, container.path.split('.'), '.', newValue);
}

/**
 * Updates a container by its full path from the root.
 * This function is added to the library for an integrated update method.
 *
 * @param rootContainer MANUAL OVERWRITE
 * @param {string} path The full path of the container to update.
 * @param key  MANUAL OVERWRITE the
 * @param {*} newValue The new value for the target container.
 * @returns {object} A new root container object with the specified element updated.
 */
export const UpdateContainerByPath = (rootContainer, path, key,  newValue) => {
    if (!rootContainer || !path) {
        return rootContainer;
    }

    const targetContainer = rootContainer.containerIndex[CONTAINERS_STRING].get(path);

    if (!targetContainer) {
        console.warn(`Container at path "${path}" not found.`);
        return rootContainer;
    }

    // MANUAL OVERWRITE
    // Need to modify a key on an existing object instead of replacing the whole thing
    const nv = {}
    nv[key] = newValue
    const updatedVal = {...targetContainer.value, ...nv}

    // Create a new container with the updated value.
    const updatedLeafContainer = createContainer(
        targetContainer.parent,
        targetContainer.path,

        // MANUAL OVERWRITE
        updatedVal,
        rootContainer.containerIndex
    );

    // Update the index with the new container and value.
    // Maps allow for direct mutation without affecting references.
    rootContainer.containerIndex[CONTAINERS_STRING].set(path, updatedLeafContainer);
    rootContainer.containerIndex[VALUES_STRING].set(path, updatedVal);

    // Recursively update the parents to maintain the immutable chain.
    let currentContainer = updatedLeafContainer;
    while (currentContainer.parent) {
        const parent = currentContainer.parent;
        const newChildren = parent.children.map(child => {
            if (child.path === currentContainer.path) {
                return currentContainer;
            }
            return child;
        });

        const tck = currentContainer.path.split(".")
        const tk1 = tck.slice(tck.length-1)
        const npv = { ...rootContainer.containerIndex[VALUES_STRING].get(parent.path) }
        npv[tk1] = updatedVal
        const newParent = Object.freeze({
            ...parent,
            children: newChildren,
            value: npv
        });

        rootContainer.containerIndex[CONTAINERS_STRING].set(newParent.path, newParent);
        currentContainer = newParent;
    }

    // Return the new root, which has been updated through the parent chain.
    return rootContainer.containerIndex[CONTAINERS_STRING].get('root');
};

export const BuildContainerTree = (current = null, path = [], pathDelim = '_', ...start) => {
    // If no current container, create the root
    if (current === null) {
        const rootValue = start.length === 0 ? {} : start[0]
        current = createContainer(null, 'root', rootValue)
        path = ['root']
    }

    // Recursive processing function
    const processRecursively = (container, currentPath) => {
        const value = container.value

        if (typeof value === 'object' && value !== null) {
            if (!Array.isArray(value)) {
                Object.entries(value).forEach(([key, val]) => {
                    if (typeof val === 'object' && val !== null) {
                        const newPath = [...currentPath, key]
                        const jp = newPath.join(pathDelim)
                        const updatedContainer = NewObject(container, jp, val)
                        // Recursively call with the new child container
                        processRecursively(updatedContainer.children.at(-1), newPath)
                    }
                })
            } else {
                value.forEach((val, index) => {
                    if (typeof val === 'object' && val !== null) {
                        const newPath = [...currentPath, String(index)]
                        const jp = newPath.join(pathDelim)
                        const updatedContainer = NewObject(container, jp, val)
                        // Recursively call with the new child container
                        processRecursively(updatedContainer.children.at(-1), newPath)
                    }
                })
            }
        }
        return container
    }

    return processRecursively(current, path)
}