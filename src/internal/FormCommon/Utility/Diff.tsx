import React from 'react';

export interface DiffProps {
    removed?: string | JSX.Element | null;
    added?: string | JSX.Element | null;
}

export function Diff({ removed, added }: DiffProps) {
    return (
        <p className="text-diff text-print">
            <span className='is-removed'>
                {removed}
            </span>

            <span className='is-added'>
                {added}
            </span>
        </p>
    );
}