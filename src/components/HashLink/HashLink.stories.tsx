import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Header } from '../Header';
import { HashLink as Component, HashLinkProps } from './HashLink';

export default RUIComponentMeta<HashLinkProps>('Components', Component)
  .withBadge('atom')
  .withBadge('stable');

export const HashLink = RUIComponentStory<HashLinkProps>(
  (args) => (
    <Header level={1}>
      <Component {...args}>Linked header content</Component>
    </Header>
  ),
  {
    id: 'hash-link-example'
  }
);
