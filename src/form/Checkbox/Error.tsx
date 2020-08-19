import React, { useContext } from 'react';
import ErrorCommon from '../../internal/FormCommon/Components/Error';
import { CheckboxContext } from '.';

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Error: React.FC<ErrorProps> = (props) => {
    const { bind } = useContext(CheckboxContext);

    if (bind.error) {
        return (
            <ErrorCommon {...props}>
                {props.children ?? bind.error}
            </ErrorCommon>
        );
    }

    return null;
}