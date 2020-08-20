import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type LegendProps = React.HTMLAttributes<HTMLElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Legend(props: LegendProps) {
    const { bind } = useContext(props.context);

    return (
        <legend {...props}>
            {props.children ?? bind.instructions}
        </legend>
    );
}