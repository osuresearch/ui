import { gql } from '@apollo/client';
import React from 'react';
import { Search } from '.';
import Filters from './components/Filters';
import ToolCard from '../../Search/ToolCard';
import SearchProvider from './components/SearchProvider';
import { GraphQL } from './drivers';


const SEARCH_TOOLS = gql`
query SearchTools($terms: String!, $filters: SearchFilters!) {
    tools(terms: $terms, filters: $filters) {
        rank
        id
        name
        description
        category
        platform
        screenshots {
            thumbnail
        }
    }
}
`;

export default function DemoUsage() {
    return (
        <SearchProvider id="foo">

            <Filters id="foo">
                <Filters.Group title="First Group">
                    {/* Options really should support KV pairs since 
                    the stored value may not match human-readable */}
                    <Filters.AnyOf name='myFieldName' options={['Fizz', 'Buzz']} />
                </Filters.Group>
            </Filters>

            <Search id="foo" driver={GraphQL(SEARCH_TOOLS)}>
                <Search.Results resultRenderer={ToolCard} />

                <Search.Empty>
                    No results
                </Search.Empty>

                <Search.Error>
                    Something bad happened!
                </Search.Error>
            </Search>
        </SearchProvider>
    );
}
