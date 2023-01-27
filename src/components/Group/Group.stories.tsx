import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Paper } from '../Paper';
import { Group, GroupProps } from './Group';

export default RUIComponentMeta<GroupProps>('Layout', Group).withStyleSystemProps();

export const Overview = RUIComponentStory<GroupProps>((args) => (
  <Group {...args}>
    <Paper px="lg" py="lg" bgc="teal" c="teal-contrast">
      1
    </Paper>
    <Paper px="lg" py="xxl" bgc="green" c="green-contrast">
      2
    </Paper>
    <Paper px="lg" py="lg" bgc="gold" c="gold-contrast">
      3
    </Paper>
  </Group>
));

export const WrapContent = RUIComponentStory<GroupProps>((args) => (
  <Group {...args} wrap>
    {[...Array(9)].map((k, i) => (
      <Paper key={i} w={200} h={200} bgc="green">
        Item {i + 1}
      </Paper>
    ))}
  </Group>
));
