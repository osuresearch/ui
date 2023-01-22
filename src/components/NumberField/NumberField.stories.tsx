import React, { forwardRef, useRef, useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { NumberField, NumberFieldProps } from './NumberField';

export default RUIComponentMeta<NumberFieldProps>('Forms', NumberField).withStyleSystemProps();

export const Overview = RUIComponentStory<NumberFieldProps>((args) => <NumberField {...args} />, {
  label: 'Population',
  description: 'Enter your proposed population count'
});

export const UncontrolledValue = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Value',
  defaultValue: 1234
});

export const ControlledValue = RUIComponentStory<NumberFieldProps>(
  (args) => {
    const [value, setValue] = useState(1234);

    return (
      <>
        <NumberField value={value} onChange={setValue} {...args} />
        <Text>{`Your value is: ${value}`}</Text>
      </>
    );
  },
  {
    label: 'Value'
  }
);

export const Required = RUIComponentStory(Overview, {
  label: 'Amount',
  necessityIndicator: true,
  isRequired: true
});

export const ReadOnly = RUIComponentStory(Overview, {
  label: 'Amount',
  value: 1234,
  isReadOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  label: 'Email',
  value: 1234,
  isDisabled: true
});

export const Error = RUIComponentStory(Overview, {
  label: 'Amount',
  necessityIndicator: true,
  isRequired: true,
  validationState: 'invalid',
  errorMessage: 'Please enter a nonzero amount.'
});

export const Decimal = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Adjust exposure',
  defaultValue: 10.0,
  formatOptions: {
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }
}).withDescription(`
  The following example uses the \`signDisplay\` option to include 
  the plus sign for positive numbers, for example to display an offset 
  from some value. In addition, it always displays a minimum of 1 digit 
  after the decimal point, and allows up to 2 fraction digits. 
  If the user enters more than 2 fraction digits, the result will be rounded.
`);

export const Percentage = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Sales tax',
  defaultValue: 0.05,
  step: 0.05,
  formatOptions: {
    style: 'percent'
  }
}).withDescription(`
  The percent formatting option will treat the value as a percentage. 
  In this mode, the value is multiplied by 100 before it is displayed, 
  i.e. 0.45 is displayed as 45%. 
  
  The reverse is also true: when the user enters a value, the \`onChange\` 
  event will be triggered with the entered value divided by 100. 
  
  When the percent option is enabled, the default step automatically 
  changes to 0.01 such that incrementing and decrementing occurs by 1%. 
  This can be overridden with the \`step\` prop.
`);

export const Currency = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Budget',
  defaultValue: 123456,
  formatOptions: {
    style: 'currency',
    currency: 'USD',
    currencySign: 'accounting'
  }
}).withDescription(`
  For Ohio State business use \`currency: USD\` with \`currencySign: accounting\`.
`);

export const CustomUnits = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Package size',
  defaultValue: 4,
  formatOptions: {
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }
}).withDescription(`
  The style: 'unit' option can be passed to the \`formatOptions \`
  prop to format the value with a unit of measurement. 
  The unit option must also be passed to set which unit to 
  use (e.g. inch). In addition, the unitDisplay option can 
  be used to choose whether to display the unit in long, short, or narrow format.

  If you need to allow the user to change the unit, you should 
  include a separate dropdown next to the number field. The number
  field itself will not determine the unit from the user input.

  Note: the unit style is not currently supported in Safari. 
  A polyfill may be necessary.

  For additional details, see [React Aria's useNumberField docs](https://react-spectrum.adobe.com/react-aria/useNumberField.html#units).
`);

export const WithMinMax = RUIComponentStory<NumberFieldProps>(Overview, {
  label: 'Adjust exposure between 1 and 10',
  defaultValue: 1.0,
  minValue: 1.0,
  maxValue: 10.0,
  formatOptions: {
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }
})