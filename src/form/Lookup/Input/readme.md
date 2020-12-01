
### Examples

```jsx
import { Form, Lookup } from '@oris/ui';

import { SearchProvider, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const onChange = (newValue, oldValue) => {
    alert(JSON.stringify(newValue));
}

<Form>
    <SearchProvider id="mock" driver={Mock()}>
        <Lookup id="lookup-1" provider="mock" onChange={onChange}>
            <Lookup.Label>
                Search for a person
            </Lookup.Label>
            
            <Lookup.Input resultRenderer={
                (hit) => <span>
                    {hit.name}&nbsp;
                    <small className="text-muted">
                        ({hit.username})
                    </small>
                </span>
            } />

            <Lookup.Help>
                Help stuff go here
            </Lookup.Help>

            <Lookup.Error />
        </Lookup>
        <SearchDebugger provider="mock" />
    </SearchProvider>
</Form>
```

Other examples to add/support:
* ReadOnly
* Diff
* Bind 

### Submitting Results with a Form

TODO: Content here. Some notes:
* It's up to the dev to extract what they need from the selected result (e.g. searching a Person and extracting their OSU ID). This either takes form of a state hook called from the onChange handler or ... ?
* Maybe internal support for dumping something from the selection into a hidden input? It'll probably be a common use case. Could also pass down a `ref` onto that hidden input.
* Need some help here on submitting full JSON payloads as GraphQL input types vs extracting data for submitting to other lesser APIs. 
* Add examples on integrating with RHF

### Using a Local Driver

Instead of using an external `SearchProvider` - you can provide a `SearchDriver` directly to the `driver` prop. 

This is typically sufficient for simple use cases - e.g. if you do not need to specify filtering and sorting rules. 

```jsx
import { Form, Lookup } from '@oris/ui';

import Mock from '@oris/ui/search/drivers/Mock';

<Form>
    <Lookup id="lookup-2" driver={Mock()}>
        <Lookup.Label>
            Search for a person
        </Lookup.Label>
        
        <Lookup.Input resultRenderer={
            (hit) => <span>
                {hit.name}&nbsp;
                <small className="text-muted">
                    ({hit.username})
                </small>
            </span>
        } />

        <Lookup.Help>
            Help stuff go here
        </Lookup.Help>

        <Lookup.Error />
    </Lookup>
</Form>
```

### Combining with Search Filters

Like any other component that uses search providers - you can combine filter and sort components to control the results that come back from the lookup. 

```jsx
import { Form, Lookup } from '@oris/ui';

import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

<Form>
    <SearchProvider id="mock-2" driver={Mock()}>
        <Lookup id="lookup-3" provider="mock-2">
            <Lookup.Label>
                Search for a person by state:
            </Lookup.Label>

            <Filters provider="mock-2">
                <Filters.AnyOf name="state" options={[
                    'Kansas',
                    'Arizona',
                    'California',
                    'Alaska',
                ]} />
            </Filters>
            
            <Lookup.Input resultRenderer={
                (hit) => <span>
                    {hit.name}&nbsp;
                    <small className="text-muted">
                        ({hit.state})
                    </small>
                </span>
            } />

            <Lookup.Error />
        </Lookup>
        <SearchDebugger provider="mock-2" />
    </SearchProvider>
</Form>
```


### GraphQL Driver Support

The following is an example of how to structure your GraphQL query and types:

```gql
type Query {
    yourQueryName(
        terms: String, 
        filters: SearchFilters
    ): SearchResponse
}

type SearchResponse {
    hits: Int
    response: [YourResultType!]!
}
```

Replace `yourQueryName` with whatever you like (e.g. searchSponsors, people, etc). 

User input to the component will be passed to the `term` input of your query.

The `SearchFilters` type is built into ORIS/GraphQL to work with the suite of search filter components provided in this package. 

The `YourResultType` returned in the response may contain whatever you like, this is on a per-application basis. For example, a person search may look like:

```gql
type PersonSearchResult {
    osuid: String!
    name: String!
    username: String!
}
```

Whereas an award search may be:

```gql
type AwardSearchResult {
    award: String!
    title: String!
    principalInvestigator: Person!
}
```

You can expand the query with additional inputs, as long as they are constants in the query pasesd to the search driver. 

For example, if your query requires a result limit argument:

```tsx static
const SEARCH_PEOPLE = gql`{
    query ($terms: String, $filters: SearchFilters) {
        people(terms: $terms, filters: $filters, maxResults: 10) {
            osuid
            name
        }
    }
}`

function PersonLookup() {
    return (
        <Lookup id="people" driver={GraphQL(SEARCH_PEOPLE)}>
            <Lookup.Label>Find a person</Lookup.Label>
            <Lookup.Input resultRenderer={(p) => p.name} />
        </Lookup>
    );
}
```


### JSON:API Driver Support

Not yet supported.


### Custom Driver Support

Lookup expects the `results` object returned by `useSearch` to adhere to the following TypeScript type:

```ts static
type SearchResult = {
    hits: number
    results: Array<{ [key: string]: unknown }>
}
```

Internally it calls `setTerms` when the user types - throttled to some maximum update speed. It would be up to your driver to submit the updated terms to your API and assign the above `SearchResult` type back into `results`. 

**Outside of the above specifications - no additional support is provided for custom drivers.**
