
### Examples

Assume an application exists with an endpoint to search awards:

```text static
GET https://my.app/api/award?q=scarlet
Accept: application/vnd.api+json
```

```json
{
    "meta": {
        "hits": 120
    },
    "data": [{
        "type": "award",
        "id": "AWD-10002511",
        "attributes": {
            "title": "A Study in Scarlet and Grey",
            "principalInvestigator": {
                "id": "200275154",
                "name": "McManning, Chase"
            },
            "sponsor": "The Ohio State University",
            "awarded": 850000
        },
        "links": {
            "self": "https://my.app/api/award/AWD-10009855"
        }
    }, {
        "type": "award",
        "id": "AWD-10002511",
        "attributes": {
            "title": "Incidence and Characteristics of Scarlet Fever",
            "principalInvestigator": {
                "id": "300248944",
                "name": "Duck Woong, Park"
            },
            "sponsor": "NSF",
            "awarded": 200000
        },
        "links": {
            "self": "https://my.app/api/award/AWD-10009855"
        }
    }]
}
```

Add your search endpoint without any query parameters as the first argument to the `JsonApi` search driver:

```jsx static
<SearchProvider id="awards" driver={JsonApi('https://my.app/api/award')}>
    {/* Your components for search terms and results here */}
</SearchProvider>
```

In a results rendering TypeScript component, you can then do the following:

```tsx static
type Award = {
    id: string
    type: string
    attributes: {
        title: string
        principalInvestigator: {
            id: string
            name: string
        }
        sponsor: string
        awarded: number
    }
    links: {
        self: string
    }
}

type AwardResults = {
    hits: number
    results: Award[]
}

function AwardResults() {
    const { results } = useSearchProvider<AwardResults>('awards');

    return (
        <ul>
        {results.results.map((award) =>
            <li key={award.id}>
                {award.attributes.title}
            </li>
        )}
        </ul>
    );
}
```
