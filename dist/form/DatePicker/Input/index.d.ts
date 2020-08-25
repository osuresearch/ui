import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
export declare type InputProps = ReactDatePickerProps & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    selected?: string;
    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: string) => Function;
};
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=index.d.ts.map