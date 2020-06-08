### Examples

#### Basic

```jsx
import { api } from '../../internal/FileExamples/api';

const submissionId = '12';
const body = api('dms', submissionId); // Just an example - use your app's internal api hook or fetch here.

<Files header body={body} />
```

#### Incorporating *Files* into a form
The Files component can also serve as file selector for forms. To do so, pass in the following:
* `selectedFiles` -- An array for/of file objects (can be empty)
* `onSelect` -- A callback function for when a checkbox is checked/unchecked (the argument is an updated `selectedFiles` array)
* `formId` -- The ID of the form in which this component is being used
* `readOnly` (optional) -- Sets the checkboxes as readonly

```jsx
import { useState, useEffect } from 'react';
import { api } from '../../internal/FileExamples/api';

const [selectedFiles, setSelectedFiles] = useState([]);

const submissionId = '12';

const body = api('dms', submissionId); // Just an example - use your app's internal api hook or fetch here.

const attachments = api('attachments', submissionId);
useEffect(() => {
    setSelectedFiles(attachments.data.attributes.files);
}, [attachments]);

<Files
    body={body}
    selectedFiles={selectedFiles}
    onSelect={setSelectedFiles}
    formId='correspondence-form' // Always include the form ID when using attachments
/>
```

### API Requirements

#### DMS
The Files component requires an API endpoint to get the directories/files from the Document Management System. The body of the response is passed into the Files component via `body` to be rendered.

```text
GET /api/dms HTTP/1.1
Content-Type: application/json
```

The response body must be structured as follows:

```json
{
    "jsonapi": {
        "version": "1.0"
    },
    "data": {
        "attributes": {
            "directory": {
                "Submitted": [ // Directory
                    {
                        "id": "1",
                        "filename": "ltricies mauris ut tellus cursus.txt",
                        "section": "Summary", // Optional
                        "uploaded": "2019-11-15T19:04:42-0500", // Optional
                        "size": "1.2 KB", // Optional
                        "link": "#"
                    },
                    // additional files...
                ],
                // additional directories...
            }
        },
        "links": {  
            "dms": "#" // Optional, will appear as an external link in header
        }
    }
}
```

#### Selected Files
The Files component is completely agnostic to the endpoint for getting/setting selected files. The only requirement is that selected files are an array of file objects.
```text
GET /api/exampleCorrespondenceEndpoint/12 HTTP/1.1
Content-Type: application/json
```
```json
{
    "jsonapi": {
        "version": "1.0"
    },
    "data": {
        "attributes": {
            "id": "12",
            "subject": "Your submission was approved",
            "to": "buckeye.1@osu.edu",
            "from": "smith.401@osu.edu",
            "cc": "hawk.99@osu.edu, paul.615@osu.edu",
            "content": "To whom it may concern, ...",
            "files": [
                {
                    "id": "1",
                    "filename": "ltricies mauris ut tellus cursus.txt",
                    "section": "Summary",
                    "uploaded": "2019-11-15T19:04:42-0500",
                    "size": "1.2 KB",
                    "link": "#"
                },
                // etc...
            ]            
        }
    }
}
```