
### Basic Implementation

Dialog is used as a container and visibility is managed with `visible` property where `onHide` event is required to update the visibility state.

```jsx
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from '@osuresearch/ui';

const [showDialog, setShowDialog] = useState(false);

<>
<Button onClick={() => setShowDialog(true)}>
    Show Dialog
</Button>

<Dialog
    header={<h5>Modal Title</h5>}
    footer={<>Your footer content here</>}
    visible={showDialog}
    onHide={() => setShowDialog(false)}
    style={{ width: '50vw' }}
    draggable={false}
    resizable={false}
>
    Your content goes here
</Dialog>
</>
```

#### Long Content
```jsx
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button, Icon } from '@osuresearch/ui';

const [showDialog, setShowDialog] = useState(false);

<>
<Button onClick={() => setShowDialog(true)}>
    Show Long Content
</Button>

<Dialog
    header={<h5>Header</h5>}
    footer={<>
        <Button theme="outline-secondary"><Icon name="times" /> No</Button>
        <Button theme="success"><Icon name="check" /> Yes</Button>
    </>}
    visible={showDialog}
    onHide={() => setShowDialog(false)}
    style={{ width: '50vw' }}
    draggable={false}
    resizable={false}
    blockScroll={true} // Removes the window scroll bar
>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
</Dialog>
</>
```

#### Responsive

Dialog width can be adjusted per screen size with the `breakpoints` option. In example below, default width is set to 50vw and below 961px, width would be 75vw and finally below 641px width becomes 100%. The value of `breakpoints` should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.

```jsx
import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from '@osuresearch/ui';

const [showDialog, setShowDialog] = useState(false);

<>
<Button onClick={() => setShowDialog(true)}>
    Show Responsive Dialog
</Button>

<Dialog
    header={<h5>Modal Title</h5>}
    footer={<>Your footer content here</>}
    visible={showDialog}
    onHide={() => setShowDialog(false)}
    style={{ width: '50vw' }}
    breakpoints={{'960px': '75vw', '640px': '100vw'}}
    draggable={false}
    resizable={false}
>
    Your content goes here
</Dialog>
</>
```