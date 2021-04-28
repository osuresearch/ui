
### Examples

Declare your GraphQL query with the required variables and pass it in as an argument to the driver when declaring your `<Search>` component.

```tsx static
const SEARCH_AWARDS = gql`
    query SearchAwards(
        $terms: String!,
        $filters: SearchFilters,
        $limit: Int,
        $offset: Int
    ) {
        searchAwards(terms: $terms, filters: $filters, limit: $limit, offset: $offset) {
            hits
            results {
                id
                title
                principalInvestigator {
                    id
                    name
                }
                sponsor
                awarded
            }
        }
    }
`;

type AwardSearchResponse = {
    hits: number
    results: Award[]
}

function AwardResults() {
    const { response } = useSearchProvider<AwardSearchResponse>('Awards');

    return (
        <ul>
        {response.results.map((award) =>
            <li key={award.id}>
                {award.attributes.title}
            </li>
        )}
        </ul>
    );
}
<SearchProvider id="Awards" driver={Apollo(SEARCH_AWARDS)}>
    <AwardResults />
</SearchProvider>
```
