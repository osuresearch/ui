import React, { useContext } from 'react';
import SuccessCommon from '../../internal/FormCommon/Components/Success';
import { CheckboxContext } from '.';

export interface SuccessProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Success: React.FC<SuccessProps> = (props) => {
    const { bind } = useContext(CheckboxContext);

    if (bind.success) {
        return (
            <SuccessCommon {...props}>
                {props.children ?? bind.success}
            </SuccessCommon>
        );
    }

    return null;
}