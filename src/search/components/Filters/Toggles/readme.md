
If you are using TypeScript, you can supply an `enum` directly to options:

```tsx
enum DataClassification {
    S1 = 'Public (S1)',
    S2 = 'Internal (S2)',
    S3 = 'Private (S3)',
    S4 = 'Restricted (S4)',
}

<Filters.Toggles name="dataClassification" options={DataClassification} />
```

The enum `key` will be used for each filter and each checkbox labeled with the enum `value`.


### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';

const ID = 'demo-Toggles';

<SearchProvider id={ID}>
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
