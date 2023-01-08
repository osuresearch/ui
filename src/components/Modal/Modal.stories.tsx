import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';
import { Text } from '~/components/Text';

import { Modal as Component, ModalProps } from './Modal';

export default RUIComponentMeta<ModalProps>('Internal', Component);

export const Modal = RUIComponentStory<ModalProps>(
  (args) => <Text>No example available</Text>
  // <Component {...args} state={{
  //   isOpen: false,
  //   setOpen: () => 0,
  //   open: () => 0,
  //   close: () => 0,
  //   toggle: () => 0,
  // }} overlayProps={{}}>Modal content</Component>
);
