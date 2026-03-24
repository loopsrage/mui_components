/**
 * A type alias representing all JavaScript primitive types.
 */
export type Primitive = string | number | boolean | null | undefined | symbol | bigint;

/**
 * Returns true if the input is a primitive type.
 * Acts as a Type Guard for the 'Primitive' type.
 */
export declare const IsPrimitive: (input: unknown) => input is Primitive;

/**
 * Returns true if the value is null or undefined.
 * Acts as a Type Guard for null/undefined.
 */
export declare const IsNullOrUndefined: (value: unknown) => value is null | undefined;

/**
 * Converts a string to Title Case based on a provided separator.
 * Returns an empty string if input is null or undefined.
 *
 * @param input - The string to transform.
 * @param separator - The character used to split the string (e.g., "_" or ".").
 */
export declare const TitleCase: (input: string | null | undefined, separator: string) => string;
