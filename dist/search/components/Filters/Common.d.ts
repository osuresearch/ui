import React from 'react';
export declare type KeyValuePairs = {
    [key: string]: string;
};
export declare type YetAnotherCheckboxWrapperProps = {
    name: string;
    checked: boolean;
    onClick: (checked: boolean) => void;
};
export declare const YetAnotherCheckboxWrapper: React.FC<YetAnotherCheckboxWrapperProps>;
export declare type YetAnotherRadioSetWrapperProps = {
    name: string;
    value: string;
    options: KeyValuePairs;
    onChange: (key: string, value: string) => void;
};
export declare const YetAnotherRadioSetWrapper: React.FC<YetAnotherRadioSetWrapperProps>;
//# sourceMappingURL=Common.d.ts.map