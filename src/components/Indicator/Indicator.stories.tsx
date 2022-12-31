import { Story } from '@storybook/react';
import React from 'react';

import { Indicator, IndicatorProps } from '@osuresearch/ui';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<IndicatorProps>('Components', Indicator)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<IndicatorProps> = (args) => <Indicator {...args} />;

export const Overview = RUIComponentStory(Template);

export const WithPingEffect = RUIComponentStory(Template, {
  c: 'info',
  ping: true
});
