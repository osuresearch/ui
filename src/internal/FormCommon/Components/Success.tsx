import React, { useContext } from 'react';
import { IFormFieldContext } from '../types';

export type SuccessProps = React.HTMLAttributes<HTMLDivElement> & {
    // Will automatically be provided by an HOC
    context: React.Context<IFormFieldContext<any>>;
}

export function Success(props: SuccessProps) {
    const { bind } = useContext(props.context);

    return (
        <div {...props} className='valid-feedback'>
            {props.children ?? bind.error}
        </div>
    );
}
