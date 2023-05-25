import React from 'react';
import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';

import { DateRangeField, DateRangeFieldProps } from './DateRangeField';

export default RUIComponentMeta<DateRangeFieldProps>('Forms', DateRangeField).withStyleSystemProps();

// export const Overview = RUIComponentStory<DateRangeFieldProps>((args) => <DateRangeField {...args} />, {
//   label: 'Date',
//   description: 'Enter your date of birth'
// });

export const UncontrolledValue = RUIComponentStory<DateRangeFieldProps>(
  (args) => <DateRangeField {...args}
    defaultValue={['2023-04-10', '2023-04-25']}
  />,
  {
    label: 'Date Range'
  }
);

// export const ControlledValue = RUIComponentStory<DateRangeFieldProps>(
//   (args) => {
//     const [value, setValue] = useState<(string | undefined)[] | undefined>(['2023-04-10', '2023-04-25']);

//     return (
//       <>
//         <DateRangeField value={value} onChange={setValue} {...args} />
//         <Text>{`Your date is: ${value}`}</Text>
//       </>
//     );
//   },
//   {
//     label: 'Date'
//   }
// );

// export const Required = RUIComponentStory(UncontrolledValue, {
//   label: 'Date',
//   necessityIndicator: true,
//   isRequired: true
// });

// export const ReadOnly = RUIComponentStory(UncontrolledValue, {
//   label: 'Date',
//   isReadOnly: true
// });

export const Disabled = RUIComponentStory(UncontrolledValue, {
  label: 'Date',
  isDisabled: true
});

// export const Error = RUIComponentStory(Overview, {
//   label: 'Date',
//   validationState: 'invalid',
//   errorMessage: 'Please enter a valid date.'
// });
