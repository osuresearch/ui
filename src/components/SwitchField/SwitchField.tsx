import React, { forwardRef, useRef } from 'react';
import { AriaSwitchProps, useSwitch } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '../../types';
import { FormFieldBase } from '../FormField';
import { SwitchIcon } from '../SwitchIcon';
import { ToggleField } from '../ToggleField';

export type SwitchFieldProps = FormFieldBase<boolean>;

/**
 * A switch is similar to a checkbox, but represents on/off values
 * as opposed to selection.
 *
 * <!-- @ruiAtomic Boolean -->
 *
 * ## Accessibility
 *
 * - ARIA labeling and state are handled by
 *  [React Aria](https://react-spectrum.adobe.com/react-aria/useSwitch.html).
 * - If `label` is omitted, an `aria-label` or `aria-labeledby` prop must
 *  be passed instead to identify the element for screen readers.
 */
export const SwitchField = forwardRef<HTMLInputElement, SwitchFieldProps>(
  ({ label, description, errorMessage, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { value, defaultValue, ...other } = props;

    const state = useToggleState({
      ...other,
      isSelected: value,
      defaultSelected: defaultValue
    });

    const { inputProps } = useSwitch(
      {
        ...other,
        isSelected: value,
        defaultSelected: defaultValue,
        children: label,
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
        inputSlot={SwitchIcon}
        inputProps={inputProps}
        isSelected={state.isSelected}
        isDisabled={props.isDisabled}
      />
    );
  }
);
