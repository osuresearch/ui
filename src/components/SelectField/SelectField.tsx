import { AriaSelectProps, SelectProps } from '@react-types/select';
import { CollectionChildren } from '@react-types/shared';
import React, { forwardRef, useRef } from 'react';
import { HiddenSelect, useSelect } from 'react-aria';
import { useSelectState } from 'react-stately';

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';
import { mergeRefs } from '~/utils';

import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { InputField } from '../InputField';
import { ListBox } from '../ListBox';
import { Popover } from '../Popover';

export type SelectOption = Record<string, any>;

export type SelectFieldProps = StyleSystemProps &
  SelectProps<SelectOption> &
  AriaNecessityIndicator &
  AriaSelectProps<SelectOption> & {
    /* Your props */

    isReadOnly?: boolean;

    /** `Item` components only */
    children: CollectionChildren<SelectOption>;
  };

/**
 * A select displays a collapsible list of options and
 * allows a user to select one of them.
 *
 * ## Accessibility
 * - Labeling support for accessibility
 * - Support for description and error message help text linked to the input via ARIA
 * - Support for mouse, touch, and keyboard interactions
 * - Tab stop focus management
 * - Keyboard support for opening the listbox using the arrow keys, including automatically focusing the first or last item accordingly
 * - Typeahead to allow selecting options by typing text, even without opening the listbox
 * - Browser autofill integration via a hidden native `<select>` element
 * - Support for mobile form navigation via software keyboard
 * - Mobile screen reader listbox dismissal support
 *
 *
 * For full details of supported features, see
 * [React Aria's useSelect documentation](https://react-spectrum.adobe.com/react-aria/useSelect.html#features)
 */
export const SelectField = forwardRef<HTMLButtonElement, SelectFieldProps>((props, ref) => {
  // Readonly isn't native for selects, but we include it
  // for feature parity with all other field types.

  // TODO: This will be incorrect as the underlying input may not submit
  // the selection if we set it to read only but it's disabled under the hood.
  // Need to verify behaviour.
  const isDisabled = props.isReadOnly || props.isDisabled;

  const triggerRef = useRef<HTMLButtonElement>(null);
  const state = useSelectState({
    ...props,
    isDisabled
  });

  const { labelProps, triggerProps, valueProps, menuProps, descriptionProps, errorMessageProps } =
    useSelect(
      {
        ...props,
        isDisabled
      },
      state,
      triggerRef
    );

  return (
    <Box /* inline-flex, column, relative position, margin top 20px */>
      <HiddenSelect name={props.name} label={props.label} state={state} triggerRef={triggerRef} />
      <InputField
        {...props}
        labelProps={labelProps}
        descriptionProps={descriptionProps}
        errorMessageProps={errorMessageProps}
      >
        <Button
          ref={mergeRefs(ref, triggerRef)}
          rightSlot={<Icon name="caret" />}
          {...triggerProps}
        >
          <span {...valueProps}>
            {state.selectedItem ? state.selectedItem.rendered : 'Select an option'}
          </span>
        </Button>
      </InputField>

      {state.isOpen && (
        <Popover state={state} triggerRef={triggerRef} placement="bottom start">
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </Box>
  );
});
