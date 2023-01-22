import { Node } from '@react-types/shared';
import React, { createContext, forwardRef, useContext, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  useCheckboxGroup,
  useCheckboxGroupItem
} from 'react-aria';
import {
  CheckboxGroupState,
  ListProps,
  ListState,
  useCheckboxGroupState,
  useListState
} from 'react-stately';

import { CheckboxIcon } from '../CheckboxIcon';
import { FormField, FormFieldBase } from '../FormField';
import { Stack } from '../Stack';
import { ToggleField } from '../ToggleField';

export type CheckboxItem = {
  name?: string;
  label?: string;
  description?: string;
};

export type CheckboxSetFieldProps = FormFieldBase<string[]> &
  AriaCheckboxGroupProps &
  ListProps<CheckboxItem> & {
    label: React.ReactNode;
  };

const CheckboxSetContext = createContext<CheckboxGroupState & ListState<CheckboxItem>>(
  {} as CheckboxGroupState & ListState<CheckboxItem>
);

type GroupItemProps = AriaCheckboxGroupItemProps & {
  node: Node<CheckboxItem>;
};

function GroupItem({ node, ...props }: GroupItemProps) {
  const state = useContext(CheckboxSetContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled || state.disabledKeys.has(node.key);
  const isSelected = state.isSelected('' + node.key) || props.isIndeterminate;

  const { inputProps } = useCheckboxGroupItem(
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
      inputSlot={CheckboxIcon}
      inputProps={inputProps}
      isSelected={isSelected}
      isIndeterminate={props.isIndeterminate}
      isDisabled={isDisabled}
    />
  );
}

/**
 * Checkbox sets allow users to select multiple items from a list of options.
 * Can attach multiple `Key` atomics to a single field.
 *
 * <!-- @ruiAtomic Key -->
 */
export const CheckboxSetField = forwardRef<HTMLDivElement, CheckboxSetFieldProps>((props, ref) => {
  const listState = useListState(props);
  const groupState = useCheckboxGroupState(props);

  // TODO: Figure out how to merge listState and groupState.
  // I might just make everything a "list" behind the scenes.

  const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(
    props,
    groupState
  );

  return (
    <CheckboxSetContext.Provider value={{ ...listState, ...groupState }}>
      <FormField<string[]>
        wrapperProps={groupProps}
        labelAs="span"
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        {...props}
      >
        <Stack ref={ref}>
          {[...listState.collection].map((item) => {
            if (item.type === 'section') {
              return <div key={item.key}>TODO: section</div>;
            }

            return <GroupItem key={item.key} node={item} value={item.textValue} />;
          })}
        </Stack>
      </FormField>
    </CheckboxSetContext.Provider>
  );
});
