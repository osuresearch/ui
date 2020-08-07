import React from 'react';
declare type Props = {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;
    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;
    /**
     * Callback called when the time is updated.
     * Returns the time in a 24h format, e.g. `14:05`
     */
    onChange?(newValue: string): void;
    /** ID */
    id: string;
    /** className */
    className?: string;
    /** readonly (optional) - Makes the field readonly */
    readOnly?: boolean;
    /** required (optional) - Makes the form fields required */
    required?: boolean;
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
//# sourceMappingURL=index.d.ts.map