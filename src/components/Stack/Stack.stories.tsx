import { Button, Stack as StackComponent, StackProps } from '@osuresearch/ui';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<StackProps>('Layout', StackComponent)
  .withStyleSystemProps()
  .withBadge('stable');

export const Stack = RUIComponentStory((args: StackProps) => (
  <StackComponent {...args}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </StackComponent>
));
