import React, { useRef } from 'react';
import { useDateSegment } from 'react-aria';
import { DateFieldState, DateSegment as StatelyDateSegment } from 'react-stately';

import { cx } from '../../utils';
import { Text } from '../Text';

export type SegmentProps = {
  segment: StatelyDateSegment;
  state: DateFieldState;
};

/**
 * Internal component for rendering an input segment of a date field
 *
 * <!-- @ruiInternal -->
 */
export function DateSegment({ segment, state }: SegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <Text
      {...segmentProps}
      ref={ref}
      ta="right"
      style={{
        ...segmentProps.style,
        minWidth: segment.maxValue != null ? String(segment.maxValue).length + 'ch' : undefined
      }}
      className={cx(
        'box-content tabular-nums',
        'group',
        'outline-none focus:bg-interactive-active',
        {
          'text-interactive-disabled': !segment.isEditable
        }
      )}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className={cx(
          'block w-full text-center italic',
          'text-dark group-focus:text-neutral'
        )}
        style={{
          visibility: segment.isPlaceholder ? 'visible' : 'hidden',
          height: segment.isPlaceholder ? undefined : 0,
          pointerEvents: 'none'
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </Text>
  );
}
