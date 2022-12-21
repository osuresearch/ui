import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text } from '../Text/Text';
import { Space, SpaceProps } from './index';

export default {
  title: 'layout/Space',
  component: Space,
  argTypes: {}
} as Meta<typeof Space>;

export const Vertical = (args: SpaceProps) => (
  <>
    <Text>First line</Text>
    <Space {...args} />
    <Text>Second line</Text>
  </>
);
Vertical.args = {
  h: 'md'
};

export const Horizontal = (args: SpaceProps) => (
  <div style={{ display: 'flex' }}>
    <Text>First part</Text>
    <Space {...args} />
    <Text>Second part</Text>
  </div>
);
Horizontal.args = {
  w: 'md'
};
