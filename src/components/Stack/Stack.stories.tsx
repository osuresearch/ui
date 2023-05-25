import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Paper } from '../Paper';
import { Stack as StackComponent, StackProps } from './Stack';

export default RUIComponentMeta<StackProps>('Layout', StackComponent).withStyleSystemProps();

export const Stack = RUIComponentStory((args: StackProps) => (
  <StackComponent {...args}>
    <Paper px="lg" py="lg" bgc="accent01" c="accent01-inverse">
      1
    </Paper>
    <Paper px="xxl" py="xxl" bgc="accent02" c="accent02-inverse">
      2
    </Paper>
    <Paper px="lg" py="lg" bgc="accent03" c="accent03-inverse">
      3
    </Paper>
  </StackComponent>
));
