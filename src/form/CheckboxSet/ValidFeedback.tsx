import React, { useContext } from 'react';
import ValidFeedbackCommon from '../../internal/FormCommon/Components/ValidFeedback';
import { CheckboxSetContext } from '.';

export interface ValidFeedbackProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ValidFeedback: React.FC<ValidFeedbackProps> = ({ children, ...props }) => {
    const { valid } = useContext(CheckboxSetContext);

    if (valid) {
        return (
            <ValidFeedbackCommon {...props}>
                {children}
            </ValidFeedbackCommon>
        )
    } else {
        return <></>
    }
}