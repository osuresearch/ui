import React from 'react';
export declare type InputProps = {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;
    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;
    /**
     * Callback called when the time is updated.
     * Returns the time in a 24h format, e.g. `14:05`
     */
    onChange?: (newValue: string) => void;
    id?: string;
    name?: string;
    className?: string;
    readOnly?: boolean;
    required?: boolean;
};
export declare const Input: React.FC<InputProps>;
//# sourceMappingURL=index.d.ts.map