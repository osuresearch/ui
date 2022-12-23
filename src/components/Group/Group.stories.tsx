import React from 'react';
import { Button, Group as GroupComponent, GroupProps } from '@osuresearch/ui';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

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
