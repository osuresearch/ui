import { mergeProps } from '@react-aria/utils';
import React, { forwardRef, useRef } from 'react';
import { AriaCheckboxProps, useCheckbox, useFocusRing } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { CheckboxIcon } from '../CheckboxIcon';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ToggleField } from '../ToggleField';
import { VisuallyHidden } from '../VisuallyHidden';

export type CheckboxFieldDiffProps = {
  wasSelected?: boolean;
  showDiff?: boolean;
};

export type CheckboxFieldProps = StyleSystemProps &
  AriaCheckboxProps &
  CheckboxFieldDiffProps & {
    // Fields needed but omitted (unless in a group)
    // descriptionProps, errorMessageProps

    label: React.ReactNode;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
  };

/**
 * CheckboxField documentation
 *
 * ## Accessibility
 * - TODO: Checkbox itself does not have error/description support via React Aria.
 * Figure out why: https://react-spectrum.adobe.com/react-aria/useCheckbox.html
 */

/**
 * Checkboxes allow the user to toggle a single `Key` atomic.
 *
 * <!-- @ruiAtomic Key -->
 *
 * ## Accessibility
 *
 * - ARIA labeling and state are handled by
 *  [React Aria](https://react-spectrum.adobe.com/react-aria/useTextField.html).
 * - If `label` is omitted, an `aria-label` or `aria-labeledby` prop must
 *  be passed instead to identify the element for screen readers.
 */
export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ className, label, description, errorMessage, children, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const state = useToggleState(props);

    const { inputProps } = useCheckbox(props, state, inputRef);

    return (
      <ToggleField
        ref={mergeRefs(inputRef, ref)}
        label={label}
        labelProps={{}}
        description={description}
        descriptionProps={{}}
        errorMessage={errorMessage}
        errorMessageProps={{}}
        inputSlot={CheckboxIcon}
        inputProps={inputProps}
        isSelected={state.isSelected}
        isIndeterminate={props.isIndeterminate}
        isDisabled={props.isDisabled}
      />
    );
  }
);
