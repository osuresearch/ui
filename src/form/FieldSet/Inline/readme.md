```jsx
import { FieldSet, Radio } from '@ORIS/ui';

<FieldSet id="yes-no-inline">
    <FieldSet.Legend>
        A common yes/no radio pattern
    </FieldSet.Legend>

    <FieldSet.Inline>
        <Radio id="yes-inline">
            <Radio.Input />
            <Radio.Label>Yes</Radio.Label>
        </Radio>

        <Radio id="no-inline">
            <Radio.Input />
            <Radio.Label>No</Radio.Label>
        </Radio>
    </FieldSet.Inline>

    <FieldSet.Help>
        A short list of options (e.g. yes/no) may be horizontally aligned with <strong>2em</strong> padding between options
    </FieldSet.Help>
</FieldSet>
```