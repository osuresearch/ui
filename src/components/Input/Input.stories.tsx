import React from 'react';

import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { UnstyledButton } from '../UnstyledButton';
import { Input, InputProps } from './Input';

// Specifying an explicit prop union so that Storybook
// can understand child props for the default implementation
type Props = InputProps & React.ComponentPropsWithoutRef<'input'>;

export default RUIComponentMeta<Props>('Internal', Input).withStyleSystemProps();

export const Overview = RUIComponentStory<Props>((args) => <Input {...args} />, {
  defaultValue: 'Hello world!'
});

export const Placeholder = RUIComponentStory(Overview, {
  placeholder: 'Enter your email address'
});

export const Error = RUIComponentStory(Overview, {
  'defaultValue': 'Hello world!',
  'aria-invalid': true
});

export const ReadOnly = RUIComponentStory(Overview, {
  defaultValue: 'Hello world!',
  readOnly: true
});

export const Disabled = RUIComponentStory(Overview, {
  defaultValue: 'Hello world!',
  disabled: true
});

export const WithLeftSlot = RUIComponentStory(Overview, {
  leftContent: <Icon c="light-contrast" name="github" size={22} p="xs" />,
  leftWidth: 36,
  placeholder: 'Your GitHub username'
});

export const WithRightSlot = RUIComponentStory(Overview, {
  rightContent: (
    <Text as="div" py="xxs" pr="xs">
      @osu.edu
    </Text>
  ),
  rightWidth: 80,
  placeholder: 'buckeye.1'
});

export const WithButton = RUIComponentStory(Overview, {
  leftContent: <Icon c="dark" name="search" size={15} p="sm" />,
  leftWidth: 36,
  rightContent: (
    <UnstyledButton bgc="light-shade" h="full" px="sm">
      Search
    </UnstyledButton>
  ),
  rightWidth: 80,
  placeholder: 'buckeye.1'
});

export const Polymorphic = RUIComponentStory<InputProps>((args) => (
  <Input as="button" {...args} onClick={(e) => alert('Clicked button!')}>
    Button
  </Input>
));

export const DisabledPolymorphic = RUIComponentStory<InputProps>((args) => (
  <Input as="button" disabled {...args} onClick={(e) => alert('Clicked button!')}>
    Disabled button
  </Input>
));

export const ErrorPolymorphic = RUIComponentStory<InputProps>((args) => (
  <Input as="button" aria-invalid {...args} onClick={(e) => alert('Clicked button!')}>
    Invalid button
  </Input>
));
