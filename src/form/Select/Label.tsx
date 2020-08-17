import React, { useContext } from 'react';
import { Context } from './';

import LabelCommon from '../../internal/FormCommon/Label';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { };

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    const { id, required } = useContext(Context);

    return (
        <LabelCommon
            className={
                (required ? ' is-required' : '')
            }
            {...props}

            htmlFor={id}
        >
            {children}
        </LabelCommon>
    )
}