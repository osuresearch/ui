import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { SwitchIcon as Component, SwitchIconProps } from './SwitchIcon';

export default RUIComponentMeta<SwitchIconProps>('Internal', Component).withStyleSystemProps();

export const SwitchIcon = RUIComponentStory<SwitchIconProps>((args) => <Component {...args} />);
