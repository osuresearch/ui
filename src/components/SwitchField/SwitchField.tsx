import React, { forwardRef, useRef } from 'react';
import { AriaSwitchProps, useSwitch } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '~/types';

import { SwitchIcon } from '../SwitchIcon';
import { ToggleField } from '../ToggleField';

export type SwitchFieldDiffProps = {
  wasSelected?: boolean;
  showDiff?: boolean;
};

export type SwitchFieldProps = StyleSystemProps &
  AriaSwitchProps &
  SwitchFieldDiffProps & {
    label: React.ReactNode;
    description?: React.ReactNode;
    errorMessage?: React.ReactNode;
  };

/**
 * Form field component that accept a single `Boolean` atomic.
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
  ({ className, label, description, errorMessage, children, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const state = useToggleState(props);

    const { inputProps } = useSwitch(props, state, inputRef);

    return (
      <ToggleField
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
