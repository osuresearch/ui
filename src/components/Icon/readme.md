
### Examples

```jsx
<Icon name="user" />
```

For a full list of available icon names, see [Font Awesome 4.7.0 Icons](https://fontawesome.com/v4.7.0/icons/)

#### Animation

```jsx
<Icon name="spinner" spin={true} />
```

#### Circling the icon

```jsx
<Icon name="user" circled={true} />
```

### Accessibility

By default, an icon is hidden to screen readers. To add screen reader text, simply add a string as a child element.

```jsx
<Icon name="external-link">Link to an external website</Icon>
```