import React, { useContext } from 'react';
import ValidFeedbackCommon from '../../internal/FormCommon/Components/ValidFeedback';
import { CheckboxContext } from '.';

export interface ValidFeedbackProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ValidFeedback: React.FC<ValidFeedbackProps> = ({ children, ...props }) => {
    const { valid } = useContext(CheckboxContext);

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