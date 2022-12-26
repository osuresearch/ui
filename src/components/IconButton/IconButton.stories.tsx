import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { IconButton as Component, IconButtonProps } from './IconButton';

export default RUIComponentMeta<IconButtonProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

export const IconButton = RUIComponentStory<IconButtonProps>((args) => <Component {...args} />, {
  name: 'question',
  label: 'More information'
});
