import React, { useState } from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { ToggleField as Component, ToggleFieldProps } from './ToggleField';

export default RUIComponentMeta<ToggleFieldProps>('Forms', Component)
  .withStyleSystemProps()
  ;

export const Overview = RUIComponentStory<ToggleFieldProps>((args) => <Component {...args} />, {
  label: 'I want to receive hourly promotional emails',
  description: 'Additional help text'
});

export const DefaultValue = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  isSelected: true
});

export const Required = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  isRequired: true
});

// TODO: ReadOnly state
// export const ReadOnly = RUIComponentStory<ToggleFieldProps>(Overview, {
//   label: 'I want to receive hourly promotional emails',
//   isSelected: true,
//   isReadOnly: true
// });

export const Disabled = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  isSelected: true,
  isDisabled: true
});

export const Indeterminate = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  isSelected: true,
  isIndeterminate: true
});

export const WithError = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  errorMessage: 'You must agree to receive hourly emails.'
});

export const WithDiff = RUIComponentStory<ToggleFieldProps>(Overview, {
  label: 'I want to receive hourly promotional emails',
  showDiff: true,
  previousValue: true
});
