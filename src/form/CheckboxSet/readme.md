### Examples

#### Basic Implementation

```jsx
import { Checkbox } from '@oris/ui/form';

<CheckboxSet>
    <CheckboxSet.Legend>
        Collection of checkboxes in a <code>CheckboxSet</code>
    </CheckboxSet.Legend>

    <CheckboxSet.Fields name="color-model">
        <Checkbox id="rgb">
            <Checkbox.Input />
            <Checkbox.Label>RGB</Checkbox.Label>
        </Checkbox>

        <Checkbox id="cmyk">
            <Checkbox.Input />
            <Checkbox.Label>CMYK</Checkbox.Label>
        </Checkbox>

        <Checkbox id="hsl">
            <Checkbox.Input disabled />
            <Checkbox.Label>HSL</Checkbox.Label>
        </Checkbox>
    </CheckboxSet.Fields>

    <CheckboxSet.Help>
        Use a <strong>1em</strong> padding between elements
        in the same <code>CheckboxSet</code>
    </CheckboxSet.Help>
</CheckboxSet>
```

<!-- #### Validation
Tip: Try changing invalid to valid in the example below.

```jsx
import { Checkbox } from '@oris/ui/form';

<CheckboxSet required invalid>
    <CheckboxSet.Legend>
        A required checkbox set with an error
    </CheckboxSet.Legend>

    <CheckboxSet.Fields>
        <Checkbox id="chips" name="chips">
            <Checkbox.Input />
            <Checkbox.Label>Chips!</Checkbox.Label>
        </Checkbox>

        <Checkbox id="icecream" name="icecream">
            <Checkbox.Input />
            <Checkbox.Label>Ice Cream!</Checkbox.Label>
        </Checkbox>
    </CheckboxSet.Fields>

    <CheckboxSet.InvalidFeedback>
        You must select an option
    </CheckboxSet.InvalidFeedback>

    <CheckboxSet.ValidFeedback>
        You did it!
    </CheckboxSet.ValidFeedback>
</CheckboxSet>
``` -->

#### Inline Checkboxes
```jsx
import { Checkbox } from '@oris/ui/form';

<CheckboxSet>
    <CheckboxSet.Legend>
        A couple inline checkboxes, to save some space on a long form
    </CheckboxSet.Legend>

    <CheckboxSet.Fields inline>
        <Checkbox id="chips2" name="chips2">
            <Checkbox.Input />
            <Checkbox.Label>Chips!</Checkbox.Label>
        </Checkbox>

        <Checkbox id="icecream2" name="icecream2">
            <Checkbox.Input />
            <Checkbox.Label>Ice Cream!</Checkbox.Label>
        </Checkbox>
    </CheckboxSet.Fields>

    <CheckboxSet.Help>
        Add <code>inline</code> to the <code>CheckboxSet.Fields</code> component
    </CheckboxSet.Help>
</CheckboxSet>
```