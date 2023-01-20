import { mergeProps } from '@react-aria/utils';
import { CollectionChildren, FocusableElement, Node } from '@react-types/shared';
import React, {
  Children,
  DOMAttributes,
  createContext,
  forwardRef,
  useContext,
  useRef
} from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  AriaCheckboxProps,
  TextFieldAria,
  useCheckboxGroup,
  useCheckboxGroupItem,
  useFocusRing
} from 'react-aria';
import { CheckboxGroupState, useCheckboxGroupState, useCollection } from 'react-stately';

import { useStyleSystemProps } from '~/hooks/useStyleSystemProps';
import { AriaNecessityIndicator, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { CheckboxIcon } from '../CheckboxIcon';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { MissingSlot, makeMissingSlot } from '../MissingSlot';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

type SlotType<P = Record<string, never>> = React.ComponentType<P>;

export type ToggleFieldSlots = {
  inputSlot: SlotType<{
    isSelected?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isFocusVisible?: boolean;
  }>;

  diffSlot?: SlotType<{
    isSelected?: boolean;
    wasSelected?: boolean;
  }>;
};

export type ToggleFieldDiffProps = {
  showDiff?: boolean;
  previousValue?: boolean;
};

export type ToggleFieldProps = StyleSystemProps &
  ToggleFieldSlots &
  ToggleFieldDiffProps &
  Pick<
    TextFieldAria<'input'>,
    'inputProps' | 'labelProps' | 'descriptionProps' | 'errorMessageProps'
  > &
  AriaCheckboxProps & // Checkbox covers both AriaToggleProps + isIndeterminate
  AriaNecessityIndicator & {
    label: React.ReactNode;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
  };

/**
 * Form field component that accepts `Text` or `Boolean` atomics.
 *
 * <!-- @ruiAtomic Text -->
 * <!-- @ruiAtomic Boolean -->
 *
 * <img class="rui-diagram" src="./ToggleField.svg" alt="Component diagram" />
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
 * - Slot for rendering the current toggle state
 *
 * ### Diff Slot
 * - Slot for rendering the diff between a previous and current value
 * - Receives previous and current value for comparison
 */
export const ToggleField = forwardRef<HTMLInputElement, ToggleFieldProps>((props, ref) => {
  const { className, label, description, errorMessage, necessityIndicator } = props;

  // State information is passed through so that the same field
  // can be used with different React Aria hooks.
  // E.g. checkbox groups vs list groups which have subtle differences.
  const { isSelected, isIndeterminate, isDisabled } = props;

  const { focusProps, isFocusVisible } = useFocusRing(props.inputProps);
  const [styleSystemProps] = useStyleSystemProps(props);

  const InputSlot = props.inputSlot || makeMissingSlot('input');
  const DiffSlot = props.diffSlot || makeMissingSlot('diff');

  return (
    <Group as="label" className={className} {...styleSystemProps}>
      <VisuallyHidden>
        <input {...mergeProps(props.inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>

      <InputSlot
        isSelected={isSelected}
        isIndeterminate={isIndeterminate}
        isDisabled={isDisabled}
        isFocusVisible={isFocusVisible}
      />

      {props.showDiff && (
        <DiffSlot isSelected={props.isSelected} wasSelected={props.previousValue} />
      )}

      <Stack>
        <Text {...props.labelProps}>
          {label}
          {necessityIndicator && <NecessityIndicator />}
        </Text>

        {description && (
          <Text c="dark" fs="sm" {...props.descriptionProps}>
            {description}
          </Text>
        )}

        {errorMessage && (
          <Text c="error" fs="sm" {...props.errorMessageProps}>
            <Icon name="xmarkCircle" /> {errorMessage}
          </Text>
        )}
      </Stack>
    </Group>
  );
});
