import { CollectionChildren } from '@react-types/shared';
import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { VisuallyHidden, useSelect } from 'react-aria';
import { AsyncListOptions, SelectProps, useAsyncList, useSelectState } from 'react-stately';

import { Box } from '../Box';
import { FormField, FormFieldBase } from '../FormField';
import { Icon } from '../Icon';
import { Popover } from '../Popover';
import { Button } from '../Button';
import { Lookup } from '../Lookup/Lookup';

export type LookupOption = Record<string, any>;

export type LookupFieldProps<T extends object = LookupOption> = FormFieldBase<T> &
  Omit<AsyncListOptions<T, any>, 'initialFilterText' | 'initialSelectedKeys'> & {
    /* Your props */

    placeholder?: string

    isReadOnly?: boolean;

    children: CollectionChildren<T>
  };

function _LookupField<T extends object>(
  { children, value, defaultValue, onChange, placeholder, ...props }: LookupFieldProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const list = useAsyncList<T>(props);
  const [current, setCurrent] = useState(defaultValue ?? value);

  // Not required by useAsyncList but is required for LookupField
  const getKey = props.getKey;
  if (!getKey) {
    throw new Error('Missing required `getKey` prop');
  }

  // Ensure that the current selection is always present in the list.
  // Needed for renderers
  // if (current && !list.getItem(getKey(current))) {
  //   list.prepend(current);
  // }

  const selectProps: SelectProps<T> = {
    ...props,
    isDisabled: props.isReadOnly || props.isDisabled,
    children,
    items: current ? [...list.items, current] : list.items,

    // Transform ValueBase<SelectOption> to SingleSelection
    selectedKey: current ? getKey(current) : undefined,
    onSelectionChange: (key) => setCurrent(list.getItem(key)),
   };

  const state = useSelectState(selectProps);

  const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } =
    useSelect(selectProps, state, triggerRef);

  const onSelect = (item: T) => {
    const key = getKey(item);
    state.setSelectedKey(key);
    onChange && onChange(item);
  }

  return (
    <FormField
      {...props}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
    >
      <>
        <VisuallyHidden>
          <input ref={ref} name={props.name} type="text" value={state.selectedKey} readOnly />
        </VisuallyHidden>
        <Button
          ref={triggerRef}
          variant="subtle"
          className="rui-text-left"
          rightSlot={<Icon name="chevron" rotate={90} />}
          {...triggerProps}
        >
          <span {...valueProps}>
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </span>
        </Button>

        {state.isOpen && (
          <Popover state={state} triggerRef={triggerRef} placement="bottom start">
            <Box id={menuProps.id} aria-labelledby={menuProps['aria-labelledby']}>
              <Lookup
                label="Search"
                placeholder={placeholder}
                onSelectionChange={onSelect}
                list={list}
              >
                {children}
              </Lookup>
            </Box>
          </Popover>
        )}
      </>
    </FormField>
  );
}

/**
 * A lookup combines a text input with a listbox, allowing users to
 * filter a list of options to items matching a query. The text
 * input will become read only once an item has been selected.
 *
 * A hidden `input` receives the selected item's key returned by the `getKey` prop
 */
export const LookupField = forwardRef(_LookupField) as <T extends object = LookupOption>(
  props: LookupFieldProps<T> & { ref?: ForwardedRef<HTMLInputElement> }
) => ReturnType<typeof _LookupField>;
