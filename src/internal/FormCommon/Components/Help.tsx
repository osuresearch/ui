import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type HelpProps = React.HTMLAttributes<HTMLDivElement> & {
    // Will automatically be provided by an HOC
    context?: React.Context<IFormFieldContext<any>>;
}

export function Help(props: HelpProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    return (
        <small
            {...otherProps}
            className='form-text text-muted'
        >
            {props.children ?? bind.help}
        </small>
    );
}