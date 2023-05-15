import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { LinkButton, LinkButtonProps } from './LinkButton';

export default RUIComponentMeta<LinkButtonProps>('Buttons', LinkButton).withStyleSystemProps();

export const Overview = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton {...args}>Call to Action</LinkButton>
));

export const Polymorphic = RUIComponentStory<LinkButtonProps>((args) => (
  <LinkButton as="a" href="https://example.com">
    Go to Example
  </LinkButton>
));
