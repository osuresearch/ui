

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';
import Mock from '@oris/ui/search/drivers/Mock';

const ID = 'demo-Toggles';

<SearchProvider id={ID} driver={Mock()}>
    <Filters provider={ID}>
        <Filters.Toggles name="dataClassification" options={{
            S1: 'Public (S1)',
            S2: 'Internal (S2)',
            S3: 'Private (S3)',
            S4: 'Restricted (S4)',
        }} />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
