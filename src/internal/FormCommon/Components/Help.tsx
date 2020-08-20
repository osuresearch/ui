import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type HelpProps = React.HTMLAttributes<HTMLDivElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Help(props: HelpProps) {
    const { bind } = useContext(props.context);

    return (
        <small
            {...props}
            id={props.id}
            className='form-text text-muted'
        >
            {props.children ?? bind.help}
        </small>
    );
}