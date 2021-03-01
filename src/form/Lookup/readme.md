
### Examples

#### Basic implementation

Provide the same type of driver you would for `SearchProvider`. See driver support section below for what's needed by your search driver before using this component.

```jsx
import Mock from '@ORIS/ui/search/drivers/Mock';

<Lookup id="example-lookup-basic" driver={Mock()}>
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
        This is searching mock data.
        Replace the mock with your own GQL or JSON:API data source.
    </Lookup.Help>

    <Lookup.Error />
</Lookup>
```

#### Basic Implementation with React Hook Form

```jsx
import { useForm, Controller } from 'react-hook-form';
import Mock from '@ORIS/ui/search/drivers/Mock';

const { control, errors, watch } = useForm({ mode: "onBlur" });

<>
<Lookup
    id="rhf-lookup"
    driver={Mock()}
    error={errors["rhf-lookup"] && "Please select a person"}
    required
>
    <Lookup.Label>
        Search for a person
    </Lookup.Label>

    <Controller
        name="rhf-lookup"
        control={control}
        rules={{ required: true }}
        render={props =>
            <Lookup.Input {...props} resultRenderer={
                (hit) => <span>
                    {hit.name}&nbsp;
                    <small className="text-muted">
                        ({hit.username})
                    </small>
                </span>
            } />
        }
    />

    <Lookup.Help>
        This is searching mock data.
        Replace the mock with your own GQL or JSON:API data source.
    </Lookup.Help>

    <Lookup.Error />
</Lookup>

<hr/>
Value: {JSON.stringify(watch('rhf-lookup'))}
</>
```

#### Default Value
```jsx
import Mock from '@ORIS/ui/search/drivers/Mock';

const defaultValue = {"id":89693,"name":"Sigurd Dickens","age":34,"username":"Brenden.Vandervort71","address":"Welch Island","city":"South Odessa","state":"West Virginia","zip":"83794","company":"Aufderhar, Ferry and Welch","bs":"utilize one-to-one interfaces","email":"Sage.McCullough@yahoo.com","phone":"864-230-0669 x9699","about":"Voluptates voluptatem laboriosam sequi molestias suscipit provident sint sunt. Aspernatur quis incidunt reiciendis. Vel deleniti aspernatur omnis ducimus. Dicta iusto omnis accusamus magni sit ratione vel. Eos nam atque adipisci voluptatibus id et quaerat rerum dolor.","title":"National Brand Facilitator","avatar":{"type":"div","key":null,"ref":null,"props":{"style":{"backgroundColor":"#2ecc71","width":80,"height":80,"font":"40px Arial","color":"#fff","textAlign":"center","lineHeight":"80px","borderRadius":"50%"},"children":"SD"},"_owner":null,"_store":{}}};

<Lookup id="example-lookup-default-value" driver={Mock()}>
    <Lookup.Label>
        Search for a person
    </Lookup.Label>

    <Lookup.Input
        resultRenderer={
            (hit) => <span>
                {hit.name}&nbsp;
                <small className="text-muted">
                    ({hit.username})
                </small>
            </span>
        }
        defaultValue={defaultValue}
    />

    <Lookup.Help>
        This is searching mock data.
        Replace the mock with your own GQL or JSON:API data source.
    </Lookup.Help>

    <Lookup.Error />
</Lookup>
```

#### Change Events

```jsx
import { SearchProvider, SearchDebugger } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

const onChange = (newValue, oldValue) => {
    alert(`Lookup value changed from ${JSON.stringify(oldValue)} to ${JSON.stringify(newValue)}`);
    console.debug('Lookup changed: ', oldValue, newValue);
}

<>
    <Lookup id="example-lookup-onchange" driver={Mock()} onChange={onChange}>
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
            This is searching mock data.
            Replace the mock with your own GQL or JSON:API data source.
        </Lookup.Help>

        <Lookup.Error />
    </Lookup>
</>
```

### Using an External SearchProvider

To support `<Filters>` and other external search tooling you can provide a `provider` prop to Lookup instead of the driver directly.

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

const PROVIDER = 'example-lookup-with-filtering';

<SearchProvider id={PROVIDER} driver={Mock()}>
    <Lookup id="lookup-3" provider={PROVIDER}>
        <Lookup.Label>
            Search for a person by state:
        </Lookup.Label>

        <Filters provider={PROVIDER}>
            <Filters.AnyOf name="state" title="State" options={[
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

        <Lookup.Help>
            This is searching mock data.
            Replace the mock with your own GQL or JSON:API data source.
        </Lookup.Help>

        <Lookup.Error />
    </Lookup>
    <SearchDebugger provider={PROVIDER} />
</SearchProvider>
```

### Searching Against `/api/v1/person`

The public JSON:API endpoint https://orapps.osu.edu/api/v1/person can be searched against using the `JsonApi` search driver.

```jsx
import JsonApi from '@ORIS/ui/search/drivers/JsonApi';

<Lookup id="example-json-api-person" driver={JsonApi('https://orapps.osu.edu/api/v1/person')}>
    <Lookup.Label>
        Search for a person
    </Lookup.Label>

    <Lookup.Input resultRenderer={
        (hit) => <span>
            {hit.attributes.name}&nbsp;
            <small className="text-muted">
                ({hit.attributes.username})
            </small>
        </span>
    } />

    <Lookup.Error />
</Lookup>
```

### Clear Lookup Input
```jsx
import { useState } from 'react';
import JsonApi from '@ORIS/ui/search/drivers/JsonApi';
import { Button } from '@ORIS/ui';

const [value, setValue] = useState();

<>
<Lookup id="example-clear-lookup" driver={JsonApi('https://orapps.osu.edu/api/v1/person')}>
    <Lookup.Label>
        Search for a person
    </Lookup.Label>

    <Lookup.Input
        value={value}
        onChange={v => setValue(v)}
        resultRenderer={
            (hit) => <span>
                {hit.attributes.name}&nbsp;
                <small className="text-muted">
                    ({hit.attributes.username})
                </small>
            </span>
        }
    />

    <Lookup.Error />
</Lookup>

<Button onClick={() => setValue()}>Clear Lookup</Button>
</>
```

### Apollo Driver Support (GraphQL)

The following is an example of how to structure your GraphQL query and types:

```graphql
type Query {
    yourQueryName(
        terms: String!,
        filters: SearchFilters
    ): YourSearchResponse
}

type YourSearchResponse {
    hits: Int
    results: [YourResultType!]!
}
```

Replace `yourQueryName` with whatever you like (e.g. searchSponsors, people, etc).

User input to the component will be passed to the `terms` input of your query.

The `SearchFilters` type is built into [ORIS/GraphQL](https://code.osu.edu/ORIS/graphql) to work with the suite of search filter components provided in this package and is optional. Only include if your backend supports it.

The `YourResultType` returned in the response may contain whatever you like, this is on a per-application basis. For example, a person search may look like:

```graphql
type PersonSearchResult {
    osuid: ID!
    name: String!
    username: String!
}
```

Whereas an award search may be:

```graphql
type AwardSearchResult {
    award: ID!
    title: String!
    principalInvestigator: Person!
}
```

You can expand the query with additional inputs, as long as they are constants in the query passed to the search driver.

For example, if your query requires an input to designate the max results returned:

```tsx static
const SEARCH_PEOPLE = gql`{
    query ($terms: String, $filters: SearchFilters) {
        people(terms: $terms, filters: $filters, maxResults: 10) {
            hits
            results {
                osuid
                name
            }
        }
    }
}`

function PersonLookup() {
    return (
        <Lookup id="people" driver={Apollo(SEARCH_PEOPLE)}>
            <Lookup.Label>Find a person</Lookup.Label>
            <Lookup.Input resultRenderer={(p) => p.name} />
        </Lookup>
    );
}
```


### JSON:API Driver Support

Any JSON:API resources returned in the `data` array will be provided to the `resultRenderer` directly. User input will be passed as the `q` query parameter.

A top level `meta.hits` field is **required** to be returned by the backend.

For more information, see the example in the [JsonApi Driver docs](#/Search%20Components/Drivers?id=jsonapi)


### Custom Driver Support

Lookup expects the `results` object returned by `useSearchProvider` to adhere to the following TypeScript type:

```ts static
type SearchResponse = {
    hits: number
    results: Array<{ [key: string]: unknown }>
}
```

Internally it calls `setTerms` when the user types - throttled to some maximum update speed. It would be up to your driver to submit the updated terms to your API and assign the above `SearchResponse` type back into `results`.

**Outside of the above specifications - no additional support is provided for custom drivers.**
