import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {}
} as Meta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args}>Text</Text>;

export const Default = Template.bind({});
Default.args = {};
