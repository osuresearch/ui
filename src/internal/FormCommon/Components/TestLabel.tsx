import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export default function Label(props: LabelProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context);

    return (
        <label
            {...otherProps}
            htmlFor={bind.id}
            className={
                (bind.required ? 'is-required' : '') +
                (props.className ? ' ' + props.className : '')
            }
        >
            {props.children ?? bind.instructions}
        </label>
    );
}
