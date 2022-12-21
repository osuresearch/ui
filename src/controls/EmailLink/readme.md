
### Examples

```jsx
<EmailLink to="mcmanning.1@osu.edu" /> |
<EmailLink to="mcmanning.1@osu.edu">Chase</EmailLink>
```


```jsx
const body = `
Hello ORIS Developers,

I have question about the @osuresearch/ui styleguide:
`;

<EmailLink
    to={['mcmanning.1@osu.edu', 'coplin.7@osu.edu']}
    cc={['moore.4521@osu.edu', 'santos.134@osu.edu', 'mayo.162@osu.edu']}
    bcc="ray.30@osu.edu"
    subject="@osuresearch/ui Styleguide Question"
    body={body}
>
    Ask the developers a question
</EmailLink>
```
