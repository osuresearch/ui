
### Examples

```jsx
    <AppAlert endpoint="/my-app/api/alerts" />
```

### API Requirements

Example API request and result:

```text
GET /api/alert HTTP/1.1
Content-Type: application/json
```

```json
{
    "data": "Your alert message here"
}
```

Only plain text is allowed in the alert message. Returning a payload of `{ "data": null }` will hide the alert banner.

The sentence about contacting the help desk is built into the component and cannot be modified by the alert.
