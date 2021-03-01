
### Examples

```js
// For categorizer, try the following to test different bucketing:
// `type` - tighter list (everyone is clumped into one category)
// `attributes.lastName` - smaller number of categories, more results
// `attributes.department.name` - Many more categories, typically one result each
<AppSearch
    endpoint="https://orapps.osu.edu/api/v1/person"
    categorizer="attributes.college.name"
/>
```

An example of combining `AppSearch` and `Profile` within your primary navigation:


```js
import { MemoryRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Profile, Navbar } from '@ORIS/ui';

<MemoryRouter>
    <Navbar title="My Cool App">
        <NavLink to="/foo">Foo</NavLink>
        <NavLink to="/bar">Bar</NavLink>

        <AppSearch
            endpoint="https://orapps.osu.edu/api/v1/person"
            categorizer="attributes.college.name"
        />

        <Profile username="buckeye.1" />
    </Navbar>
</MemoryRouter>
```

### API Requirements

The backend API must be in standard JSON:API v1.0 format and accept a `q` query parameter with an arbitrary full text search string. Result links generated will be based on the resource's `links.homepage` URI. The `attributes.name` field is required and will be the displayed value for each result.

Results are bucketed into categories based on the `categorizer` prop. By default, this uses the `type` field of a JSON:API resource but it can be set to a custom field within each resource. For example, if you are returning all of the same type of resource from the search endpoint (e.g. People) you can use a different attribute within each resource to categorize them further into the results (such as their department or college).

Note that there are limits to how many categories and results you can return at once, and those will be detailed in Render Specifications.

Example API request and result:

```text
GET /api/research?q=computer HTTP/1.1
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json
```

```json
{
    "data": [
        {
            "type": "project",
            "id": "60012345",
            "attributes": {
                "name": "A Deep Dive into Computer Illiteracy in Zoomers"
            },
            "links": {
                "self": "https://example.com/api/project/60012345",
                "homepage": "/my-app/project/60012345"
            }
        },
        {
            "type": "project",
            "id": "60078944",
            "attributes": {
                "name": "Efficacy of Computer-Aided Sensory Aids"
            },
            "links": {
                "self": "https://example.com/api/project/60078944",
                "homepage": "/my-app/project/60078944"
            }
        },
        {
            "type": "department",
            "id": "10000",
            "attributes": {
                "name": "Computer Information Science"
            },
            "links": {
                "self": "https://example.com/api/dept/10000",
                "homepage": "/my-app/dept/10000"
            }
        }
    ]
}
```

In the above example, there would be two categories of results displayed: `Project` and `Department`.


### Render Specifications

Result entries are displayed as a balanced bucket list - where more buckets create less entries per-bucket.

Results are displayed in 2 columns sorted alphabetically (by bucket name), with a maximum of 10 lines per-column - including the bucket name headers themselves. If one bucket in a column has less results than the balancing limit, then other buckets in that column will show additional results until the total reaches 10 lines.

There is a maximum of 10 buckets that can be displayed at one time - where each bucket has a minimum of 1 result displayed.