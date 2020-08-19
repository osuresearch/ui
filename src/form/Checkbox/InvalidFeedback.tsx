import React, { useContext } from 'react';
import InvalidFeedbackCommon from '../../internal/FormCommon/Components/InvalidFeedback';
import { CheckboxContext } from '.';

export interface InvalidFeedbackProps extends React.HTMLAttributes<HTMLDivElement> { }

export const InvalidFeedback: React.FC<InvalidFeedbackProps> = ({ children, ...props }) => {
    const { invalid } = useContext(CheckboxContext);

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