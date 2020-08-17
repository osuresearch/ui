import React, { useContext } from 'react';
import InvalidFeedbackCommon from '../../internal/FormCommon/InvalidFeedback';
import { CheckboxSetContext } from '.';

export interface InvalidFeedbackProps extends React.HTMLAttributes<HTMLDivElement> { }

export const InvalidFeedback: React.FC<InvalidFeedbackProps> = ({ children, ...props }) => {
    const { invalid } = useContext(CheckboxSetContext);

    if (invalid) {
        return (
            <InvalidFeedbackCommon {...props}>
                {children}
            </InvalidFeedbackCommon>
        )
    } else {
        return <></>
    }
}