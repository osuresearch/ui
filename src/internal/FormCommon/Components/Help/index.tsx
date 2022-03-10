import React, { useContext } from 'react';
import { IFormFieldContext } from '../../types';

export type HelpProps = React.HTMLAttributes<HTMLDivElement> & {
    /** 
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
}

/**
 * Additional (small) help text to go alongside the field
 * 
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
export function Help(props: HelpProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, className, ...otherProps } = props;
    const { bind } = useContext(context!);

    return (
        <small
            {...otherProps}
            id={`${bind.id}-help`}
            className={'form-text text-muted ' + className}
        >
            {props.children ?? bind.help}
        </small>
    );
}
