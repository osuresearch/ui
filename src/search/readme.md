
Docs need:

- `useSearch` hook usage
- `SearchFilters` data structure usage?
- just typical driver usage

```jsx static
import { SearchProvider, Filters, Search, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

function PersonSearchFilters() {
    return (
        <Filters provider="demo">
            <Filters.Terms />

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
function PersonResultCard({ result }) {
    return (
        <div className="card">
            <div className="card-body" style={{ display: 'flex' }}>
                <img src={result.avatar} alt="Avatar" style={{ width: 100, height: 100 }} />
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
        </div>
    );
}

function PersonSearchResults() {
    return (
        <Search provider="demo" driver={Mock()}>
            {/* You can have multiple filter groups attached to the same provider */}
            <Filters provider="demo">
                <Filters.Pills />
            </Filters>

            <Search.Empty>
                No one found matching your search
            </Search.Empty>

            <Search.Error>
                An error occurred
            </Search.Error>

            <Search.Results>
                <Search.Results.Mapper>
                    <PersonResultCard />
                </Search.Results.Mapper>
            </Search.Results>
        </Search>
    );
}

<SearchProvider id="demo">
    <div className="row">
        <div className="col-3">
            <PersonSearchFilters />
        </div>
        <div className="col-9">
            <PersonSearchResults />
            <SearchDebugger provider="demo" />
        </div>
    </div>
</SearchProvider>
```
