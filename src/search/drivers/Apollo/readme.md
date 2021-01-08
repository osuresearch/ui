
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
    const { results } = useSearchProvider('Tools');

    return (
        <div>
            {results && results.map((hit) => {
                <div>Your hit data here</div>
            })}
        </div>
    );
}

<SearchProvider id="Tools" driver={Apollo(SEARCH_TOOLS)}>
    <MySearchResultsComponent />
</SearchProvider>
```
