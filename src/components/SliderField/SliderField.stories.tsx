import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React, { useState } from 'react';

import { SliderField, SliderFieldProps } from './SliderField';
import { Text } from '../Text';

export default {
  title: 'Forms / SliderField',
  ...RUIComponentMeta(SliderField).withStyleSystemProps()
};

export const Overview = RUIComponentStory<SliderFieldProps>((args) => <SliderField {...args} />, {
  label: 'Population',
  description: 'Enter your proposed population count'
});

export const UncontrolledValue = RUIComponentStory<SliderFieldProps>(Overview, {
  label: 'Uncontrolled value',
  defaultValue: 50
});

export const ControlledValue = RUIComponentStory<SliderFieldProps>(
  (args) => {
    const [value, setValue] = useState<number | undefined>(50);

    return (
      <>
        <SliderField value={value} onChange={setValue} {...args} />
        <Text>{`Your value is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Controlled value'
  }
);

export const Required = RUIComponentStory(Overview, {
  label: 'Amount',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(Overview, {
  label: 'Amount',
  value: 50,
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Amount',
  value: 50,
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: 'Amount',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please enter a nonzero amount.'
});

// export const Vertical = RUIComponentStory(Overview, {
//   label: 'Amount',
//   value: 50,
//   orientation: 'vertical',
// });

export const HorizontalLayout = RUIComponentStory(Overview, {
  label: 'Amount',
  value: 50,
  layout: 'horizontal',
});

export const CustomUnits = RUIComponentStory(Overview, {
  label: 'Budget',
  defaultValue: 123456,
  step: 100,
  minValue: 1000,
  maxValue: 1000000,
  formatOptions: {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting'
  }
}).withDescription(`
  Similar to \`NumberField\`, the slider supports range control via \`minValue\`,
  \`maxValue\`, and \`step\` props, as well as custom unit formatting through the
  \`formatOptions\` prop.
`);
