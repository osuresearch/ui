import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button } from '../Button';
import { Group as GroupComponent, GroupProps } from './Group';

export default RUIComponentMeta<GroupProps>('Layout', GroupComponent)
  .withStyleSystemProps()
  .withBadge('stable');

export const Group = RUIComponentStory((args: GroupProps) => (
  <GroupComponent {...args}>
    <Button px="lg" py="lg">
      1
    </Button>
    <Button px="lg" py="xxl">
      2
    </Button>
    <Button px="lg" py="lg">
      3
    </Button>
  </GroupComponent>
));
