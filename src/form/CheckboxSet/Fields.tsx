import React, { useContext } from 'react';
import { CheckboxSetContext } from '.';

export interface FieldsProps {
    name?: string;
    inline?: boolean;
    children: React.ReactHTMLElement<HTMLInputElement> | React.ReactHTMLElement<HTMLInputElement>[];
};

export const Fields: React.FC<FieldsProps> = ({
    children,
    inline,
    name
}) => {
    const { valid, invalid } = useContext(CheckboxSetContext);

    return (
        <div className={
            'form-check' +
            (inline ? ' form-check-inline' : '') +
            (valid ? ' is-valid' : '') +
            (invalid ? ' is-invalid' : '')
        }>
            {name && <>
                {Array.isArray(children)
                    // @ts-ignore
                    ? children.map((child: React.ReactHTMLElement<HTMLInputElement>) => (
                        React.cloneElement(child, { name: name })
                    ))
                    : React.cloneElement(children, { name: name })
                }
            </>}

            {!name && children}
        </div>
    )
}