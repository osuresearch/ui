import React, { useContext } from 'react';
import SuccessCommon from '../../internal/FormCommon/Components/Success';
import { TextContext } from '.';

export interface SuccessProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Success: React.FC<SuccessProps> = (props) => {
    const { bind } = useContext(TextContext);

    if (bind.success) {
        return (
            <SuccessCommon {...props}>
                {props.children ?? bind.success}
            </SuccessCommon>
        );
    }

    return null;
}