import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { BreadcrumbsProps, Breadcrumbs as Component } from '../Breadcrumbs';
import { Link } from '../Link';
import { Text } from '../Text';

export default {
  title: 'Navigation / Breadcrumbs',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const Breadcrumbs = RUIComponentStory<BreadcrumbsProps>((args) => (
  <Component {...args}>
    <Link href="#">Home</Link>
    <Link href="#">Level 1</Link>
    <Link href="#">Level 2</Link>
    <Text c="neutral-subtle">Level 3</Text>
  </Component>
));
