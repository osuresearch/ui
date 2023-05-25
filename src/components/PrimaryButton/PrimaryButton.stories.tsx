import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Icon } from '../Icon';
import { PrimaryButton, PrimaryButtonProps } from '../PrimaryButton';

export default RUIComponentMeta<PrimaryButtonProps>(
  'Ohio State',
  PrimaryButton
).withStyleSystemProps();

export const Overview = RUIComponentStory<PrimaryButtonProps>((args) => (
  <PrimaryButton {...args}>Primary button</PrimaryButton>
));

export const Disabled = RUIComponentStory(Overview, {
  disabled: true
});

export const Small = RUIComponentStory(Overview, {
  small: true
});

export const Outline = RUIComponentStory(Overview, {
  variant: 'outline'
});

export const WithLeftIcon = RUIComponentStory(Overview, {
  variant: 'outline',
  renderLeft: <Icon name="envelope" size={24} />
});

export const WithRightIcon = RUIComponentStory(Overview, {
  variant: 'default',
  small: true,
  renderRight: <Icon name="caret" />
});
