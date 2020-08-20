import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Error(props: ErrorProps) {
    const { bind } = useContext(props.context);

    return (
        <div {...props} className='invalid-feedback'>
            {props.children ?? bind.error}
        </div>
    );
}
