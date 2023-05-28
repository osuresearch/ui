import { RUIComponentMeta, RUIComponentStory } from '@sb/utils';
import React from 'react';

import { Group } from '../Group';
import { Heading } from '../Heading';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Icon as Component, IconProps } from './Icon';

export default {
  title: 'Components / Icon',
  ...RUIComponentMeta(Component).withStyleSystemProps()
};

export const Overview = RUIComponentStory<IconProps>(
  (args) => <Component {...args} aria-label="example icon" />,
  {
    name: 'heart',
    size: 100
  }
);

export const Inline = RUIComponentStory<IconProps>(
  (args) => (
    <Text>
      This is an example of the
      <Component {...args} aria-label="example inline icon" />
      icon inline with text
    </Text>
  ),
  {
    name: 'thumbs'
  }
);

export const Block = RUIComponentStory<IconProps>(
  (args) => (
    <Text>
      Icons can be set to block display
      <Component {...args} block aria-label="example block icon" />
      to break content or center align within a container
    </Text>
  ),
  {
    name: 'thumbs',
    size: 24,
    block: true
  }
);

export const Colors = RUIComponentStory<IconProps>(
  (args) => (
    <Group align="center">
      <Component {...args} name="sun" c={{ light: 'accent01', dark: 'accent02' }} aria-label="sun icon" />
      <Component {...args} name="exclamationCircle" c="critical" aria-label="critical icon" />
      <Component {...args} name="code" c="neutral-subtle" aria-label="code icon" />
      <Component
        {...args}
        name="facebook"
        style={{ color: '#4267B2' }}
        aria-label="facebook icon"
      />

      <Paper bgc="black" p="xs" rounded="lg" aria-label="tiktok icon">
        <Component {...args} name="tiktok" style={{ color: '#00f7ef' }} />
        <Component
          {...args}
          name="tiktok"
          style={{
            color: '#ff004f',
            position: 'absolute',
            top: 4,
            left: 4,
            mixBlendMode: 'plus-lighter'
          }}
        />
      </Paper>
    </Group>
  ),
  {
    size: 64
  }
).withDescription('Icons can be colored through the `c` prop.');

export const SVGManipulation = RUIComponentStory<IconProps>(
  (args) => <Component {...args} block aria-label="example icon" />,
  {
    name: 'eyeSlash',
    size: 200,
    c: 'white',
    block: true,
    svgProps: {
      stroke: 'var(--rui-black)',
      strokeWidth: 0.3,
      overflow: 'visible'
    }
  }
).withDescription('Use `svgProps` to spread properties directly onto the inner svg element');

export const Illustrations = RUIComponentStory<IconProps>(
  (args) => (
    <Stack align="center">
      <Component {...args} />
      <Heading level={3}>Error 500: Internal server error</Heading>
      <Text>Something went wrong. Please try again later.</Text>
    </Stack>
  ),
  {
    name: 'rui-illustration:error',
    size: 200,
    block: true,
    c: 'clear',
    svgProps: {
      stroke: 'var(--rui-critical)'
    }
  }
).withDescription('SVG illustrations can be combined with text for large placeholders');
