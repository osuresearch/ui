import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Text } from '../Text';
import { Kbd as Component, KbdProps } from './Kbd';

export default RUIComponentMeta<KbdProps>('Components', Component);

export const Kbd = RUIComponentStory<KbdProps>(() => (
  <Text>
    Use the keyboard combination <Component>⌘</Component> + <Component>shift</Component> +
    <Component>M</Component> to do something amazing
  </Text>
));
