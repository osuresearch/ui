import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { Popover as Component, PopoverProps } from './Popover';

export default {
  title: 'Internal / Popover',
  ...RUIComponentMeta(Component)
};

export const Popover = RUIComponentStory<PopoverProps>(() => (
  <Text>Popover cannot be used directly. See Callout for a component that uses the popover</Text>
));
