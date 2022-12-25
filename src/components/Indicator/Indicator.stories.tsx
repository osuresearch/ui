import React from 'react';
import { Story } from '@storybook/react';
import { Indicator, IndicatorProps } from './index';
import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta<IndicatorProps>('Components', Indicator)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<IndicatorProps> = (args) => <Indicator {...args} />;

export const Overview = Template.bind({});
Overview.args = {};
