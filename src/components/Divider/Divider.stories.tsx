import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Divider, DividerProps } from './Divider';

export default RUIComponentMeta<DividerProps>('Layout', Divider);

export const Horizontal = RUIComponentStory<DividerProps>(
  (args) => (
    <Stack gap={0}>
      <Text>First line</Text>
      <Divider {...args} />
      <Text>Second line</Text>
    </Stack>
  ),
  { gap: 'md', orientation: 'horizontal' }
);

export const Vertical = RUIComponentStory<DividerProps>(
  (args) => (
    <Group gap={0}>
      <Text>First line</Text>
      <Divider {...args} />
      <Text>Second line</Text>
    </Group>
  ),
  { gap: 'md', orientation: 'vertical' }
);
