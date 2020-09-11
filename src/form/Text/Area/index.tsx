import React, { useContext } from 'react';
import { Context } from '..';
import FormContext from '../../../internal/FormCommon/FormContext';

import Print from '../Print';
import Diff from '../Diff';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxLength?: number;
    minLength?: number;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const { bind } = useContext(Context);
    const { isDiff, isPrint } = useContext(FormContext);

    const value = bind.value || props.defaultValue;
    const { minLength, maxLength } = props;

    if (isDiff) {
        return (
            <Diff
                value={typeof (value) === 'string' ? value : undefined}
                prevValue={typeof (bind.initialValue) === 'string' ? bind.initialValue : undefined}
            />
        )
    }

    if (isPrint) {
        return <Print value={typeof (value) === 'string' ? value : ''} />
    }

    const classNames = 'form-control ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    return (<>
        <textarea
            ref={ref}
            {...props}
            id={bind.id}
            name={bind.name || props.name}
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
