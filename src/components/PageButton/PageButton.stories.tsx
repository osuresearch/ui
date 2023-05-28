import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Group } from '../Group';
import { PageButton as Component, PageButtonProps } from './PageButton';

export default {
  title: 'Navigation / PageButton',
  ...RUIComponentMeta(Component)
};

export const PageButton = RUIComponentStory<PageButtonProps>((args) => (
  <Group gap="lg" align="stretch">
    <Component {...args} direction="previous">
      Title of previous page
    </Component>
    <Component {...args} direction="next">
      Title of next page
    </Component>
  </Group>
));
