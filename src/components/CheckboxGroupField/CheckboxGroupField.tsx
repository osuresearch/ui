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

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';

import { CheckboxIcon } from '../CheckboxIcon';
import { Icon } from '../Icon';
import { NecessityIndicator } from '../NecessityIndicator';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { ToggleField } from '../ToggleField';

export type CheckboxGroupItem = {
  name?: string;
  label?: string;
  description?: string;
};

export type CheckboxGroupDiffProps = {
  showDiff?: boolean;
  previousValues?: string[];
};

export type CheckboxGroupFieldProps = StyleSystemProps &
  AriaCheckboxGroupProps &
  AriaNecessityIndicator &
  CheckboxGroupDiffProps &
  ListProps<CheckboxGroupItem> & {
    label: React.ReactNode;
  };

const CheckboxGroupContext = createContext<CheckboxGroupState & ListState<CheckboxGroupItem>>(
  {} as CheckboxGroupState & ListState<CheckboxGroupItem>
);

type GroupItemProps = AriaCheckboxGroupItemProps & {
  node: Node<CheckboxGroupItem>;
};

export function GroupItem({ node, ...props }: GroupItemProps) {
  const state = useContext(CheckboxGroupContext);
  const ref = useRef<HTMLInputElement>(null);

  const isDisabled = state.isDisabled || state.disabledKeys.has(node.textValue);
  const isSelected = state.isSelected(node.textValue) || props.isIndeterminate;

  const { inputProps } = useCheckboxGroupItem(
    {
      ...props,
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
 * Checkbox groups allow users to select multiple items from a list of options.
 * Can attach multiple `Key` atomics to a single field.
 *
 * <!-- @ruiAtomic Key -->
 */
export const CheckboxGroupField = forwardRef<HTMLDivElement, CheckboxGroupFieldProps>(
  (props, ref) => {
    const { label, description, necessityIndicator, errorMessage } = props;

    const listState = useListState(props);
    const groupState = useCheckboxGroupState(props);

    // TODO: Figure out how to merge listState and groupState.
    // I might just make everything a "list" behind the scenes.

    const { groupProps, labelProps, descriptionProps, errorMessageProps } = useCheckboxGroup(
      props,
      groupState
    );

    return (
      <Stack {...groupProps} ref={ref}>
        <Text as="label" {...labelProps}>
          {label}
          {necessityIndicator && <NecessityIndicator />}
        </Text>

        <CheckboxGroupContext.Provider value={{ ...listState, ...groupState }}>
          {[...listState.collection].map((item) => {
            if (item.type === 'section') {
              return <div key={item.key}>TODO: section</div>;
            }

            return <GroupItem key={item.key} node={item} value={item.textValue} />;
          })}
        </CheckboxGroupContext.Provider>

        {description && (
          <Text c="dark" fs="sm" {...descriptionProps}>
            {description}
          </Text>
        )}

        {errorMessage && (
          <Text c="error" fs="sm" {...errorMessageProps}>
            <Icon name="xmarkCircle" /> {errorMessage}
          </Text>
        )}
      </Stack>
    );
  }
);
