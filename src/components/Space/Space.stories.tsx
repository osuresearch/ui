import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Space, SpaceProps } from './Space';

export default RUIComponentMeta<SpaceProps>('Layout', Space).withBadge('stable');

export const Vertical = RUIComponentStory(
  (args: SpaceProps) => (
    <Stack gap={0}>
      <Text>First line</Text>
      <Space {...args} />
      <Text>Second line</Text>
    </Stack>
  ),
  { h: 'md' }
);

export const Horizontal = RUIComponentStory(
  (args: SpaceProps) => (
    <Group gap={0}>
      <Text>First line</Text>
      <Space {...args} />
      <Text>Second line</Text>
    </Group>
  ),
  { w: 'md' }
);
