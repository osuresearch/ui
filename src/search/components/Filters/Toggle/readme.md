

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

const ID = 'demo-Toggle';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Toggle name="watched" title="Watched Items">
            Show Only Watched Items
        </Filters.Toggle>

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
