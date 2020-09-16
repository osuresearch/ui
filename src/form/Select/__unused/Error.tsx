import React, { useContext } from 'react';
import ErrorCommon from '../../internal/FormCommon/Components/Error';
import { SelectContext } from '.';

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Error: React.FC<ErrorProps> = ({ children, ...props }) => {
    const { bind } = useContext(SelectContext);

    if (bind.error) {
        return (
            <ErrorCommon {...props}>
                {children}
            </ErrorCommon>
        )
    } else {
        return <></>
    }
}