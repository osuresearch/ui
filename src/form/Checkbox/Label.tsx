import React, { useContext } from 'react';
import { CheckboxContext } from '.';

import LabelCommon from '../../internal/FormCommon/Components/Label';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { };

export const Label: React.FC<LabelProps> = (props) => {
    const { bind } = useContext(CheckboxContext);

    return (
        <LabelCommon {...props} htmlFor={bind.id}>
            {props.children ?? bind.instructions}
        </LabelCommon>
    )
}