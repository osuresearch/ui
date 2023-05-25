import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { IconButton, IconButtonProps } from './IconButton';

export default RUIComponentMeta<IconButtonProps>('Buttons', IconButton).withStyleSystemProps();

export const Overview = RUIComponentStory<IconButtonProps>((args) => <IconButton {...args} />, {
  name: 'question',
  label: 'More information'
});

export const WithSize = RUIComponentStory(Overview, {
  size: 24,
  name: 'thumbs',
  label: 'Rate this up'
});

export const FadeVariant = RUIComponentStory(Overview, {
  size: 24,
  name: 'thumbs',
  label: 'Rate this up',
  variant: 'fade',
});

export const Accented = RUIComponentStory(Overview, {
  name: 'heartFill',
  label: 'Add to favorites',
  c: 'accent05'
});

export const WithPadding = RUIComponentStory<IconButtonProps>((args) => <IconButton {...args} />, {
  name: 'question',
  label: 'More information',
  size: 16,
  iconProps: { p: 'md' }
}).withDescription(`
Use \`iconProps\` to send properties to the inner \`<Icon>\` element.

Combining a smaller icon size with iconProp padding allows you to use smaller
icons with larger touch surfaces.
`);
