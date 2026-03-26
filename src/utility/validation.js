export const IsPrimitive = (input) => {
    if (input === null) {
        return true; // null is a primitive
    }
    const type = typeof input;
    return (
        type === 'string' ||
        type === 'number' ||
        type === 'boolean' ||
        type === 'undefined' ||
        type === 'symbol' ||
        type === 'bigint' ||
        type === 'int'
    );
}

export const IsNullOrUndefined = (value) => { return value === null || value === undefined }

export const TitleCase = (input, separator) => {
    if (IsNullOrUndefined(input)) {
        return ""
    }
    return input
        .split(separator)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}