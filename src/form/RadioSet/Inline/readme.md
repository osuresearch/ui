```jsx
import { RadioSet, Radio } from '@ORIS/ui';

<RadioSet id="yes-no-inline">
    <RadioSet.Legend>
        A common yes/no radio pattern
    </RadioSet.Legend>

    <RadioSet.Inline>
        <Radio id="yes-inline">
            <Radio.Input />
            <Radio.Label>Yes</Radio.Label>
        </Radio>

        <Radio id="no-inline">
            <Radio.Input />
            <Radio.Label>No</Radio.Label>
        </Radio>
    </RadioSet.Inline>

    <RadioSet.Help>
        A short list of options (e.g. yes/no) may be horizontally aligned with <strong>2em</strong> padding between options
    </RadioSet.Help>
</RadioSet>
```