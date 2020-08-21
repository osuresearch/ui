import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type LegendProps = React.HTMLAttributes<HTMLElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Legend(props: LegendProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context);

    return (
        <legend {...otherProps}>
            {props.children ?? bind.instructions}
        </legend>
    );
}