
If you are using TypeScript, you can supply an `enum` directly to options:

```tsx
enum DataClassification {
    S1 = 'Public (S1)',
    S2 = 'Internal (S2)',
    S3 = 'Private (S3)',
    S4 = 'Restricted (S4)',
}

<Filters.OneOf name="dataClassification" options={DataClassification} />
```

The enum `key` will be used in the filter and each radio will be labeled with the enum `value`.

### Examples

```jsx
import { SearchProvider, Filters, SearchDebugger } from '@oris/ui/search';

const ID = 'demo-OneOf';

<SearchProvider id={ID}>
    <Filters provider={ID}>
        <Filters.OneOf name="dataClassification" options={{
            S1: 'Public (S1)',
            S2: 'Internal (S2)',
            S3: 'Private (S3)',
            S4: 'Restricted (S4)',
        }} />
    </Filters>

    <SearchDebugger provider={ID} />
</SearchProvider>
```
