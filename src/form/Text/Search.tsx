import React, { useContext } from 'react';
import ThatOtherSearch from '../../components/Search';

import { TextContext } from '.';

export type SearchProps = { 
    endpoint?: string
}

export const Search: React.FC<SearchProps> = ({ 
    endpoint = 'https://orapps.osu.edu/api/v1/person'
}) => {
    const { bind } = useContext(TextContext);

    // This is a REAAALLY dumb example to jam search results into
    // a single string field. In reality, search should be its own  
    // top level form field since it expects a different value shape.
    let defaultValue = undefined;
    if (bind.value) {
        const parts = bind.value.split('|');
        defaultValue = {
            key: parts[0],
            value: parts[1]
        }
    };
    
    const onChange = (e: any) => {
        const pair = e.target.value;

        if (!pair.key) {
            bind.value = null;
        } else {
            bind.value = `${pair.key}|${pair.value}`;
        }
    }

    return (
        <ThatOtherSearch
            name={bind.name}
            endpoint={endpoint}
            onChange={onChange}
            defaultValue={defaultValue}
        />
    );
}
