import React, { useContext } from 'react';
import { IFormFieldContext } from '../../types';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    /** 
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;

    children: string;
}

/**
 * Primary instructions for filling out a field
 * 
 * Supports all
 * [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * props.
 */
export function Label(props: LabelProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    const label = props.children || bind.instructions || '';

    return (
        <label
            {...otherProps}
            htmlFor={bind.id}
            className={
                (bind.required ? 'is-required' : '') +
                (props.className ? ' ' + props.className : '')
            }
            aria-label={bind.required ? `${label}, is required` : label}
        >
            {label}
        </label>
    );
}
