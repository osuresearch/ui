import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { ProgressBar, ProgressBarProps } from '.';
import { Stack } from '../Stack';
import { Button } from '../Button';

export default RUIComponentMeta<ProgressBarProps>('Components', ProgressBar);

const Template: Story<ProgressBarProps> = (args: ProgressBarProps) => <ProgressBar {...args} />;

export const Overview = RUIComponentStory(Template, {
  label: 'Loading...',
  value: 80
});

export const Controlled = RUIComponentStory<ProgressBarProps>((args) => {
  const [percentComplete, setPercentComplete] = useState<number>(0);

  useEffect(() => {
    if (percentComplete >= 100) {
      return;
    }

    const handle = setTimeout(
      () => setPercentComplete(percentComplete + 5),
      500
    );

    return () => clearInterval(handle);
  }, [percentComplete]);

  return (
    <Stack>
      <ProgressBar {...args} value={percentComplete} />
      <Button onPress={() => setPercentComplete(0)}>Reset</Button>
    </Stack>
  )
}, {
  label: 'Loading...'
}).withDescription(`
  Set \`value\` between \`minValue\` and \`maxValue\` to update the displayed progress.
`);

export const Indeterminate = RUIComponentStory(Template, {
  label: 'Loading indeterminately...'
}).withDescription(`
  If no \`value\` prop is provided then the progress bar will behave as an indeterminate loader.
`);
