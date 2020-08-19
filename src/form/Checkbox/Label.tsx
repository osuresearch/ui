import React, { useContext } from 'react';
import { CheckboxContext } from '.';

import LabelCommon from '../../internal/FormCommon/Components/Label';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { };

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
    const { id } = useContext(CheckboxContext);

    return (
        <LabelCommon {...props} htmlFor={id}>
            {children}
        </LabelCommon>
    )
}