
#### Examples

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

ReadOnly

Diff

Bind 

### Local Driver Test

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

### Filters Test


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