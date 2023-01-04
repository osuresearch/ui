import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Indicator, IndicatorProps } from './Indicator';

export default RUIComponentMeta<IndicatorProps>('Components', Indicator).withStyleSystemProps();

const Template: Story<IndicatorProps> = (args) => <Indicator {...args} />;

export const Overview = RUIComponentStory(Template);

export const WithPingEffect = RUIComponentStory(Template, {
  c: 'info',
  ping: true
});
