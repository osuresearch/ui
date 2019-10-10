
### Examples

```jsx
import { TabItem, Badge } from '@oris/ui';

<TabList>
    <TabItem onClick={() => alert('One')}>One</TabItem>
    <TabItem onClick={() => alert('Two')} active={true}>Two</TabItem>
    <TabItem onClick={() => alert('Three')}>Three <Badge theme="info">3</Badge></TabItem>
</TabList>
```

Example of handling large tab lists

```jsx
import TabItem from '../TabItem';

// This example will activate any clicked item, so you can
// see what the active state looks like while overflowing
const onClick = (i) => () => setState({ selected: i });
const isActive = (i) => state.selected == i;

<TabList>
    <TabItem onClick={onClick(0)} active={isActive(0)}>Ohio State Behavioral IRB</TabItem>
    <TabItem onClick={onClick(1)} active={isActive(1)}>Ohio State Biomedical IRB</TabItem>
    <TabItem onClick={onClick(2)} active={isActive(2)}>Ohio State Cancer IRB</TabItem>
    <TabItem onClick={onClick(3)} active={isActive(3)}>National Cancer Institute Central IRB (CIRB)</TabItem>
    <TabItem onClick={onClick(4)} active={isActive(4)}>Nationwide Children's Hospital IRB</TabItem>
    <TabItem onClick={onClick(5)} active={isActive(5)}>Ohio CTSA Consortium</TabItem>
    <TabItem onClick={onClick(6)} active={isActive(6)}>Other External IRB</TabItem>
    <TabItem onClick={onClick(7)} active={isActive(7)}>Quorum IRB</TabItem>
    <TabItem onClick={onClick(8)} active={isActive(8)}>Western IRB (WIRB)</TabItem>
</TabList>
```

Example of a vertical layout. For a vertical layout, tabs are never collapsed into a "More" dropdown.

```jsx
import TabItem from '../TabItem';

<TabList vertical={true}>
    <TabItem onClick={() => alert('One')}>One</TabItem>
    <TabItem onClick={() => alert('Two')} active={true}>Two</TabItem>
    <TabItem onClick={() => alert('Three')}>Three</TabItem>
</TabList>
```
