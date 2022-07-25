import React, { useContext } from 'react';
import { Context } from '..';
import { IFieldBind } from '../../../internal/FormCommon/types';

import { Diff } from '../../../internal/FormCommon/Utility/Diff';

// TODO: Move elsewhere. Maybe as a standard enum type?
export interface OptionKeyValuePair {
    [key: string]: string;
}

export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
    /**
     * FieldBind that contains an enumeration of key/value pairs.
     */
    optionsBind?: IFieldBind<OptionKeyValuePair>;
    children?: string;
}

/**
 * An option nested in a `<Select.Control>`
 * 
 * Requires *either* a `value` or `optionsBind` prop.
 * 
 * Accepts all 
 * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * props.
 */
const Option: React.FC<OptionProps> = (props) => {
    const { bind } = useContext(Context);
    const { optionsBind, ...otherProps } = props;

    if (optionsBind) {
        if (bind.diff) {
            return (
                <Diff
                    removed={
                        !(bind.initialValue! in optionsBind.value!) ?
                            optionsBind.initialValue![bind.initialValue!] :
                            optionsBind.value![bind.initialValue!]
                    }
                    added={
                        optionsBind.value![bind.value!]
                    }
                />
            )
        }

        return (<>
            {Object.keys(optionsBind.value!).map((key) =>
                <option {...otherProps} key={key} value={key}>
                    {optionsBind!.value![key]}
                </option>
            )}
        </>);
    }

    return (
        <option {...otherProps}>{props.children}</option>
    );
}

export default Option;
