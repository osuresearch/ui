import React, { useContext } from 'react';
import { Context } from '.';
import FormContext from '../../internal/FormCommon/FormContext';

import { Print, Diff } from '../../internal/FormCommon/Components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const checked: boolean = bind.value || props.checked || false;

    // If printing, just return the current value
    if (isPrint) {
        return (
            <Print>
                {checked && <i className="fa fa-check-square-o" aria-label="Checkbox was checked,,"></i>}
                {!checked && <i className="fa fa-square-o" aria-label="Checkbox was not checked,,"></i>}
                &nbsp; {bind.instructions}
            </Print>
        );
    }

    if (isDiff) {
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

    return (
        <input
            ref={ref}
            {...props}
            type='checkbox'
            id={bind.id}
            name={bind.name || props.name}
            className={classNames}
            defaultChecked={checked}
            onChange={(e) => {
                bind.value = e.currentTarget.checked;
                if (props.onChange) props.onChange(e);
            }}
            readOnly={bind.readOnly || props.readOnly}
            required={bind.required || props.required}
            aria-describedBy={`${bind.id}-help`}
        />
    )
});
