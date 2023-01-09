import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { SwitchIcon as Component, SwitchIconProps } from './SwitchIcon';

export default RUIComponentMeta<SwitchIconProps>('Internal', Component).withStyleSystemProps();

export const SwitchIcon = RUIComponentStory<SwitchIconProps>((args) => <Component {...args} />);
