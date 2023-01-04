
import React from 'react';
import { Icon } from '~/components/Icon';
import { Text } from '~/components/Text';
import { Stack } from '~/components/Stack';
import { Group } from '~/components/Group';

import { groups } from '~/icons';

/**
 * Custom icon gallery component for Storybook to
 * automatically render a batch of icons from our library
 *
 * Note that this *must* be in JavaScript because
 * Storybook's components don't fully support React 18.
 */
export function IllustrationLibrary({ group }) {

  // TODO: Intelligently generate this from the rui-illustration namespace
  const illustrations = {
    brand: [
      'office-of-research-wordmark',
      'osu-logo-blocko',
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
      c: 'light-contrast',
    },
    system: {
      c: 'clear',
      svgProps: {
        stroke: 'var(--rui-dark)',
        strokeWidth: 1.5,
      }
    }
  };

  return (
    <Stack>
      {illustrations[group].map(name =>
        <Group>
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