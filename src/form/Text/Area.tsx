import React, { useContext } from 'react';
import { Context } from '.';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxLength?: number;
    minLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
    const { bind } = useContext(Context);

    const value = bind.value || props.value;
    const { minLength, maxLength } = props;

    const classNames = 'form-control ' +
        (props.className ?? '') +
        (bind.error ? ' is-invalid' : '') +
        (bind.success ? ' is-valid' : '')
        ;

    return (<>
        <textarea
            {...props}
            id={bind.id}
            name={bind.name || props.name}
            readOnly={bind.readOnly}
            value={value}
            className={classNames}
            onChange={(e) => {
                bind.value = e.currentTarget.value;
                if (props.onChange) props.onChange(e);
            }}
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
}
