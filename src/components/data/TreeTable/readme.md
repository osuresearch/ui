
```jsx
import * as data from './demo/demo.json';
const nodes = data.root;

<TreeTable value={nodes}>
    <TreeTable.Column field="name" header="Name" expander />
    <TreeTable.Column field="size" header="Size" />
    <TreeTable.Column field="type" header="Type" />
</TreeTable>
```

```jsx
import React, { useState } from 'react';
import * as data from './demo/demo.json';
const nodes = data.root;

const [selectedFiles, setSelectedFiles] = useState([]);

<TreeTable 
    value={nodes} 
    selectionMode="checkbox"
    selectionKeys={selectedFiles}
    onSelectionChange={(e) => setSelectedFiles(e.value)}
>
    <TreeTable.Column field="name" header="Name" expander sortable />
    <TreeTable.Column field="size" header="Size" sortable />
    <TreeTable.Column field="type" header="Type" sortable />
</TreeTable>
```