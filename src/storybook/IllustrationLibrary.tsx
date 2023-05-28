
import React from 'react';
import { Icon } from '../components/Icon';
import { Text } from '../components/Text';
import { Stack } from '../components/Stack';
import { Group } from '../components/Group';

/**
 * Custom icon gallery component for Storybook to
 * automatically render a batch of icons from our library
 *
 * Note that this *must* be in JavaScript because
 * Storybook's components don't fully support React 18.
 */
export function IllustrationLibrary({ group }: { group: 'brand' | 'osu' | 'system' }) {

  // TODO: Intelligently generate this from the rui-illustration namespace
  const illustrations = {
    brand: [
      'rui-logo',
    ],
    osu: [
      'office-of-research-wordmark',
      'osu-blocko',
    ],
    system: [
      'error',
      'no-search-results',
      'not-found',
      'timeout',
      'unauthorized',
      'unavailable',
    ]
  };

  const config = {
    brand: {
      c: 'neutral',
    },
    osu: {},
    system: {
      c: 'clear',
      svgProps: {
        stroke: 'var(--rui-neutral)',
        strokeWidth: 1.5,
      }
    }
  };

  return (
    <Stack align="stretch">
      {illustrations[group].map((name) =>
        <Group key={name}>
          <Icon
            name={'rui-illustration:' + name}
            size={200}
            {...config[group]}
          />
          <Text>rui-illustration:{name}</Text>
        </Group>
      )}
    </Stack>
  );
}
