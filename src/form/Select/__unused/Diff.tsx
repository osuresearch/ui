import React from 'react';

interface Props {
    removed: string;
    added: string;
}

export default function Diff({ removed, added }: Props) {
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