
### Examples

```jsx
<Search name="example-1" endpoint="https://orapps.osu.edu/api/v1/person" />
```

```jsx
const onChange = (e) => alert(
    `You selected ${JSON.stringify(e.target.value)} for ${e.target.name}`
);

const defaultValue = {
    key: '200275154',
    value: 'Chase McManning'
};

<Search
    name="example-2"
    endpoint="https://orapps.osu.edu/api/v1/person"
    onChange={onChange}
    defaultValue={defaultValue}
/>
```

The following search uses a custom renderer for displaying usernames alongside each result. This is recommended whenever you are dealing with looking up people, as multiple people in the university can have the same name.

```jsx
import { PersonSearchResult } from '@oris/ui';

<Search
    name="example-3"
    endpoint="https://orapps.osu.edu/api/v1/person"
    resultComponent={PersonSearchResult}
/>
```
