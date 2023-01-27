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

import { FormField, FormFieldBase } from '../FormField';
import { RadioIcon } from '../RadioIcon';
import { Stack } from '../Stack';
import { ToggleField } from '../ToggleField';

export type RadioItem = {
  name?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export type RadioSetFieldProps = FormFieldBase &
  AriaRadioGroupProps &
  ListProps<RadioItem> & {
    label: React.ReactNode;
  };

const RadioSetContext = createContext<RadioGroupState & ListState<RadioItem>>(
  {} as RadioGroupState & ListState<RadioItem>
);

type GroupItemProps = AriaCheckboxGroupItemProps & {
  node: Node<RadioItem>;
};

export function GroupItem({ node, ...props }: GroupItemProps) {
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

  // TODO: Figure out how to merge listState and groupState.
  // I might just make everything a "list" behind the scenes.

  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(
    props,
    groupState
  );

  return (
    <RadioSetContext.Provider value={{ ...listState, ...groupState }}>
      <FormField
        wrapperProps={radioGroupProps}
        labelAs="span"
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        {...props}
      >
        <Stack ref={ref}>
          {[...listState.collection].map((item) => (
            <GroupItem key={item.key} node={item} value={item.textValue} />
          ))}
        </Stack>
      </FormField>
    </RadioSetContext.Provider>
  );
});
