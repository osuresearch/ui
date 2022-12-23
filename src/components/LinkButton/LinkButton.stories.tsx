import React from 'react';
import { LinkButton, LinkButtonProps } from './LinkButton';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<LinkButtonProps>('Components', LinkButton)
  .withStyleSystemProps()
  .withBadge('beta');

export const Overview = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton {...args}>Call to Action</LinkButton>
));

export const PolymorphicAnchor = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton component="a" href="https://example.com">
    Go to Example
  </LinkButton>
));
