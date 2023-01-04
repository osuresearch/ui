import { mergeProps } from '@react-aria/utils';
import React, { forwardRef, useRef } from 'react';
import { AriaCheckboxProps, useCheckbox, useFocusRing } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

export type CheckboxFieldDiffProps = {
  wasSelected?: boolean;
  showDiff?: boolean;
};

export type CheckboxFieldProps = StyleSystemProps &
  AriaCheckboxProps &
  CheckboxFieldDiffProps & {
    // Fields needed but omitted (unless in a group)
    // descriptionProps, errorMessageProps

    label: string;
    description?: string;
    errorMessage?: string;
  };

/**
 * CheckboxField documentation
 *
 * ## Accessibility
 * - TODO: Checkbox itself does not have error/description support via React Aria.
 * Figure out why: https://react-spectrum.adobe.com/react-aria/useCheckbox.html
 */
export const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ className, label, description, children, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const state = useToggleState(props);

    const { focusProps, isFocusVisible } = useFocusRing();
    const { inputProps } = useCheckbox(props, state, inputRef);

    return (
      <Group as="label" className={cx('group', className)} {...(props as StyleSystemProps)}>
        <VisuallyHidden>
          <input {...mergeProps(inputProps, focusProps)} ref={ref} />
        </VisuallyHidden>

        <div
          className={cx({
            'rui-ring-2 rui-ring-scarlet': isFocusVisible
          })}
        >
          <Box c="black" bgc="white" w={32} h={32}>
            {state.isSelected && <Icon name="check" />}
            {props.isIndeterminate && <Icon name="dash" />}
          </Box>
        </div>

        {props.showDiff && <Text>DIFF: {props.wasSelected ? 'Yes' : 'No'}</Text>}

        <Stack>
          <Text>{label}</Text>
          {description && (
            <Text fs="sm" c="dark">
              {description}
            </Text>
          )}
          error here as well
        </Stack>
      </Group>
    );
  }
);
