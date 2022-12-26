import { BreadcrumbsProps, Breadcrumbs as Component, Link } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<BreadcrumbsProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('molecule')
  .withBadge('stable');

export const Breadcrumbs = RUIComponentStory<BreadcrumbsProps>((args) => (
  <Component>
    <Link href="#">Home</Link>
    <Link href="#">Level 1</Link>
    <Link href="#">Level 2</Link>
    <Link>Level 3</Link>
  </Component>
));
