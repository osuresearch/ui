import { mergeProps } from '@react-aria/utils';
import { DOMAttributes, FocusableElement } from '@react-types/shared';
import React, { ForwardedRef, forwardRef } from 'react';
import { AriaTextFieldProps, useFocusRing } from 'react-aria';

import { useStyleSystemProps } from '~/hooks/useStyleSystemProps';
import { AriaNecessityIndicator, SlotType, StyleSystemProps } from '~/types';

import { Icon } from '../Icon';
import { makeMissingSlot } from '../MissingSlot';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type InputSlotProps<T> = React.InputHTMLAttributes<T> &
  DOMAttributes<FocusableElement> & {
    ref: React.ForwardedRef<T>;
  };

export type InputFieldSlots<T> = {
  inputSlot?: SlotType<InputSlotProps<T>>;

  diffSlot?: SlotType<{ value?: string; previousValue?: string }>;
};

export type InputFieldDiffProps = {
  showDiff?: boolean;
  previousValue?: string;
};

export type InputFieldProps<T = HTMLInputElement> = StyleSystemProps &
  AriaTextFieldProps &
  AriaNecessityIndicator &
  InputFieldDiffProps &
  InputFieldSlots<T> & {
    // NOTE: This is essentially: Pick<TextFieldAria<'input'>, 'inputProps' | 'labelProps' | 'descriptionProps' | 'errorMessageProps'>
    // But accepting either input type.

    /** Props for the input element. */
    inputProps: React.HTMLAttributes<T>;

    /** Props for the text field's visible label element */
    labelProps: DOMAttributes<FocusableElement> | React.LabelHTMLAttributes<HTMLLabelElement>;

    /** Props for the text field's description element */
    descriptionProps: DOMAttributes;

    /** Props for the text field's error message element */
    errorMessageProps: DOMAttributes;
  };

function _InputField<T>(props: InputFieldProps<T>, ref: ForwardedRef<T>) {
  const { className, label, description, errorMessage } = props;
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = props;

  const [styleSystemProps] = useStyleSystemProps(props);
  const { focusProps } = useFocusRing();

  const InputSlot = props.inputSlot || makeMissingSlot('input');
  const DiffSlot = props.diffSlot || makeMissingSlot('diff');

  return (
    <Stack className={className} {...styleSystemProps}>
      <Text as="label" {...labelProps}>
        {label}
        {props.necessityIndicator && <NecessityIndicator />}
      </Text>

      <InputSlot ref={ref} {...mergeProps(inputProps, focusProps)} />

      {props.showDiff && <DiffSlot value={props.value} previousValue={props.previousValue} />}

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
    </Stack>
  );
}

/**
 * Base for a form field component
 *
 * ## 🛑 Disclaimer
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
 * - Slot for the underlying input element
 * - Receives all necessary attributes for data binding and a11y
 * - The generic type of `InputField` determines which ref type is allowed
 * to be passed through the slot. This does not require an `InputHTMLAttributes`
 * concrete, but it is recommended.
 *
 * ### Diff Slot
 * - Slot for rendering the diff between a previous and current value
 * - Receives previous and current value as `string`
 */
export const InputField = forwardRef(_InputField) as <T>(
  props: InputFieldProps<T> & { ref?: ForwardedRef<T> }
) => ReturnType<typeof _InputField>;
