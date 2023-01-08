import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Heading } from '../Heading';
import { HashLink as Component, HashLinkProps } from './HashLink';

export default RUIComponentMeta<HashLinkProps>('Components', Component);

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
