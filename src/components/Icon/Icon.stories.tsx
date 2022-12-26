import { Icon as Component, IconProps } from '@osuresearch/ui';
import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta<IconProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('atom')
  .withBadge('stable');

const Template: Story<IconProps> = (args: IconProps) => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  name: 'thumbs',
  size: 100
};
