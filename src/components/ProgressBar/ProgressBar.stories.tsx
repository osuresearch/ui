import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { ProgressBar, ProgressBarProps } from '.';

export default RUIComponentMeta<ProgressBarProps>('Components', ProgressBar);

const Template: Story<ProgressBarProps> = (args: ProgressBarProps) => (
  <ProgressBar {...args}>This is additional text about this message.</ProgressBar>
);

export const Overview = RUIComponentStory(Template, {
  label: 'Loading...',
  value: 80
});

export const LoadingContinuously = RUIComponentStory(Template, {
  label: 'Loading continuously...'
});
