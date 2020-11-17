import React, { useContext } from 'react';
import { IFormFieldContext } from '../../../../internal/FormCommon/types';

export type LegendProps = React.HTMLAttributes<HTMLElement> & {
    /** 
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;

    children: string;
}

export function Legend(props: LegendProps) {
    // Separate context from the other props (or else they are added as props to the component itself)
    const { context, ...otherProps } = props;
    const { bind } = useContext(context!);

    const legend = props.children || bind.instructions || '';

    return (
        <legend {...otherProps} className={
            bind.required ? 'is-required' : ''
        }
        >
            {legend} {bind.required && <span className='sr-only'>,Required</span> // fieldsets do not have a native way to indicate that the group of components are required, so use the legend to communicate that: https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-fieldset
            }
        </legend>
    );
}
