
```jsx
import { SearchProvider, Filters, Paginator, SearchDebugger, useSearchProvider } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

function PersonSearchFilters() {
    return (
        <Filters provider="demo">
            <Filters.Terms title="Search by Keyword" />

            <Filters.Group title="State" open>
                <Filters.AnyOf name="state" options={[
                    'Kansas',
                    'Arizona',
                    'California',
                    'Alaska',
                    'Texas',
                ]} />
            </Filters.Group>

            <Filters.Group title="Age Group">
                {/* In lieu of native range support, this is doing a comma-divided key */}
                <Filters.OneOf name="ageRange" options={{
                    '0,24': '< 25',
                    '25,44': '25 to 44',
                    '45,64': '45 to 64',
                    '65,1000': '65+'
                }} />
            </Filters.Group>

            <Filters.Group title="Email Domain">
                <Filters.OneOf name="emailDomain" options={{
                    'hotmail.com': '@hotmail.com',
                    'yahoo.com': '@yahoo.com',
                    'gmail.com': '@gmail.com',
                }} />
                <Filters.Match
                    prefix="Custom Domain"
                    name="otherEmailDomain"
                    title="Other Domain"
                    placeholder="Other Domain"
                />
            </Filters.Group>
        </Filters>
    );
}

/**
 * Component that renders a search result.
 * This is up to you to create for your application.
 */
function PersonResultCard(result) {
    return (
        <li className="card" key={`search-result-${result.name}`}>
            <div className="card-body" style={{ display: 'flex' }}>
                {result.avatar}
                <div style={{ flex: '1 0 auto', margin: '0 1rem' }}>
                    <strong>{result.name}</strong>
                    <div>{result.title}</div>
                    <p style={{ margin: 0 }}>
                        {result.address}<br/>
                        {result.city}, {result.state} {result.zip}
                    </p>
                </div>
                <div>
                    <a href="#">{result.email}</a><br/>
                    <a href="#">{result.phone}</a>
                </div>
            </div>
        </li>
    );
}

function PersonSearchResults() {
    const { results, searching, error } = useSearchProvider('demo');

    // If there are no results from the search, you will want to show a
    // helpful message to the end user. The check for "don't have results" is
    // entirely up to you - as this will depend on the shape of your data
    // coming back from the backend.
    const hasNoHits = !searching && !error && results && results.hits === 0;

    return (
        <>
            {/* You can have multiple filter groups attached to the same provider */}
            <Filters provider="demo">
                <Filters.Active />
            </Filters>

            {results &&
                <div className="sr-only" role="status">
                    {results.results.length} results found
                </div>
            }

            {/* If there's an error - show a helpful error message */}
            {error &&
                <p role="status">
                    An error has occurred. Tips on how to fix this would go here.
                    (e.g. refresh the page, contact support, etc)
                </p>
            }

            {/* If there are no hits - show a helpful empty message */}
            {hasNoHits &&
                <p role="status">
                    No one found matching your search terms and filters.
                    Tips on how to resolve this would go here (narrow terms,
                    add a new record, etc. Based on your use case)
                </p>
            }

            {/* If we have results to show - render a card per result.
                This is entirely up to you and your app's needs -
                show cards, swim lanes, a table, calendar view, etc.
            */}
            {results &&
                <ul className="list-unstyled">
                    {results.results.map(PersonResultCard)}
                </ul>
            }
        </>
    );
}

<SearchProvider id="demo" driver={Mock()}>
    <div className="row">
        <div className="col-3">
            <PersonSearchFilters />
        </div>
        <div className="col-9">
            <PersonSearchResults />
            <Paginator provider="demo" />
            <SearchDebugger provider="demo" />
        </div>
    </div>
</SearchProvider>
```
