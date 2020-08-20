
### Examples

```jsx
const dropdownOptions = {
       value: {
          cheddar: 'Cheddar Cheese',
          feta: 'Feta Cheese'
        }
    };

<Select id="bind-test">
    <Select.Label>Bind Test</Select.Label>

    <Select.Control>
        <Select.Option optionsBind={dropdownOptions} />
    </Select.Control>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```

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
<Select id="error-example" required>
    <Select.Label>Erroneous selection</Select.Label>

    <Select.Control name="color-profiles">
        <Select.Option value="">
            -- Please choose an option --
        </Select.Option>
        <Select.Option value="RGB">RGB</Select.Option>
        <Select.Option value="CMYK">CMYK</Select.Option>
        <Select.Option value="HSL">HSL</Select.Option>
    </Select.Control>

    <Select.Error>
        You must select a color profile
    </Select.Error>

    <Select.Success>
        Your selection is correct
    </Select.Success>

    <Select.Help>
        Some additional help text here
    </Select.Help>
</Select>
```