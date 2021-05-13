import React from 'react';
import { TermValue } from '../../..';
export declare type Props = {
    name: string;
    title: string;
    /** Optional id - will default to name if not provided */
    id?: string;
    /**
     * Value that should be set when toggled on. Defaults to boolean `true`
     */
    value?: TermValue;
};
/**
 * Single checkbox with custom formatting support
 */
declare const Toggle: React.FC<Props>;
export default Toggle;
//# sourceMappingURL=index.d.ts.map