import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { SplitButton, SplitButtonProps } from '../SplitButton';
import { Icon } from '../Icon';
import { Item } from 'react-stately';

export default {
  title: 'Buttons / SplitButton',
  ...RUIComponentMeta(SplitButton).withStyleSystemProps()
};

export const Overview = RUIComponentStory<SplitButtonProps>((args) => (
  <SplitButton {...args} label="Paste">
    <Item key="plain">Paste as plain text</Item>
    <Item key="markdown">Paste as markdown</Item>
  </SplitButton>
));

export const Primary = RUIComponentStory(Overview, {
  variant: 'primary'
}).withDescription(`
  Use a primary button to highlight the strongest call to action on a page.
  Primary buttons should only appear once per container and not every
  screen requires a primary button.
`);

export const Subtle = RUIComponentStory(Overview, {
  variant: 'subtle'
}).withDescription(`
  Use subtle buttons along with primary buttons for secondary actions,
  such as "Cancel".
`);

export const Disabled = RUIComponentStory(Overview, {
  isDisabled: true
});
