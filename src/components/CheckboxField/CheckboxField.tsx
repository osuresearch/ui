import React, { forwardRef, useRef } from 'react';
import { useCheckbox } from 'react-aria';
import { useToggleState } from 'react-stately';

import { CheckboxIcon } from '../CheckboxIcon';
import { FormFieldBase } from '../FormField';
import { ToggleField } from '../ToggleField';

export type CheckboxFieldDiffProps = {
  wasSelected?: boolean;
  showDiff?: boolean;
};

export type CheckboxFieldProps = FormFieldBase<boolean> & {
  /**
   * Indeterminism is presentational only.
   * The indeterminate visual representation remains regardless of user interaction.
   */
  isIndeterminate?: boolean;
};

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
  ({ label, description, errorMessage, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { value, defaultValue, ...other } = props;

    const state = useToggleState({
      ...other,
      isSelected: value,
      defaultSelected: defaultValue
    });

    const { inputProps } = useCheckbox(
      {
        ...other,
        isSelected: value,
        defaultSelected: defaultValue
      },
      state,
      inputRef
    );

    return (
      <ToggleField
        ref={ref}
        label={label}
        labelProps={{}}
        description={description}
        descriptionProps={{}}
        errorMessage={errorMessage}
        errorMessageProps={{}}
        inputSlot={CheckboxIcon}
        inputProps={inputProps}
        isSelected={state.isSelected}
        isDisabled={props.isDisabled}
        isIndeterminate={props.isIndeterminate}
      />
    );
  }
);
