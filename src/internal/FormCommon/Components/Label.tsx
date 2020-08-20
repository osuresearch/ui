import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Label(props: LabelProps) {
    const { bind } = useContext(props.context);

    return (
        <label
            {...props}
            htmlFor={bind.id}
            className={
                'custom-control-label' +
                (props.className ? ' ' + props.className : '')
            }
        >
            {props.children ?? bind.instructions}
        </label>
    );
}
