import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { BreadcrumbsProps, Breadcrumbs as Component } from '../Breadcrumbs';
import { Link } from '../Link';
import { Text } from '../Text';

export default RUIComponentMeta<BreadcrumbsProps>('BUX Stuff', Component).withStyleSystemProps();

export const Breadcrumbs = RUIComponentStory<BreadcrumbsProps>((args) => (
  <Component {...args}>
    <Link href="#">Home</Link>
    <Link href="#">Level 1</Link>
    <Link href="#">Level 2</Link>
    <Text c="dark">Level 3</Text>
  </Component>
));
