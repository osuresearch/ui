import React, { forwardRef, useRef } from 'react';
import { AriaRadioGroupProps, VisuallyHidden, useRadio, useRadioGroup } from 'react-aria';
import { RadioGroupState, useRadioGroupState } from 'react-stately';

import { AriaNecessityIndicator, StyleSystemProps } from '../../types';
import { Button } from '../Button';
import { Divider } from '../Divider';
import { Group } from '../Group';
import { InputField } from '../InputField';

export type YesNoDiffProps = {
  showDiff?: boolean;
  previousValue?: string;
};

export type YesNoFieldProps = StyleSystemProps &
  AriaRadioGroupProps &
  AriaNecessityIndicator &
  YesNoDiffProps & {
    label: React.ReactNode;
  };

type OptionProps = {
  label: string;
  value: string;
  state: RadioGroupState;
};

function Option({ label, value, state }: OptionProps) {
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled;

  const { inputProps, isSelected } = useRadio(
    {
      value: '' + value,
      isDisabled
    },
    state,
    ref
  );

  return (
    <Button as="label" variant={isSelected ? 'primary' : 'default'} isDisabled={isDisabled}>
      <VisuallyHidden>
        <input {...inputProps} />
      </VisuallyHidden>
      {label}
    </Button>
  );
}

/**
 * A specialized radio set with Yes and No toggle buttons.
 *
 * <!-- @ruiAtomic Boolean -->
 */
export const YesNoField = forwardRef<HTMLDivElement, YesNoFieldProps>((props, ref) => {
  const state = useRadioGroupState(props);

  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    state
  );

  return (
    <InputField
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <Group {...radioGroupProps} ref={ref} gap={0}>
        <Option label="Yes" state={state} value="1" />
        <Divider orientation="vertical" />
        <Option label="No" state={state} value="0" />
      </Group>
    </InputField>
  );
});
