
# Storybook Configuration Notes

- Actions are whitelisted via `preview.js:actions.argTypesRegex`. Since we expose event handler definitions from 3rd party dependencies (react-aria, react-types, etc) there's a massive performance drop for highly interactive components, like inputs and textareas.
- Every story is wrapped with a decorator in `preview.js` with `RUIProvider`. This receives the current theme set by Storybook and propagates it to component stories.
