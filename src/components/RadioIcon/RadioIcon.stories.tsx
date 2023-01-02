import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { RadioIcon as Component, RadioIconProps } from './RadioIcon';

export default RUIComponentMeta<RadioIconProps>('Utilities', Component).withStyleSystemProps();

export const RadioIcon = RUIComponentStory<RadioIconProps>((args) => <Component {...args} />);
