import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { LinkButton, LinkButtonProps } from './LinkButton';

export default RUIComponentMeta<LinkButtonProps>('BUX Stuff', LinkButton).withStyleSystemProps();

export const Overview = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton {...args}>Call to Action</LinkButton>
));

export const Polymorphic = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton as="a" href="https://example.com">
    Go to Example
  </LinkButton>
));
