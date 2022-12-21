import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Stack, StackProps } from './index';

export default {
  title: 'layout/Stack',
  component: Stack,
  argTypes: {}
} as Meta<typeof Stack>;

const Template: Story<StackProps> = (args: StackProps) => (
  <Stack {...args}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </Stack>
);

export const Example = Template.bind({});
Example.args = {};
