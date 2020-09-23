
### Examples

Declare your GraphQL query with the required variables and pass it in as an argument to the driver when declaring your `<Search>` component. 

```tsx static
const SEARCH_TOOLS = gql`
    query SearchTools($terms: String!, $filters: SearchFilters, $sort: SearchSorting) {
        tools(terms: $terms, filters: $filters, sort: $sort) {
            id
            rank
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

function MySearchResultsComponent() {
    return (
        <Search id="Tools" driver={GraphQL(SEARCH_TOOLS)}>
            <Search.Error>
                Something bad happened!
            </Search.Error>

            <Search.Empty>
                No results found
            </Search.Empty>
            
            <Search.Results resultRenderer={ToolCard} />
        </Search>
    );
}
```
