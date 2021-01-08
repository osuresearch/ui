
### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-Terms';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Terms title="Search By Keyword" />

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```

The terms input can also be ran in "live" mode to automatically update search terms as the user types. Be aware that depending on your backend implementation this may cause a major performance impact on your application.


```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-terms-live';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Terms title="Search by Keyword" live />

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
