import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { RadioIcon as Component, RadioIconProps } from './RadioIcon';

export default RUIComponentMeta<RadioIconProps>('Internal', Component).withStyleSystemProps();

export const RadioIcon = RUIComponentStory<RadioIconProps>((args) => <Component {...args} />);
