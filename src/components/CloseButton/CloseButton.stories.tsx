import { RUIComponentMeta } from '@sb/utils';
import { Story } from '@storybook/react';
import React from 'react';

import { CloseButtonProps, CloseButton as Component } from './CloseButton';

export default RUIComponentMeta<CloseButtonProps>('Buttons', Component).withStyleSystemProps();

const Template: Story<CloseButtonProps> = (args) => <Component {...args} />;

export const CloseButton = Template.bind({});
CloseButton.args = {};
