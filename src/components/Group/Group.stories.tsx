import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button } from '../Button';
import { Group as GroupComponent, GroupProps } from './Group';

export default RUIComponentMeta<GroupProps>('Layout', GroupComponent)
  .withStyleSystemProps()
  .withBadge('stable');

export const Group = RUIComponentStory((args: GroupProps) => (
  <GroupComponent {...args}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </GroupComponent>
));
