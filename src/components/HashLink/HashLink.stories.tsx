import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Heading } from '../Heading';
import { HashLink as Component, HashLinkProps } from './HashLink';

export default {
  title: 'Navigation / HashLink',
  ...RUIComponentMeta(Component)
};

export const HashLink = RUIComponentStory<HashLinkProps>(
  (args) => (
    <Heading level={1}>
      <Component {...args}>Linked header content</Component>
    </Heading>
  ),
  {
    id: 'hash-link-example'
  }
);
