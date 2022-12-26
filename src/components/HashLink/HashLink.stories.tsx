import { HashLink as Component, HashLinkProps, Title } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<HashLinkProps>('Components', Component)
  .withBadge('atom')
  .withBadge('stable');

export const HashLink = RUIComponentStory<HashLinkProps>(
  (args) => (
    <Title level={1}>
      <Component {...args}>Linked title content</Component>
    </Title>
  ),
  {
    id: 'hash-link-example'
  }
);
