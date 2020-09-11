### Examples

```jsx
import { FieldSet } from '@oris/ui';

<FieldSet id="texture-format">
    <FieldSet.Legend>
        Select your texture format
    </FieldSet.Legend>

    <Radio id="texture-format-RGB24">
        <Radio.Input value="RGB24" />
        <Radio.Label>RGB24</Radio.Label>
        <Radio.Help>Color texture format, 8-bits per channel.</Radio.Help>
    </Radio>

    <Radio id="texture-format-RGBA32">
        <Radio.Input value="RGBA32" />
        <Radio.Label>RGBA32</Radio.Label>
        <Radio.Help>Color with alpha texture format, 8-bits per channel.</Radio.Help>
    </Radio>

    <Radio id="texture-format-RGB9e5Float">
        <Radio.Input value="RGB9e5Float" />
        <Radio.Label>RGB9e5Float</Radio.Label>
        <Radio.Help>RGB HDR format, with 9 bit mantissa per channel and a 5 bit shared exponent.</Radio.Help>
    </Radio>
    
    <Radio id="texture-format-DXT1">
        <Radio.Input value="DXT1" />
        <Radio.Label>DXT1</Radio.Label>
        <Radio.Help>Compressed color texture format.</Radio.Help>
    </Radio>
</FieldSet>
```


#### Change Events

```jsx
import { FieldSet } from '@oris/ui';

const onChange = (newStrValue, oldStrValue) => {
    alert(`Selected option changed from ${oldStrValue} to ${newStrValue}`);
}

// TODO (Chase): This example doesn't work - but it's the expected
// use case for something like this (IMO)

<FieldSet id="light-type" onChange={onChange}>
    <FieldSet.Legend>
        Select your light type
    </FieldSet.Legend>

    <Radio id="light-type-spot">
        <Radio.Input value="Spot" />
        <Radio.Label>Spot light</Radio.Label>
    </Radio>

    <Radio id="light-type-directional">
        <Radio.Input value="Directional" />
        <Radio.Label>Directional Light</Radio.Label>
    </Radio>
    
    <Radio id="light-type-point">
        <Radio.Input value="Point" />
        <Radio.Label>Point Light</Radio.Label>
    </Radio>
</FieldSet>
```
