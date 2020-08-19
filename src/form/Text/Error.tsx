import React, { useContext } from 'react';
import InvalidFeedbackCommon from '../../internal/FormCommon/Components/InvalidFeedback';
import { TextContext } from '.';

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {

}

export const Error: React.FC<ErrorProps> = (props) => {
    const { bind } = useContext(TextContext);

    if (bind.error) {
        return (
            <InvalidFeedbackCommon {...props}>
                {props.children ?? bind.error}
            </InvalidFeedbackCommon>
        );
    }

    return null;
}
