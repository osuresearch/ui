import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { ProgressBar, ProgressBarProps } from '.';

export default RUIComponentMeta<ProgressBarProps>('Components', ProgressBar);

const Template: Story<ProgressBarProps> = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Overview = RUIComponentStory(Template, {
  label: 'Loading...',
  value: 80
});

export const Continuously = RUIComponentStory(Template, {
  label: 'Loading continuously...'
  // Didn't give a value on purpose to demo the animated ProgressBar
});

export const Indeterminate = RUIComponentStory(Template, {
  label: 'Loading indeterminately...'
  // Didn't give a value on purpose to demo the animated ProgressBar
});
