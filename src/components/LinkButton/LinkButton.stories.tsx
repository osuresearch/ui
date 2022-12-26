import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { LinkButton, LinkButtonProps } from './LinkButton';

export default RUIComponentMeta<LinkButtonProps>('Components', LinkButton)
  .withStyleSystemProps()
  .withBadge('molecule')
  .withBadge('beta');

export const Overview = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton {...args}>Call to Action</LinkButton>
));

export const PolymorphicAnchor = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton component="a" href="https://example.com">
    Go to Example
  </LinkButton>
));
