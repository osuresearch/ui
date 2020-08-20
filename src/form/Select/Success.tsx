import React, { useContext } from 'react';
import SuccessCommon from '../../internal/FormCommon/Components/Success';
import { SelectContext } from '.';

export interface SuccessProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Success: React.FC<SuccessProps> = ({ children, ...props }) => {
    const { bind } = useContext(SelectContext);

    if (bind.success) {
        return (
            <SuccessCommon {...props}>
                {children}
            </SuccessCommon>
        )
    } else {
        return <></>
    }
}