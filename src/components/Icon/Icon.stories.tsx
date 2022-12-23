import React from 'react';
import { Story } from '@storybook/react';
import { Icon as Component, IconProps } from '@osuresearch/ui';
import { RUIComponentMeta } from '~/.storybook/utils';

export default RUIComponentMeta<IconProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<IconProps> = (args: IconProps) => <Component {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  name: 'thumbs',
  size: 100
};
