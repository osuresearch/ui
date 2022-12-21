import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Icon } from '../Icon';
import { Text } from '../Text/Text';
import { Input, InputProps } from './index';

export default {
  title: 'utilities/Input',
  component: Input,
  argTypes: {}
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-story',
  label: 'Form Input Label',
  help: 'Helper Text',
  error: 'Error helper text',
  placeholder: 'Placeholder Text (Optional)'
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  id: 'left-icon-story',
  label: 'Enter your GitHub username',
  leftContent: <Icon name="github" size={24} className="p-xs" />,
  leftWidth: 32
};

export const WithRightContent = Template.bind({});
WithRightContent.args = {
  id: 'right-content-story',
  label: 'Enter your OSU email address',
  rightContent: <Text className="p-4">@osu.edu</Text>,
  rightWidth: 80
};
