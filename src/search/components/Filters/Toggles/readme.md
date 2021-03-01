

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@ORIS/ui';
import Mock from '@ORIS/ui/search/drivers/Mock';

const ID = 'demo-Toggles';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Toggles name="dataClassification" title="Data Classification" options={{
            S1: 'Public (S1)',
            S2: 'Internal (S2)',
            S3: 'Private (S3)',
            S4: 'Restricted (S4)',
        }} />

        <hr/>
        <Filters.Active />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
