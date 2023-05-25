import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Text } from '../Text';

export type DetailsProps = StyleSystemProps & {
  summary: React.ReactNode;
  children: React.ReactNode;
};

/**
 * A native HTML disclosure widget in which information is visible only
 * when the widget is toggled into an open state.
 *
 * ## Accessibility
 *
 * - Root is the semantic `<details>` element with the summary wrapped with `<summary>`
 */
export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(
  ({ summary, children, ...props }, ref) => (
    <Box
      as="details"
      ref={ref}
      bgc="surface"
      className={cx(
        'group',
        'border-b-2',
        'border-surface-bold'
      )}
      {...props}
    >
      <FocusRing>
        <Group
          as="summary"
          fw="bold"
          p="md"
          gap="xs"
          className={cx(
            'border-t-2',
            'border-surface-bold',
            'hover:bg-interactive-subtle-hover focus:bg-interactive-subtle-hover group-open:bg-interactive-subtle-hover',
            'details'
          )}
        >
          <Icon
            name="chevron"
            c={{
              light: 'primary',
              dark: 'white'
            }}
            className="group-open:rotate-90 transition-transform"
            size={24}
          />
          <Text>{summary}</Text>
        </Group>
      </FocusRing>
      <Box p="sm" pl="xxl">
        {children}
      </Box>
    </Box>
  )
);
