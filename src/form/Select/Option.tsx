import React, { useContext } from 'react';
import { Context } from '.';
import FormContext from '../../internal/FormCommon/FormContext';
import { IFieldBind } from '../../internal/FormCommon/types';

import { Print, Diff } from '../../internal/FormCommon/Components';

import '../../internal/FormCommon/style.scss';

export interface Value {
    [key: string]: string;
}

export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
    optionsBind?: IFieldBind<Value>;
    children?: string;
}

export const Option: React.FC<OptionProps> = (props) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    if (props.optionsBind) {
        if (isPrint || bind.readOnly) {
            return <Print>{props.optionsBind.value![bind.value!]}</Print>
        }

        if (isDiff) {
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
        </>)
    }

    return (
        <option {...props}>{props.children}</option>
    )

}