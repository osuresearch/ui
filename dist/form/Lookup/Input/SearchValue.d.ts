import React from 'react';
import { JsonObject } from '..';
import { IFieldBind } from '../../../internal/FormCommon/types';
declare type Props = {
    bind: IFieldBind<JsonObject>;
    onClear?: () => void;
    children: React.ReactNode;
};
declare const SearchValue: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export default SearchValue;
//# sourceMappingURL=SearchValue.d.ts.map