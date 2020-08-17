import React, { useContext } from 'react';
import { Context } from './';

import LabelCommon from '../../internal/FormCommon/Label';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    hide?: boolean;
};

export const Label: React.FC<LabelProps> = ({
    children,
    hide,
    ...props
}) => {
    const { id, required } = useContext(Context);

    return (
        <LabelCommon
            className={
                (required ? ' is-required' : '') +
                (hide ? ' sr-only' : '')
            }
            {...props}

            htmlFor={id}
        >
            {children}
        </LabelCommon>
    )
}