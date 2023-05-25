import React, { PropsWithChildren, useState } from 'react';

import { Button, Code, Divider, Group, Stack } from '../components';
import { useTheme } from './useTheme';
import { Story } from '@storybook/react';

const RenderingControls = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  const [key, setKey] = useState(1);
  const [, setRerender] = useState(1);

  // Hook rerender/remount concept via
  // https://farrant.me/posts/documenting-react-hooks-with-storybook
  return (
    <div key={key}>
      <Group>
        <Button onPress={() => setRerender((x) => x + 1)}>Rerender Hook</Button>
        <Button onPress={() => setKey((x) => x + 1)}>Remount Hook</Button>
      </Group>
      <Divider />

      {children}
    </div>
  );
};

const Demo = () => {
  const data = useTheme();

  return (
    <Stack bgc="surface" p="md">
      <Code>{JSON.stringify(data, null, 2)}</Code>

      <Group>
        <Button onPress={() => data.setTheme('light')}>.setTheme(&quot;light&quot;)</Button>
        <Button onPress={() => data.setTheme('dark')}>.setTheme(&quot;dark&quot;)</Button>
      </Group>
    </Stack>
  );
};

export const Example: Story = () => (
  <RenderingControls>
    <Demo />
  </RenderingControls>
);

export default {
  title: 'Hooks/useTheme',
  component: useTheme,
  argTypes: {},
  parameters: {
    controls: { expanded: true }
  }
};
