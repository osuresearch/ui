
#### Examples

```jsx
import { Form, Lookup } from '@oris/ui';

import { SearchProvider, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const onChange = (newValue, oldValue) => {
    alert(JSON.stringify(newValue));
}

<Form>
    <SearchProvider id="lookup-provider" driver={Mock()}>
        <Lookup provider="lookup-provider" onChange={onChange}>
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
        <SearchDebugger provider="lookup-provider" />
    </SearchProvider>
</Form>
```

ReadOnly

Diff

Bind 

