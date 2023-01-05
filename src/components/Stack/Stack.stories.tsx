import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Paper } from '../Paper';
import { Stack as StackComponent, StackProps } from './Stack';

export default RUIComponentMeta<StackProps>('Layout', StackComponent).withStyleSystemProps();

export const Stack = RUIComponentStory((args: StackProps) => (
  <StackComponent {...args}>
    <Paper px="lg" py="lg" bgc="teal" c="teal-contrast">
      1
    </Paper>
    <Paper px="lg" py="xxl" bgc="green" c="green-contrast">
      2
    </Paper>
    <Paper px="lg" py="lg" bgc="gold" c="gold-contrast">
      3
    </Paper>
  </StackComponent>
));
