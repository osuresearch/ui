import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Button } from '../Button';
import { Stack as StackComponent, StackProps } from './Stack';

export default RUIComponentMeta<StackProps>('Layout', StackComponent).withStyleSystemProps();

export const Stack = RUIComponentStory((args: StackProps) => (
  <StackComponent {...args}>
    <Button px="lg" py="lg">
      1
    </Button>
    <Button px="xxl" py="lg">
      2
    </Button>
    <Button px="lg" py="lg">
      3
    </Button>
  </StackComponent>
));
