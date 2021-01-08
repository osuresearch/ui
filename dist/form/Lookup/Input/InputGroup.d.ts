import React from 'react';
import { JsonObject } from '..';
import { IFieldBind } from '../../../internal/FormCommon/types';
declare type Props = {
    error: any;
    searching: boolean;
    bind: IFieldBind<JsonObject>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e?: React.FocusEvent) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    classNames: string;
    showResultsPane: boolean;
    activeDescendant?: string;
};
declare const InputGroup: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLInputElement>>;
export default InputGroup;
//# sourceMappingURL=InputGroup.d.ts.map