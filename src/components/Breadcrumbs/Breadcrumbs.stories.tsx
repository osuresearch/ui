import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { BreadcrumbsProps, Breadcrumbs as Component } from '../Breadcrumbs';
import { Link } from '../Link';

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
