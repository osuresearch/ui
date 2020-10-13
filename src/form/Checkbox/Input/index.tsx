import React, { useContext } from 'react';
import { Context } from '..';

import { Diff } from '../../../internal/FormCommon/Utility/Diff';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

/** 
 * Accepts all 
 * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * as props.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { bind } = useContext(Context);

    const defaultChecked: boolean = bind.value || props.defaultChecked || false;
    const checked: boolean = bind.value ? bind.value : false;

    const readOnly = bind.readOnly || props.readOnly;
    const required = bind.required || props.required;

    // Diff mode
    if (bind.diff) {
        const wasChecked: boolean = bind.initialValue === true;

        return (
            <Diff
                removed={wasChecked && !checked ?
                    <span>
                        <i className="fa fa-square-o" aria-label="Checkbox was not checked,,"></i>
                        &nbsp; {bind.instructions}
                    </span> : undefined
                }
                added={!wasChecked && checked ?
                    <span>
                        <i className="fa fa-check-square-o" aria-label="Checkbox was checked,,"></i>
                        &nbsp; {bind.instructions}
                    </span> : undefined
                }
            />
        );
    }

    const classNames = 'custom-control-input ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
        ref: ref,
        ...props,
        type: 'checkbox',
        id: bind.id,
        name: bind.name || props.name,
        className: classNames,
        defaultChecked: defaultChecked,
        onClick: (e) => {
            if (readOnly) {
                return e.preventDefault();
            }
        },
        onChange: (e) => {
            bind.value = e.currentTarget.checked;
            if (props.onChange) props.onChange(e);
        },
        "aria-describedby": `${bind.id}-help`,
        readOnly: readOnly,
        "aria-disabled": readOnly,
        "aria-required": required,
        "aria-invalid": bind.error ? true : false
    }

    if (bind.controlled) {
        inputProps.checked = checked;
    }

    return (
        <input {...inputProps} />
    )
});

export default Input;
