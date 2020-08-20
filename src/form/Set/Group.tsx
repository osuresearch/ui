import React, { useContext } from 'react';
import { Context } from '.';

export interface GroupProps {
    name?: string;
    inline?: boolean;
    children: React.ReactHTMLElement<HTMLInputElement> | React.ReactHTMLElement<HTMLInputElement>[];
};

export const Group: React.FC<GroupProps> = ({
    children,
    inline,
    name
}) => {
    const { bind } = useContext(Context);

    return (
        <div className={
            'form-check' +
            (inline ? ' form-check-inline' : '') +
            (bind.success ? ' is-valid' : '') +
            (bind.error ? ' is-invalid' : '')
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