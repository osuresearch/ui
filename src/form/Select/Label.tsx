import React, { useContext } from 'react';
import { SelectContext } from './';

import LabelCommon from '../../internal/FormCommon/Components/Label';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    hide?: boolean;
};

export const Label: React.FC<LabelProps> = ({
    children,
    hide,
    ...props
}) => {
    const { bind } = useContext(SelectContext);

    return (
        <LabelCommon
            className={
                (bind.required ? ' is-required' : '') +
                (hide ? ' sr-only' : '')
            }
            {...props}

            htmlFor={bind.id}
        >
            {children}
        </LabelCommon>
    )
}