import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { mergeProps, useComboBox, useFilter, useSearchField } from 'react-aria';
import { ComboBoxStateOptions, useComboBoxState, useSearchFieldState } from 'react-stately';

import { cx, mergeRefs } from '../../utils';
import { Box } from '../Box';
import { CloseButton } from '../CloseButton';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { ListBox } from '../ListBox';
import { Popover } from '../Popover';
import { TextInputSlot } from '../TextField';

export type LookupOption = Record<string, any>;

export type LookupFieldProps = FormFieldBase<React.Key> &
  Omit<
    ComboBoxStateOptions<LookupOption>,
    'selectedKey' | 'defaultSelectedKey' | 'onSelectionChange'
  > & {
    /** Custom icon name to use. If omitted, will default to `search` */
    iconName?: string;

    /**
     * If specified, the Lookup will replace the text input field
     * with the renderer used for the selected `<Item/>`.
     *
     * The `key` of the selected item will still be assigned
     * to the input field.
     */
    useItemRenderer?: boolean;

    /** `Item` components only */
    children: CollectionChildren<LookupOption>;
  };

/**
 * A lookup combines a text input with a listbox, allowing users to
 * filter a list of options to items matching a query. The text
 * input will become read only once an item has been selected.
 */
export const LookupField = forwardRef<HTMLInputElement, LookupFieldProps>(
  ({ iconName = 'search', ...props }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const clearButtonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listBoxRef = useRef<HTMLDivElement>(null);
    const popoverRef = useRef<HTMLDivElement>(null);

    const { contains } = useFilter({
      sensitivity: 'base'
    });

    const comboBoxProps: ComboBoxStateOptions<LookupOption> = {
      ...props,

      // Transform ValueBase<React.Key> to SingleSelection
      selectedKey: props.value,
      defaultSelectedKey: props.defaultValue,
      onSelectionChange: props.onChange,

      defaultFilter: contains
    };

    const state = useComboBoxState(comboBoxProps);

    const { labelProps, inputProps, listBoxProps, descriptionProps, errorMessageProps } =
      useComboBox(
        {
          ...comboBoxProps,
          inputRef,
          listBoxRef,
          popoverRef,
          isReadOnly: props.isReadOnly || !!state.selectedKey
        },
        state
      );

    const { name, ...inputPropsWithoutName } = inputProps;

    const searchProps = {
      label: props.label,
      value: state.inputValue,
      onChange: (v: string) => state.setInputValue(v)
    };

    const searchState = useSearchFieldState(searchProps);
    const { clearButtonProps } = useSearchField(searchProps, searchState, inputRef);

    const showCloseButton = state.inputValue !== '' && !props.isReadOnly && !props.isDisabled;

    const renderSelectedItem = props.useItemRenderer && state.selectedItem;

    return (
      <FormField
        {...props}
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
      >
        <Group gap={0} className="rui-w-full">
          {/* Anchor right under the start of the input box to position the popover  */}
          <div ref={wrapperRef} className="rui-w-0 rui-h-0" />

          {!renderSelectedItem && (
            <div className="rui-absolute rui-inset-[2px] rui-right-auto">
              <Icon name={iconName} p="sm" size={18} />
            </div>
          )}

          {renderSelectedItem && <Box ml="xxl">{state.selectedItem.rendered}</Box>}

          <input type="hidden" name={name} value={state.selectedKey} />

          <TextInputSlot
            ref={mergeRefs(ref, inputRef)}
            {...mergeProps(inputPropsWithoutName, {
              style: {
                paddingLeft: 40,
                paddingRight: 40,
                visibility: renderSelectedItem ? 'hidden' : undefined
              }
            })}
          />

          <div
            className={cx('rui-absolute rui-inset-[2px]', {
              'rui-left-auto': !renderSelectedItem,
              'rui-right-auto': renderSelectedItem
            })}
          >
            <CloseButton
              ref={clearButtonRef}
              iconProps={{ p: 'xs' }}
              style={{
                visibility: showCloseButton ? 'visible' : 'hidden'
              }}
              {...clearButtonProps}
            />
          </div>

          {state.isOpen && (
            <Popover ref={popoverRef} state={state} triggerRef={wrapperRef} placement="bottom left">
              <ListBox ref={listBoxRef} {...listBoxProps} state={state} />
            </Popover>
          )}
        </Group>
      </FormField>
    );
  }
);
