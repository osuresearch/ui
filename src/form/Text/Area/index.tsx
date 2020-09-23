import React, { useContext } from 'react';
import { Context } from '..';

import Print from '../Print';
import Diff from '../Diff';

export type AreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxLength?: number;
    minLength?: number;
}

/**
 * Equivalent of `<textarea>`
 * 
 * Accepts all
 * [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * props.
 */
const Area = React.forwardRef<HTMLTextAreaElement, AreaProps>((props, ref) => {
    const { bind } = useContext(Context);

    const defaultValue = bind.value || props.defaultValue;
    const value = bind.controlled && typeof (bind.value) === 'string' ? bind.value : undefined;

    const { minLength, maxLength } = props;

    const readOnly = bind.readOnly || props.readOnly;

    if (bind.diff) {
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    if (readOnly) {
        return <Print value={typeof (value) === 'string' ? value : ''} />
    }

    const classNames = 'form-control ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    let textAreaProps: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> = {
        ref: ref,
        ...props,
        id: bind.id,
        name: bind.name || props.name,
        defaultValue: defaultValue,
        className: classNames,
        'aria-describedby': `${bind.id}-help`,
        onChange: (e) => {
            bind.value = e.currentTarget.value;
            if (props.onChange) props.onChange(e);
        }
    }

    if (bind.controlled) {
        textAreaProps.value = value;
    }

    return (<>
        <textarea {...textAreaProps} />

        {typeof (value) === 'string' && minLength && (value.length < minLength) &&
            <div className='small text-muted'>
                {`${minLength} characters required – ${minLength - value.length} more needed`}
            </div>
        }
        {typeof (value) === 'string' && maxLength &&
            <div className='small text-muted'>
                {`${value.length} of ${maxLength} character limit`}
            </div>
        }
    </>);
});

export default Area;
