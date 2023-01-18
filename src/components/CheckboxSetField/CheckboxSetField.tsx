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

export type CheckboxItem = {
  name?: string;
  label?: string;
  description?: string;
};

export type CheckboxSetDiffProps = {
  showDiff?: boolean;
  previousValues?: string[];
};

export type CheckboxSetFieldProps = StyleSystemProps &
  AriaCheckboxGroupProps &
  AriaNecessityIndicator &
  CheckboxSetDiffProps &
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
export const CheckboxSetField = forwardRef<HTMLDivElement, CheckboxSetFieldProps>(
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
        <Text {...labelProps}>
          {label}
          {necessityIndicator && <NecessityIndicator />}
        </Text>

        <CheckboxSetContext.Provider value={{ ...listState, ...groupState }}>
          {[...listState.collection].map((item) => {
            if (item.type === 'section') {
              return <div key={item.key}>TODO: section</div>;
            }

            return <GroupItem key={item.key} node={item} value={item.textValue} />;
          })}
        </CheckboxSetContext.Provider>

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
