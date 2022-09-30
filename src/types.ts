
/**
 * Generic interface for a TypeScript enum
 */
export interface Enum {
    [id: number]: string | number
}

/**
 * Arbitrary string-keyed JSON object
 */
 export type JsonObject = {
    [key: string]: unknown
}
