### Examples

#### Basic Implementation
```jsx
import { RadioSet } from '@ORIS/ui';

<RadioSet id="texture-format">
    <RadioSet.Legend>
        Select your texture format
    </RadioSet.Legend>

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
</RadioSet>
```

#### Basic Implementation with React Hook Form (v7)
```jsx
import { useForm } from 'react-hook-form';
import { RadioSet } from '@ORIS/ui';

const { register, watch } = useForm({ mode: "onBlur" });

<>
<RadioSet id="rhf-texture-format">
    <RadioSet.Legend>
        Select your texture format
    </RadioSet.Legend>

    <Radio id="rhf-texture-format-RGB24">
        <Radio.Input 
            value="RGB24" 
            {...register('rhf-texture-format')}
        />
        <Radio.Label>RGB24</Radio.Label>
        <Radio.Help>Color texture format, 8-bits per channel.</Radio.Help>
    </Radio>

    <Radio id="rhf-texture-format-RGBA32">
        <Radio.Input 
            value="RGBA32"
            {...register('rhf-texture-format')}
        />
        <Radio.Label>RGBA32</Radio.Label>
        <Radio.Help>Color with alpha texture format, 8-bits per channel.</Radio.Help>
    </Radio>

    <Radio id="rhf-texture-format-RGB9e5Float">
        <Radio.Input 
            value="RGB9e5Float" 
            {...register('rhf-texture-format')}
        />
        <Radio.Label>RGB9e5Float</Radio.Label>
        <Radio.Help>RGB HDR format, with 9 bit mantissa per channel and a 5 bit shared exponent.</Radio.Help>
    </Radio>

    <Radio id="rhf-texture-format-DXT1">
        <Radio.Input 
            value="DXT1" 
            {...register('rhf-texture-format')}
        />
        <Radio.Label>DXT1</Radio.Label>
        <Radio.Help>Compressed color texture format.</Radio.Help>
    </Radio>
</RadioSet>

<hr/>
Value: {watch("rhf-texture-format")}
</>
```

#### Read Only
```jsx
import { RadioSet } from '@ORIS/ui';

<RadioSet id="output-format" readOnly={true}>
    <RadioSet.Legend>
        Output format
    </RadioSet.Legend>

    <Radio id="text-file">
        <Radio.Input value="text" defaultChecked={true} />
        <Radio.Label>Text file</Radio.Label>
    </Radio>

    <Radio id="csv-file">
        <Radio.Input value="csv" />
        <Radio.Label>CSV file</Radio.Label>
    </Radio>

    <Radio id="html-file">
        <Radio.Input value="html" />
        <Radio.Label>HTML File</Radio.Label>
    </Radio>
</RadioSet>
```

#### Change Events

```jsx
import { RadioSet } from '@ORIS/ui';

const onChange = (newStrValue, oldStrValue) => {
    alert(`Selected option changed from ${oldStrValue} to ${newStrValue}`);
}

<RadioSet id="light-type" onChange={onChange}>
    <RadioSet.Legend>
        Select your light type
    </RadioSet.Legend>

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
</RadioSet>
```

### Subcomponents