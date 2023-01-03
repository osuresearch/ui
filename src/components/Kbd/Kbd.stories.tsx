import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Kbd as Component, KbdProps } from './Kbd';

export default RUIComponentMeta<KbdProps>('Components', Component);

export const Kbd = RUIComponentStory<KbdProps>((args) => (
  <>
    <Component>⌘</Component> + <Component>shift</Component> + <Component>M</Component>
  </>
));
