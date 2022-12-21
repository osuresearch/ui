import React from 'react';
import { Story, Meta } from '@storybook/react';

import { themeSizeNames } from '../../types';
import { Icon, IconProps } from './index';

export default {
  title: 'atoms/Icon',
  component: Icon,
  parameters: {
    controls: {
      include: /^(name|size|inline|m|p)$/g
      // exclude: /^(m.?|p.?)$/g
    }
  },
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    m: {
      options: themeSizeNames
    },
    p: {
      options: themeSizeNames
    }
  }
} as Meta<typeof Icon>;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'home',
  size: 32
};
