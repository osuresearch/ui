import React from 'react';
import { diffWords } from 'diff';

interface DiffToken {
    added: boolean;
    removed: boolean;
    value: string;
};

interface Props {
    value?: string;
    prevValue?: string;
}

export default function Diff({ value, prevValue }: Props) {
    if (!value && !prevValue) {
        return <p className="text-diff text-print">&mdash;</p>;
    }

    const diff = diffWords(prevValue || '', value || '');
    const tokens: React.ReactNode[] = [];

    // @ts-ignore
    diff.forEach((token: DiffToken) => {
        let className = '';
        if (token.added) {
            className = 'is-added';
        } else if (token.removed) {
            className = 'is-removed';
        }

        const splitValue = token.value.split('\n');

        tokens.push(<span className={className}> {splitValue[0]} </span>);
        for (let i = 1; i < splitValue.length; i++) {
            tokens.push(<br />);
            tokens.push(<span className={className}> {splitValue[i]} </span>);
        }
    });

    // `text-print` is included to still make it look textbox-like,
    // but also inline all the diff content.
    return (
        <p className="text-diff text-print">
            {tokens.map((token) => token)}
        </p>
    );
}