import { Story } from '@storybook/react';
import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { CloseButtonProps, CloseButton as Component } from './CloseButton';

export default RUIComponentMeta<CloseButtonProps>('Components', Component).withStyleSystemProps();

const Template: Story<CloseButtonProps> = (args) => <Component {...args} />;

export const CloseButton = Template.bind({});
CloseButton.args = {};
