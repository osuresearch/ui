### Examples

#### Basic Usage
```jsx
import { useState } from 'react';
import { Avatar, Button } from '@ORIS/ui';
import { Skeleton } from 'primereact/skeleton';

const [loading, setLoading] = useState(true);

const Loading = () => (
    <div className="d-flex align-items-center mb-2">
        <Skeleton shape="circle" size="4rem" className="mr-2" />
        <div style={{ flex: '1' }}>
            <Skeleton width="100px" className="mb-2" />
            <Skeleton width="75px" />
        </div>
    </div>
);

<>
<LazyLoaded 
    loading={loading}
    placeholder={<Loading />}
>
    <div className="d-flex align-items-center">
        <div className="mr-2">
            <Avatar name="Chase" username="mcmanning.1" size={64} />
        </div>
        
        <div style={{ flex: '1' }}>
            <div><strong>Chase McManning</strong></div>
            <div>Fun guy</div>
        </div>
    </div>
</LazyLoaded>

<Button 
    type="button"
    onClick={() => setLoading(!loading)}
>
    Toggle Loading State
</Button>
<p>(The 1 second delay when loading is complete is by design)</p>
</>
```