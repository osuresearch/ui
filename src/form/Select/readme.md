
### Examples

```jsx
<Select id="color-select">
    <Select.Label>Select a Color Profile</Select.Label>

    <Select.Control>
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="RGB">RGB</Select.Option>
        <Select.Option value="CMYK">CMYK</Select.Option>
        <Select.Option value="HSL">HSL</Select.Option>
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```

```jsx
<Select id="error-example" invalid required>
    <Select.Label>Erroneous selection</Select.Label>

    <Select.Control name="color-profiles">
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="RGB">RGB</Select.Option>
        <Select.Option value="CMYK">CMYK</Select.Option>
        <Select.Option value="HSL">HSL</Select.Option>
    </Select.Control>

    <Select.InvalidFeedback>
        You must select a color profile
    </Select.InvalidFeedback>

    <Select.ValidFeedback>
        Your selection is correct
    </Select.ValidFeedback>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```