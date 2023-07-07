import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { TextLink, TextLinkProps } from './TextLink';
import { UnstyledButton } from '../UnstyledButton';

export default {
  title: 'Navigation / TextLink',
  ...RUIComponentMeta(TextLink).withStyleSystemProps()
};

export const Overview = RUIComponentStory<TextLinkProps>((args) => (
  <TextLink {...args} href="https://example.com">Go to example.com</TextLink>
));

export const Polymorphic = RUIComponentStory<TextLinkProps>(() => (
  <TextLink as={UnstyledButton} onPress={() => alert('Thanks!')}>
    Click me!
  </TextLink>
));
