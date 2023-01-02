import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { BreadcrumbsProps, Breadcrumbs as Component } from '../Breadcrumbs';
import { Link } from '../Link';
import { Text } from '../Text';

export default RUIComponentMeta<BreadcrumbsProps>('BUX Stuff', Component).withStyleSystemProps();

export const Breadcrumbs = RUIComponentStory<BreadcrumbsProps>((args) => (
  <Component>
    <Link href="#">Home</Link>
    <Link href="#">Level 1</Link>
    <Link href="#">Level 2</Link>
    <Text>Level 3</Text>
  </Component>
));
