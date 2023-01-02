import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { IconButton, IconButtonProps } from './IconButton';

export default RUIComponentMeta<IconButtonProps>('Components', IconButton)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

export const Overview = RUIComponentStory<IconButtonProps>((args) => <IconButton {...args} />, {
  name: 'question',
  label: 'More information'
});

export const Large = RUIComponentStory(Overview, {
  size: 64,
  name: 'thumbs',
  label: 'Rate this up'
});

export const Accented = RUIComponentStory(Overview, {
  name: 'heartFill',
  label: 'Add to favorites',
  c: 'pink'
});
