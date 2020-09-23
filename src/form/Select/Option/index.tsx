import React, { useContext } from 'react';
import { Context } from '..';
import { IFieldBind } from '../../../internal/FormCommon/types';

import { Print } from '../../../internal/FormCommon/Utility/Print';
import { Diff } from '../../../internal/FormCommon/Utility/Diff';

import '../../../internal/FormCommon/style.scss';

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

    if (props.optionsBind) {
        if (bind.readOnly) {
            return <Print>{props.optionsBind.value![bind.value!]}</Print>
        }

        if (bind.diff) {
            return (
                <Diff
                    removed={
                        !(bind.initialValue! in props.optionsBind.value!) ?
                            props.optionsBind.initialValue![bind.initialValue!] :
                            props.optionsBind.value![bind.initialValue!]
                    }
                    added={
                        props.optionsBind.value![bind.value!]
                    }
                />
            )
        }

        return (<>
            {Object.keys(props.optionsBind.value!).map((key) =>
                <option {...props} key={key} value={key}>
                    {props.optionsBind!.value![key]}
                </option>
            )}
        </>);
    }

    return (
        <option {...props}>{props.children}</option>
    );
}

export default Option;
