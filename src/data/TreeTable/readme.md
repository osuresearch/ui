
### Basic Implementation
```jsx
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import * as data from './demo/demo.json';
const nodes = data.root;

<TreeTable value={nodes}>
    <Column field="name" header="Name" expander />
    <Column field="size" header="Size" />
    <Column field="type" header="Type" />
</TreeTable>
```

### Selection
```jsx
import React, { useState } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import * as data from './demo/demo.json';
const nodes = data.root;

const [selectedFiles, setSelectedFiles] = useState([]);

<TreeTable 
    value={nodes} 
    selectionMode="checkbox"
    selectionKeys={selectedFiles}
    onSelectionChange={(e) => setSelectedFiles(e.value)}
>
    <Column field="name" header="Name" expander sortable />
    <Column field="size" header="Size" sortable />
    <Column field="type" header="Type" sortable />
</TreeTable>
```