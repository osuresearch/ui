import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export default RUIComponentMeta<ButtonProps>('Components', Button).withStyleSystemProps();

export const Overview = RUIComponentStory<ButtonProps>((args) => (
  <Button {...args}>Standard button</Button>
));

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const Alternate = RUIComponentStory(Overview, {
  variant: 'alt'
});

export const WithLeftSlot = RUIComponentStory(Overview, {
  variant: 'alt',
  leftSlot: <Icon name="heart" size={20} mr="sm" c="pink" />
});

export const WithRightSlot = RUIComponentStory(Overview, {
  variant: 'default',
  rightSlot: <Icon name="caret" size={16} ml="xs" />
});

export const IconOnly = RUIComponentStory<ButtonProps>((args) => (
  <Button aria-label="Add to favorites" w={44} variant="alt" {...args}>
    <Icon name="heartFill" c="pink" />
  </Button>
)).withDescription(`
This is for demo purposes only. Use the \`IconButton\` component if you
want to use an icon-only button in an application.
`);
