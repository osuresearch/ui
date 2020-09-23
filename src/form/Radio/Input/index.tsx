import React, { useContext } from 'react';
import { Context } from '..';

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

    const defaultChecked: boolean | undefined = props.checked || (props.defaultValue === '' + bind.value) || undefined;
    const checked = (props.defaultValue === '' + bind.value) ?? false;

    const defaultValue = bind.value || props.defaultValue || bind.id;
    const value = bind.value || bind.id;

    const readOnly = bind.readOnly || props.readOnly || false;

    // If readOnly, view the field in print view
    if (readOnly) {
        return (
            <Print>
                {checked && <i className="fa fa-check-square-o" aria-label="Radio button was selected,,"></i>}
                {!checked && <i className="fa fa-square-o" aria-label="Radio button was not selected,,"></i>}
                &nbsp; {bind.instructions}
            </Print>
        );
    }

    if (bind.diff) {
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

    let inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> = {
        ref: ref,
        ...props,
        id: bind.id,
        name: bind.name || props.name,
        defaultChecked: defaultChecked,
        defaultValue: defaultValue,
        className: classNames,
        "aria-describedby": `${bind.id}-help`,
        onChange: (e) => {
            bind.value = e.currentTarget.value;
            if (props.onChange) props.onChange(e);
        }
    }

    if (bind.controlled) {
        inputProps.checked = checked;
        inputProps.value = value;
    }

    return (
        <input {...inputProps} />
    )
});

export default Input;
