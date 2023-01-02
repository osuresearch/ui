import { mergeProps } from '@react-aria/utils';
import React from 'react';
import { useFocusRing } from 'react-aria';

import { cx } from '~/utils';

export type FocusRingProps = {
  /** Child element to apply CSS classes to. */
  children: React.ReactElement;

  /**
   * Whether to show the focus ring when something
   * inside the container element has focus (true), or
   * only if the container itself has focus (false).
   *
   * @default false
   */
  within?: boolean;

  /** Whether the element is a text input. */
  isTextInput?: boolean;

  /** Whether the element will be auto focused. */
  autoFocus?: boolean;
};

/**
 * A utility component that applies a visual ring around an element that has keyboard focus.
 *
 * Focus rings are only visible when interacting with a keyboard so as not to distract
 * mouse and touch screen users. When we are unable to detect if the user is using a mouse
 * or touch screen, such as switching in from a different tab, we show the focus ring.
 */
export function FocusRing(props: FocusRingProps) {
  const { children } = props;
  const { isFocused, isFocusVisible, focusProps } = useFocusRing(props);

  const child = React.Children.only(children);

  return React.cloneElement(
    child,
    mergeProps(child.props, {
      ...focusProps,
      className: cx({
        'rui-outline-none': isFocused,
        'rui-outline-none rui-ring-2 rui-ring-focus': isFocusVisible
      })
    })
  );
}
