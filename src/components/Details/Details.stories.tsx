import React from 'react';
import { Story } from '@storybook/react';
import { Details as Component, DetailsProps } from './index';
import { RUIComponentMeta, RUIComponentStory } from '~/.storybook/utils';

export default RUIComponentMeta<DetailsProps>('Components', Component)
  .withStyleSystemProps()
  .withBadge('beta');

const Template: Story<DetailsProps> = (args: DetailsProps) => (
  <Component {...args}>Content to be revealed.</Component>
);

export const Details = Template.bind({});
Details.args = {
  summary: 'This is a Details disclosure element'
};
