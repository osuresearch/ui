import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type ControlLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}
/**
 * Label for custom controls, i.e. checkboxes and radios.
 * Other fields should use the `Label` component
 * 
 */
export function ControlLabel(props: ControlLabelProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context);

    return (
        <label
            {...otherProps}
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
