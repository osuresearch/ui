import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Badge } from '../Badge';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export default RUIComponentMeta<ButtonProps>('Components', Button).withStyleSystemProps();

export const Overview = RUIComponentStory<ButtonProps>((args) => <Button {...args}>Button</Button>);

export const Primary = RUIComponentStory(Overview, {
  variant: 'primary'
}).withDescription(`
  Use a primary button to highlight the strongest call to action on a page.
  Primary buttons should only appear once per container and not every
  screen requires a primary button.
`);

export const Subtle = RUIComponentStory(Overview, {
  variant: 'subtle'
}).withDescription(`
  Use subtle buttons along with primary buttons for secondary actions,
  such as "Cancel".
`);

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});

export const WithIcon = RUIComponentStory(Overview, {
  variant: 'subtle',
  leftSlot: <Icon name="heart" size={20} c="pink" />
}).withDescription('Use icons when you want to convey meaning quicker');

export const WithBadge = RUIComponentStory(Overview, {
  variant: 'default',
  rightSlot: <Badge c="dimmed">+99</Badge>
}).withDescription('Use badges when you want to indicate a value');
