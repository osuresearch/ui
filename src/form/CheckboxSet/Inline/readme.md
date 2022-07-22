```jsx
import { CheckboxSet, Checkbox } from '@ORIS/ui';

<CheckboxSet id="favorite-food-inline">
    <CheckboxSet.Legend>
        My favorite foods
    </CheckboxSet.Legend>

    <CheckboxSet.Inline>
        <Checkbox id="pizza-inline">
            <Checkbox.Input />
            <Checkbox.Label>Pizza</Checkbox.Label>
        </Checkbox>

        <Checkbox id="sushi-inline">
            <Checkbox.Input />
            <Checkbox.Label>Sushi</Checkbox.Label>
        </Checkbox>
    </CheckboxSet.Inline>

    <CheckboxSet.Help>
        A short list of options (e.g. yes/no) may be horizontally aligned with <strong>2em</strong> padding between options
    </CheckboxSet.Help>
</CheckboxSet>
```