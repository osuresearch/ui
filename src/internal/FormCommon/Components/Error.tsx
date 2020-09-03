import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {
    // Will automatically be provided by an HOC
    context?: React.Context<IFormFieldContext<any>>;
}

export function Error(props: ErrorProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    return (
        <div
            {...otherProps}
            className='invalid-feedback'
            role='alert'
            aria-live='assertive'
        >
            {props.children ?? bind.error}
        </div>
    );
}
