
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

export enum Theme {
    Primary = 'primary',
    Secondary = 'secondary',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Danger = 'danger',
}
