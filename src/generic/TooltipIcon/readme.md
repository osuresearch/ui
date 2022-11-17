
### Examples

```jsx
<TooltipIcon id="example-tooltip">
    Tooltip content goes here
</TooltipIcon>
```

```jsx
<TooltipIcon id="example-tooltip-2" label="Label that also receives tooltip hover/focus events">
    Tooltip 2 content goes here
</TooltipIcon>
```

```jsx
<TooltipIcon id="example-tooltip-3" label="Formatting Demo">
    asdgasdg
    <p>You can <em>format</em> tooltip content</p>
    <ul>
        <li>With lists</li>
        <li>And <a href="#">links</a></li>
    </ul>
</TooltipIcon>
```

### Accessibility

* Tooltip icons receive keyboard focus and will persist the tooltip content while focused.
* Clicking a tooltip icon will persist it until clicked away.
* A `label` prop may be provided to extend the hover/click region for the tooltip.
* Screen readers will read tooltip content without requiring an interaction with the icon.

