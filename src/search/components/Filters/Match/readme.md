
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

const ID = 'demo-Match';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Match name="sponsor" prefix="Sponsor" title="Sponsor" />

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
