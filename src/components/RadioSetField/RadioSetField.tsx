import { Node } from '@react-types/shared';
import React, { createContext, forwardRef, useContext, useEffect, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaRadioGroupProps,
  useRadio,
  useRadioGroup
} from 'react-aria';
import {
  ListProps,
  RadioGroupState,
  useListState,
  useRadioGroupState
} from 'react-stately';

import { Box } from '../Box';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { RadioIcon } from '../RadioIcon';
import { Stack } from '../Stack';
import { ToggleField } from '../ToggleField';

export type RadioItem = {
  name?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export type GroupItemSlotProps = AriaCheckboxGroupItemProps & {
  node: Node<RadioItem>;
};

export type RadioSetFieldSlots = {
  /**
   * Slot for rendering each item in the radio set.
   *
   * Items must implement `useRadio` with the given props
   * and manage their own disabled / value states.
   */
  renderItem?: React.ElementType<GroupItemSlotProps>;
};

export type RadioSetFieldProps = FormFieldBase<string> &
  AriaRadioGroupProps &
  ListProps<RadioItem> &
  RadioSetFieldSlots & {
    itemLayout?: 'horizontal' | 'vertical';
  };

export const RadioSetContext = createContext<RadioGroupState>(
  {} as RadioGroupState
);

export function DefaultGroupItemSlot({ node, ...props }: GroupItemSlotProps) {
  const state = useContext(RadioSetContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled;

  const { inputProps, isSelected } = useRadio(
    {
      ...props,
      value: '' + node.key,
      isDisabled,
      children: node.rendered,
    },
    state,
    ref
  );

  console.log(props, inputProps);
  return (
    <ToggleField
      label={node.rendered}
      labelProps={{}}
      description={node.value?.description}
      descriptionProps={{}}
      errorMessage={undefined}
      errorMessageProps={{}}
      renderIcon={RadioIcon}
      inputProps={inputProps}
      isSelected={isSelected}
      isIndeterminate={props.isIndeterminate}
      isDisabled={isDisabled}
    />
  );
}

/**
 * Radio sets allow users to select a single item from a list of options.
 *
 * <!-- @ruiAtomic Key -->
 */
export const RadioSetField = forwardRef<HTMLDivElement, RadioSetFieldProps>((props, ref) => {
  const listState = useListState(props);
  const groupState = useRadioGroupState(props);

  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    groupState
  );

  // useRadioGroupState does not support changing value from a value to undefined.
  // So we utilize an effect hook to force a change if this component is being
  // controlled via `value`.
  useEffect(() => {
    groupState.setSelectedValue(props.value ?? '');
  }, [props.value])

  const RenderItem = props.renderItem ?? DefaultGroupItemSlot;

  return (
    <RadioSetContext.Provider value={groupState}>
      <FormField<string>
        wrapperProps={radioGroupProps}
        labelAs="span"
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        {...props}
      >
        <Box as={props.itemLayout === 'horizontal' ? Group : Stack} ref={ref}>
          {Array.from(listState.collection).map((item) => (
            <RenderItem key={item.key} node={item} value={item.textValue} />
          ))}
        </Box>
      </FormField>
    </RadioSetContext.Provider>
  );
});
