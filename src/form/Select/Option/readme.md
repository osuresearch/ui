
```jsx static
<Select.Option value="RGB">RGB</Select.Option>
<Select.Option value="CMYK">CMYK</Select.Option>
<Select.Option value="HSL">HSL</Select.Option>
```

When used with a `bind`, an `optionsBind` enum may be passed into a single `<Select.Option>` instead of a `value`

```jsx static
const dropdownOptions = {
    value: {
        cheddar: 'Cheddar Cheese',
        feta: 'Feta Cheese'
    }
};

<Select.Option optionsBind={dropdownOptions}>
```