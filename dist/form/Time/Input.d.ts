import React from 'react';
export declare type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;
    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;
    /**
     * Callback called when the time is updated.
     * Returns the time in a 24h format, e.g. `14:05`
     */
    onChange?(newValue: string): void;
};
export declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string | undefined;
    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string | undefined;
    /**
     * Callback called when the time is updated.
     * Returns the time in a 24h format, e.g. `14:05`
     */
    onChange?(newValue: string): void;
} & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map