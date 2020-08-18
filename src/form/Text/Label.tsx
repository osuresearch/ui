import React, { useContext } from 'react';
import { TextContext } from './';

import LabelCommon from '../../internal/FormCommon/Label';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    // any Text.Label specific props here.
}

export const Label: React.FC<LabelProps> = (props) => {
    const { bind } = useContext(TextContext);

    return (
        <LabelCommon {...props} htmlFor={bind.id}>
            {props.children ?? bind.instructions}
        </LabelCommon>
    );
}
