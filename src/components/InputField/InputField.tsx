import { mergeProps } from '@react-aria/utils';
import React, { ForwardedRef, forwardRef, useRef } from 'react';
import { AriaTextFieldProps, useTextField } from 'react-aria';
import { useToggleState } from 'react-stately';

import { SlotProp, SlotPropWithRef, useSlots } from '~/hooks/useSlots';
import { useStyleSystemProps } from '~/hooks/useStyleSystemProps';
import { SlotType, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { Center } from '../Center';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type InputFieldSlots = {
  // inputSlot?: SlotPropWithRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>
  // ^ need to rewrite useSlots to support this.

  // Let's see if I can do it the unsafe way.
  // inputSlot?: SlotProp<
  //   React.InputHTMLAttributes<HTMLInputElement> &
  //   { ref: ForwardedRef<HTMLInputElement> }
  // >

  // inputSlot?: SlotProp<
  //   React.ComponentPropsWithoutRef<'input'> &
  //   { inputRef: React.ForwardedRef<HTMLInputElement>}
  // >;
  // inputSlot?: SlotProp<{} & React.ComponentPropsWithRef<'input'>>

  // Should SlotProp JUST BE a synonym for React.ComponentType?
  inputSlot?: SlotType<React.ComponentPropsWithRef<'input'>>;

  diffSlot?: SlotType<{ value?: string; previousValue?: string }>;
};

export type InputFieldDiffProps = {
  showDiff?: boolean;
  previousValue?: string;
};

export type InputFieldProps = StyleSystemProps &
  AriaTextFieldProps &
  InputFieldDiffProps &
  InputFieldSlots;

function MissingSlot() {
  return (
    <Text c="warning">
      <Icon name="exclamationCircle" /> No diff support.
    </Text>
  );
}

/**
 * Form field component that accepts `Text` atomics.
 *
 * <!-- @ruiAtomic foo -->
 * <!-- @ruiAtomic bar -->
 * <!-- @ruiStatus ready -->
 * <!-- @ruiPolymorphic -->
 *
 * ## Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a base for other specialized fields to implement.
 *
 * ## Accessibility
 *
 * - ARIA labeling and state are handled by
 *  [React Aria](https://react-spectrum.adobe.com/react-aria/useTextField.html).
 * - If `label` is omitted, an `aria-label` or `aria-labeledby` prop must
 *  be passed instead to identify the element for screen readers.
 *
 * ## Slots
 *
 * ### Input Slot
 * - Slot for the underlying `<input>` element
 * - Receives all necessary `<input>` attributes for data binding and a11y
 * - Must accept an `HTMLInputElement` forwarded ref for the input
 *
 * ### Diff Slot
 * - Slot for rendering the diff between a previous and current value
 * - Receives previous and current value as `string`
 */
export const InputField = forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const { className, label, description, errorMessage } = props;
  const styleSystemProps = useStyleSystemProps(props);

  const inputRef = useRef<HTMLInputElement>(null);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    props,
    inputRef
  );

  // const { focusProps, isFocusVisible } = useFocusRing();

  const InputSlot = props.inputSlot || 'input';
  const DiffSlot = props.diffSlot || MissingSlot;

  return (
    <Stack className={className} {...styleSystemProps}>
      <Text as="label" {...labelProps}>
        {label}
      </Text>

      <InputSlot {...inputProps} ref={mergeRefs(inputRef, ref)} />

      {description && (
        <Text c="dark" fs="sm" {...descriptionProps}>
          {description}
        </Text>
      )}

      {errorMessage && (
        <Text c="error" fs="sm" {...errorMessageProps}>
          <Icon name="xmarkCircle" /> {errorMessage}
        </Text>
      )}

      {props.showDiff && <DiffSlot value={props.value} previousValue={props.previousValue} />}
    </Stack>
  );
});
