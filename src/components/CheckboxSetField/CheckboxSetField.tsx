import { Node, CollectionBase } from '@react-types/shared';
import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  AriaCheckboxGroupItemProps,
  AriaCheckboxGroupProps,
  useCheckboxGroup,
  useCheckboxGroupItem
} from 'react-aria';
import {
  CheckboxGroupState,
  ListState,
  useCheckboxGroupState,
  useListState
} from 'react-stately';

import { CheckboxIcon } from '../CheckboxIcon';
import { FormField, FormFieldBase } from '../FormField';
import { Stack } from '../Stack';
import { ToggleField } from '../ToggleField';

export type CheckboxItem = {
  name: string;
  label: string;
  description?: string;
};

export type CheckboxSetFieldProps = FormFieldBase<string[]> &
  AriaCheckboxGroupProps &
  CollectionBase<CheckboxItem> & {
    /** Content to render when there are no options available */
    placeholder?: React.ReactNode
  }

const CheckboxSetContext = createContext<CheckboxGroupState>(
  {} as CheckboxGroupState
);

type GroupItemProps = AriaCheckboxGroupItemProps & {
  node: Node<CheckboxItem>;
};

function GroupItem({ node, ...props }: GroupItemProps) {
  const state = useContext(CheckboxSetContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled;
  const isSelected = state.isSelected('' + node.key) || props.isIndeterminate;

  const { inputProps } = useCheckboxGroupItem(
    {
      ...props,
      value: '' + node.key,
      isDisabled,
      children: node.rendered,
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
      renderIcon={CheckboxIcon}
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
export function CheckboxSetField({ placeholder, ...props }: CheckboxSetFieldProps) {
  // List state handles dynamic (async) items.
  const listState = useListState(props);

  // Checkbox group state handles selection.
  const groupState = useCheckboxGroupState(props);

  const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(
    props,
    groupState
  );

  // useCheckboxGroupState does not support changing value TO undefined.
  // So we utilize an effect hook to force a change if this component is being
  // controlled via `value`.
  useEffect(() => {
    groupState.setValue(props.value ?? []);
  }, [props.value]);

  return (
    <CheckboxSetContext.Provider value={groupState}>
      <FormField
        wrapperProps={groupProps}
        labelAs="span"
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
        {...props}
      >
        <Stack>
          {listState.collection.size < 1 && placeholder}

          {Array.from(listState.collection).map(
            (item) => <GroupItem key={item.key} node={item} value={item.textValue} />
          )}
        </Stack>
      </FormField>
    </CheckboxSetContext.Provider>
  );
}
