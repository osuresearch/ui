import React, { useContext } from 'react';
import ThatOtherSearch from '../../components/Search';

import { TextContext } from '.';
import { Nullable } from './etc';

export type SearchProps = { 
    endpoint?: string
}

// Defined here because our old Search component isn't in TypeScript :(
type SearchPair = {
    key: string | null
    value: string
}

/**
 * Convert a `key|name` string to a SearchPair for the old Search component
 */
function toSearchPair(value: Nullable<string>): SearchPair | undefined {
    if (!value) return undefined;

    const parts = value.split('|');
    return {
        key: parts[0],
        value: parts[1]
    }
}

/**
 * Convert a SearchPair from the old Search component to a `key|name` string
 */
function fromSearchPair(pair: SearchPair): Nullable<string> {
    if (!pair.key) return null;
        
    return `${pair.key}|${pair.value}`;
}

/**
 * Jams a standard ORIS/UI search result pair into a single  
 * string value bind in the form `key|name`
 */
export const Search: React.FC<SearchProps> = ({ 
    endpoint = 'https://orapps.osu.edu/api/v1/person'
}) => {
    const { bind } = useContext(TextContext);

    const onChange = (e: any) => {
        bind.value = fromSearchPair(e.target.value);
    }

    return (
        <ThatOtherSearch
            name={bind.name}
            endpoint={endpoint}
            onChange={onChange}
            defaultValue={toSearchPair(bind.value)}
        />
    );
}
