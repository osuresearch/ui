import React from 'react';
import { Print as PrintCommon } from '../../internal/FormCommon/Utility/Print';

interface Props {
    value?: string;
}

export default function Print({ value }: Props) {
    if (!value) {
        return <p className="text-print">&mdash;</p>;
    }

    const strValue = '' + value;
    const tokens = [];
    const splitValue = strValue.split('\n');

    tokens.push(splitValue[0]);
    for (let i = 1; i < splitValue.length; i++) {
        tokens.push(<br />);
        tokens.push(splitValue[i]);
    }

    return (
        <PrintCommon>
            {tokens.map((token) => token)}
        </PrintCommon>
    );
};