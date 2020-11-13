
```jsx
import * as data from './demo/demo.json';
const nodes = data.root;

<TreeTable value={nodes}>
    <TreeTable.Column field="name" header="Name" expander />
    <TreeTable.Column field="size" header="Size" />
    <TreeTable.Column field="type" header="Type" />
</TreeTable>
```