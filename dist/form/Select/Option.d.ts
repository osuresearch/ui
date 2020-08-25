import React from 'react';
import { IFieldBind } from '../../internal/FormCommon/types';
import '../../internal/FormCommon/style.scss';
export interface Value {
    [key: string]: string;
}
export declare type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
    optionsBind?: IFieldBind<Value>;
    children?: string;
};
export declare const Option: React.FC<OptionProps>;
//# sourceMappingURL=Option.d.ts.map