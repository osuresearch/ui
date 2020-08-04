### Examples

#### Basic

```jsx
import { api } from '../../internal/FileExamples/api';

const submissionId = '12';
const submissionAttachments = api('dms', submissionId); // Just an example - use your app's internal api hook or fetch here.
const dmsLink = submissionAttachments.managementUrl;
const directories = submissionAttachments.directories;

<Files 
    showHeader
    dmsLink={dmsLink} 
    directories={directories} 
/>
```

#### Incorporating *Files* into a form
The Files component can also serve as file selector for forms. To do so, pass in the following:
* `selectedFiles` -- An array for/of file objects (can be empty)
* `onSelect` -- A callback function for when a checkbox is checked/unchecked (the argument is an updated `selectedFiles` array)
* `readOnly` (optional) -- Sets the checkboxes as readonly

```jsx
import { useState, useEffect } from 'react';
import { api } from '../../internal/FileExamples/api';

const submissionId = '12';

const [selectedFiles, setSelectedFiles] = useState(api('email', submissionId));

const submissionAttachments = api('dms', submissionId); // Just an example - use your app's internal api hook or fetch here.
const directories = submissionAttachments.directories;

<Files
    directories={directories}
    selectedFiles={selectedFiles}
    onSelect={setSelectedFiles}
/>
```

### API Requirements

#### DMS
The Files component requires an API endpoint to get the directories/files from the Document Management System. This endpoint should return a `directories` array for the component to render.

```text
GET /api/dms HTTP/1.1
Content-Type: application/json
```

The `directories` array must be structured as follows

```json
{
    "directories": [
        {
        "name": "Submitted",
        "files": [
            {
                "id": "5557323",
                "name": "02 - Protocol_Amendment_I4V-MC-JAHZ_07Dec2018.pdf",
                "modifiedDate": "2020-06-18T20:28:33-04:00",
                "size": 11522911,
                "section": "FDA Device Approved Labeling",
                "link": "https://osu.link.example/u2na329123ja"
              },
              // additional files...
        ]
        },
        // additional directories...
    ]
}
```

#### Selected Files
The Files component is completely agnostic to the endpoint for getting/setting selected files. The only requirement is that selected files are objects that contain an id, name, and link.
```text
GET /api/exampleCorrespondenceEndpoint/12 HTTP/1.1
Content-Type: application/json
```
```json
{
    "attachments": [
        {
            "id": "5473558",
            "name": "ICF infrom consent individual face to face interview  020417 (2).doc",
            "modifiedDate": "2020-06-08T15:07:07-04:00",
            "size": 0,
            "section": "Consent Process",
            "link": "https://osu.link.example/2a63hasdy42"
        },
        // etc ...
    ]
}
```