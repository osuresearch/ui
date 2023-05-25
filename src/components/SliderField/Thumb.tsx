import React, { RefObject, useRef } from 'react';
import { SliderState } from 'react-stately';
import { AriaLabelingProps } from '@react-types/shared';
import { mergeProps, useFocusRing, useSliderThumb } from 'react-aria';
import { VisuallyHidden } from '../VisuallyHidden';
import { cx } from '../../utils';

export type ThumbProps = {
  index: number
  state: SliderState
  trackRef: RefObject<HTMLDivElement>
  ariaProps: AriaLabelingProps
}

/**
 * Controlled slot renderer for a slider input.
 *
 * @internal
 */
export function Thumb(props: ThumbProps) {
  const { state, trackRef, index, ariaProps } = props;

  const inputRef = useRef(null);

  const { thumbProps, inputProps, isDragging } = useSliderThumb({
    index,
    trackRef,
    inputRef,
    ...ariaProps
  }, state);

  const { focusProps, isFocusVisible } = useFocusRing();

  // thumbProps assigns style="absolute, transform, touch action"
  return (
    <div
      {...thumbProps}
      // TODO: Consolidate down to box w/h instead
      className={cx(
        'w-[20px] h-[20px]',
        'top-[50%]', // if horizontal. Use left: 50% if vertical.
        'border-2 border-primary rounded-full',
        { 'bg-input hover:bg-interactive-hover': !isDragging},
        { 'bg-interactive-active': isDragging },
        // { 'border-dimmed bg-light-shade': isDisabled }
        { 'ring focus-ring': isFocusVisible }
      )}
    >
      <VisuallyHidden>
        {/* inputProps assigns id, aria-labeledby, type=range,
            min, max, step, aria-orientation, aria-valuetext, value */}
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
}


