import React, { useContext } from 'react';
import { IFormFieldContext } from '../../types';

export type SuccessProps = React.HTMLAttributes<HTMLDivElement> & {
    /** Will automatically be provided by an HOC */
    context?: React.Context<IFormFieldContext<any>>;
}

/**
 * Feedback for when the form component meets the validation rules.
 * 
 * Will display when `success` is set in the parent form component
 */
export function Success(props: SuccessProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    return (
        <div {...otherProps} className='valid-feedback'>
            {props.children ?? bind.success}
        </div>
    );
}
