import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
export declare type InputProps = Omit<ReactDatePickerProps, 'onChange' | 'selected'> & {
    /** The selected date - **must** be an ISO8601 timestamp string **/
    value: string;
    /**
     * onChange handler - a state setter for the parent component
     */
    onChange: (date: string) => void;
};
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=index.d.ts.map