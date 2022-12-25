import React from 'react';
import { IconButton as Component, IconButtonProps } from './IconButton';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<IconButtonProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

export const IconButton = RUIComponentStory<IconButtonProps>((args) => <Component {...args} />, {
  name: 'question',
  label: 'More information'
});
