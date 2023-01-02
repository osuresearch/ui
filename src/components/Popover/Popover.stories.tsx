import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Text } from '../Text';
import { Popover as Component, PopoverProps } from './Popover';

export default RUIComponentMeta<PopoverProps>('Utilities', Component);

export const Popover = RUIComponentStory<PopoverProps>((args) => (
  <Text>For examples, see Callout</Text>
));
