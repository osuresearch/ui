import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Paper } from '../Paper';
import { Group, GroupProps } from './Group';

export default {
  title: 'Layout / Group',
  ...RUIComponentMeta(Group).withStyleSystemProps()
};

export const Overview = RUIComponentStory<GroupProps>((args) => (
  <Group {...args}>
    <Paper px="lg" py="lg" bgc="accent01" c="accent01-inverse">
      1
    </Paper>
    <Paper px="lg" py="xxl" bgc="accent02" c="accent02-inverse">
      2
    </Paper>
    <Paper px="lg" py="lg" bgc="accent03" c="accent03-inverse">
      3
    </Paper>
  </Group>
));

export const WrapContent = RUIComponentStory<GroupProps>((args) => (
  <Group {...args} wrap>
    {[...Array(9)].map((k, i) => (
      <Paper key={i} w={200} h={200} bgc="accent01">
        Item {i + 1}
      </Paper>
    ))}
  </Group>
));
