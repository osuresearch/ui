import React, { useContext } from 'react';
import { IFormFieldContext } from '../../types';

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {
    /** 
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
}

/**
 * Provides instructions on how to resolve a validation error.
 * 
 * Will display when error is set in the parent form component or 
 * the parent's `bind` prop is in an error state.
 * 
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
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
