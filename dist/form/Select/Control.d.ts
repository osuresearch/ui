import React from 'react';
import { OptionProps } from './Option';
export declare type ControlProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>;
};
export declare const Control: React.ForwardRefExoticComponent<React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>;
} & React.RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Control.d.ts.map