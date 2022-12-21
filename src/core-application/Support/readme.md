```js
import { Support } from "@osuresearch/ui";

<Support
    app="My App" /* Required */
    kbUrl="https://orhelp.osu.edu/support/my-app" /* Optional */
    meta={{my: "obj"}} /* Optional metadata */
    isFixed={false} /* Optional, controls if button is fixed to page bottom right (true) */
/>
```

### API Requirements

The Support component requires an API endpoint to send submitted support and feedback payloads. By default, the component assumes your endpoint is hosted at `{process.env.PUBLIC_URL}/api/support`, but you can override this by setting the `endpoint` prop to an alternative target.

The following payload is sent to the above endpoint:

```http
POST /api/support
Content-Type: application-json
```

```json
{
    "data": {
        "type": "support",
        "meta": {
            "Same data as the `meta` prop value"
        },
        "attributes": {
            "isFeedback": true,
            "location": "https://my.site/current/url",
            "message": "User's write-in message here"
        }
    }
}
```

The component expects a 200 or 201 response for a successful submission.

