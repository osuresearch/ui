import React from 'react';

interface Props {
    id?: string;
    name?: string;
    value?: string | number | readonly string[];
}

/**
 * Render a print view as a readOnly text input (for components 
 * that have no native read only mode)
 */
export function Print({ id, name, value }: Props) {
    return (
        <input
            type='text'
            id={id}
            name={name}
            className='form-control'
            value={value ?? '–'}
            readOnly
            aria-disabled
        />
    )
}