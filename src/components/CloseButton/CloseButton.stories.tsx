import React from 'react';
import { Story } from '@storybook/react';
import { CloseButton as Component, CloseButtonProps } from './CloseButton';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<CloseButtonProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('stable');

const Template: Story<CloseButtonProps> = (args) => <Component {...args} />;

export const CloseButton = Template.bind({});
CloseButton.args = {};
