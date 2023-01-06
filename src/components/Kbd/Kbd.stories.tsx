import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Kbd as Component, KbdProps } from './Kbd';
import { Text } from '../Text';

export default RUIComponentMeta<KbdProps>('Components', Component);

export const Kbd = RUIComponentStory<KbdProps>((args) => (
  <Text>
    Use the keyboard combination <Component>⌘</Component> + <Component>shift</Component> + 
    <Component>M</Component> to do something amazing
  </Text>
));
