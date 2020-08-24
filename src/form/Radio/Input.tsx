import React, { useContext } from 'react';
import { Context } from '.';
import FormContext from '../../internal/FormCommon/FormContext';

import { Print, Diff } from '../../internal/FormCommon/Components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number
}

export const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const checked: boolean | undefined = props.checked || (props.value === '' + bind.value) || undefined;

    const value = bind.value || props.value || undefined;

    // If printing, just return the current value
    if (isPrint) {
        return (
            <Print>
                {checked && <i className="fa fa-check-square-o" aria-label="Radio button was selected,,"></i>}
                {!checked && <i className="fa fa-square-o" aria-label="Radio button was not selected,,"></i>}
                &nbsp; {bind.instructions}
            </Print>
        );
    }

    if (isDiff) {
        const wasChecked: boolean = (props.value === '' + bind.initialValue);

        return (
            <Diff
                removed={wasChecked && !checked ?
                    <span>
                        <i className="fa fa-square-o" aria-label="Radio button was not selected,,"></i>
                        &nbsp; {bind.instructions}
                    </span> : undefined
                }
                added={!wasChecked && checked ?
                    <span>
                        <i className="fa fa-check-square-o" aria-label="Radio button was selected,,"></i>
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
            {...props}
            type='radio'
            id={bind.id}
            name={bind.name || props.name}
            checked={checked}
            value={value}
            className={classNames}

            readOnly={bind.readOnly || props.readOnly}
            required={bind.required || props.required}
        />
    )
}