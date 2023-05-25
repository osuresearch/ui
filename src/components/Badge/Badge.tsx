import React, { forwardRef } from 'react';

import { Color } from '../../theme';
import { ThemeProp } from '../../types';
import { cx } from '../../utils';
import { Box } from '../Box';
import { Group } from '../Group';

export type BadgeProps = {
  /**
   * Total count to display.
   *
   * If the count exceeds `maxCount` then the badge
   * will display the max count.
   *
   * If the count is `0`, the badge will not be displayed.
   */
  count?: number;

  maxCount?: number;

  c?: ThemeProp<Color>;

  /** Apply an animation to get the user's attention */
  ping?: boolean;

  /**
   * Element to attach the badge to
   */
  children?: React.ReactNode;
};

/**
 * A small indicator to the top right of its children.
 *
 * ## Accessibility
 * - `ping` animation is not displayed when reduced motion is enabled.
 * - TODO: How should badges be read to SR?
 */
export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ c = 'primary', count, ping = false, maxCount = 99, children }, ref) => (
    <div className="inline-block relative" ref={ref}>
      {children}
      {count !== 0 && ( // Hide badge on 0
        <div
          className={cx(
            'absolute flex justify-center pointer-events-none',
            { '-right-8 -top-8': count === undefined },
            { '-right-8 -top-12': count !== undefined }
          )}
        >
          {ping && (
            <Box
              bgc={c}
              h="100%"
              w="100%"
              className={cx(
                // Surrounding animation
                'motion-safe:animate-ping absolute inline-flex rounded-full opacity-75'
              )}
            />
          )}
          <Box
            bgc={c}
            w={16}
            mih={16}
            miw="fit-content"
            c={`${c}-inverse` as Color}
            fs="xs"
            fw="semibold"
            className={cx(
              'rounded-full inline-block',
              'border-2 border-surface',
              'z-0'
            )}
          >
            {count !== undefined && (
              <Group align="center" justify="center" px="xs" gap="xxs">
                {count > maxCount && `${maxCount}+`}
                {count <= maxCount && count}
              </Group>
            )}
          </Box>
        </div>
      )}
    </div>
  )
);
