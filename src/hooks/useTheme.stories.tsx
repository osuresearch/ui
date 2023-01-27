import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import { Meta, Story } from '@storybook/react';
import React, { PropsWithChildren, useState } from 'react';

import { Button, Code, Divider, Group, Stack } from '../components';
import { useTheme } from './useTheme';

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

type DemoProps = {
  totalPages: number;
  initialPage: number;
  pageNumbersCount: number;
};

/**
 * Notes here?
 */
const Demo = ({ totalPages, initialPage, pageNumbersCount }: DemoProps) => {
  const data = useTheme();

  return (
    <Stack bgc="light-tint" p="md">
      <Code>{JSON.stringify(data, null, 2)}</Code>

      <Group>
        <Button onPress={() => data.setTheme('light')}>.setTheme(&quot;light&quot;)</Button>
        <Button onPress={() => data.setTheme('dark')}>.setTheme(&quot;dark&quot;)</Button>
      </Group>
    </Stack>
  );
};

export const Example: Story<DemoProps> = (args) => (
  <RenderingControls>
    <Demo {...args} />
  </RenderingControls>
);

export default {
  title: 'Hooks/useTheme',
  component: useTheme,
  argTypes: {
    totalPages: {
      control: {
        type: 'number'
      },
      defaultValue: 10
    },
    initialPage: {
      control: {
        type: 'number'
      },
      defaultValue: 1
    },
    pageNumbersCount: {
      control: {
        type: 'number'
      },
      defaultValue: 5
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};
