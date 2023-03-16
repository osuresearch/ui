import { Node } from '@react-types/shared';
import React, { createContext, forwardRef, useContext, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaRadioGroupProps,
  useRadio,
  useRadioGroup
} from 'react-aria';
import {
  ListProps,
  ListState,
  RadioGroupState,
  useListState,
  useRadioGroupState
} from 'react-stately';

import { SlotProp, useSlots } from '../../hooks/useSlots';
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
  itemSlot?: SlotProp<GroupItemSlotProps>;
};

export type RadioSetFieldProps = FormFieldBase<string> &
  AriaRadioGroupProps &
  ListProps<RadioItem> &
  RadioSetFieldSlots & {
    itemLayout?: 'horizontal' | 'vertical';
  };

export const RadioSetContext = createContext<RadioGroupState & ListState<RadioItem>>(
  {} as RadioGroupState & ListState<RadioItem>
);

export function DefaultGroupItemSlot({ node, ...props }: GroupItemSlotProps) {
  const state = useContext(RadioSetContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled || state.disabledKeys.has(node.key);

  const { inputProps, isSelected } = useRadio(
    {
      ...props,
      value: '' + node.key,
      isDisabled
    },
    state,
    ref
  );

  return (
    <ToggleField
      label={node.rendered}
      labelProps={{}}
      description={node.value?.description}
      descriptionProps={{}}
      errorMessage={undefined}
      errorMessageProps={{}}
      inputSlot={RadioIcon}
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

  const { itemSlot } = useSlots(props);
  const ItemSlot = itemSlot ?? DefaultGroupItemSlot;

  return (
    <RadioSetContext.Provider value={{ ...listState, ...groupState }}>
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
            <ItemSlot key={item.key} node={item} value={item.textValue} />
          ))}
        </Box>
      </FormField>
    </RadioSetContext.Provider>
  );
});
