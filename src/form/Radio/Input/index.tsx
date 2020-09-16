import React, { useContext } from 'react';
import { Context } from '..';
import FormContext from '../../../internal/FormCommon/FormContext';

import { Print } from '../../../internal/FormCommon/Utility/Print';
import { Diff } from '../../../internal/FormCommon/Utility/Diff';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number
}

/**
 * Styled equivalent of `<input type="radio"/>`
 * 
 * Additional accepted props:
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const checked: boolean | undefined = props.checked || (props.defaultValue === '' + bind.value) || undefined;

    const value = bind.value || props.defaultValue || bind.id;

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
            ref={ref}
            {...props}
            type='radio'
            id={bind.id}
            name={bind.name || props.name}
            defaultChecked={checked}
            defaultValue={value}
            className={classNames}
            aria-describedBy={`${bind.id}-help`}
            onChange={(e) => {
                bind.value = e.currentTarget.value;
                if (props.onChange) props.onChange(e);
            }}
            readOnly={bind.readOnly || props.readOnly}
            required={bind.required || props.required}
        />
    )
});

export default Input;
