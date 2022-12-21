import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Indicator, IndicatorProps } from './index';

export default {
  title: 'atoms/Indicator',
  component: Indicator,
  argTypes: {}
} as Meta<typeof Indicator>;

const Template: Story<IndicatorProps> = (args) => <Indicator {...args} />;

export const Default = Template.bind({});
Default.args = {};
