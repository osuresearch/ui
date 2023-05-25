import React, { forwardRef, useRef } from 'react';
import {
  DOMAttributes,
  FocusableElement
} from '@react-types/shared';
import { SliderStateOptions, useSliderState } from 'react-stately';
import { AriaLabelingProps } from '@react-types/shared';

import { useNumberFormatter, useSlider } from 'react-aria';

import { cx } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';

import { Thumb } from './Thumb';
import { Track } from './Track';

export type SliderFieldProps = FormFieldBase<number> & SliderStateOptions<number> & {
  formatOptions?: Intl.NumberFormatOptions,

  /**
   * Custom width (in pixels) for the slider track.
   */
  trackWidth?: number
};

/**
 * Sliiiiide
 *
 * <!-- @ruiAtomic Number -->
 * <!-- @ruiStatus In Development -->
 */
export const SliderField = forwardRef<HTMLInputElement, SliderFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField<'input'>(
  //   props,
  //   inputRef
  // );

  // Need to document onChangeEnd

  const numberFormatter = useNumberFormatter(props.formatOptions);
  const state = useSliderState({
    ...props,
    numberFormatter
  });

  const {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider({
    ...props,
  }, state, trackRef);

  // TODO:
  // I need an id on the decriptionProps (and errorMessageProps)
  // and an aria-describedby on the input.
  // Additionally, if we have both description and error visible,
  // they both need to be ID'd in the describedby

  // TODO: If the slider is in a role=group, do I add aria-describedby
  // to the group or the input?

  // TODO: Ideal scenario is that they can click on the output
  // and type in a specific number they want. (E.g. Blender, Unity, etc style sliders)

  const ariaProps: AriaLabelingProps = {
    'aria-describedby': 'foo bar',
  }

  const descriptionProps: DOMAttributes<FocusableElement>= {};
  if (props.description) {
    descriptionProps.id = groupProps.id + '-desc';
    groupProps['aria-describedby'] = descriptionProps.id;
  }

  const errorMessageProps: DOMAttributes<FocusableElement>= {};
  if (props.errorMessage) {
    errorMessageProps.id = groupProps.id + '-error';
    groupProps['aria-describedby'] += ' ' + errorMessageProps.id;
  }

  return (
    <FormField
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}

      className={cx({
        // TODO: Play with layout modes more.
        // It needs to work with
        // 'w-[300px]': state.orientation === 'horizontal' && props.layout !== 'horizontal',
        'w-full': state.orientation === 'horizontal' && props.layout === 'horizontal',

        // TODO: Figure out what vertical layout may look like.
        'h-[150px]': state.orientation === 'vertical',
      }, props.className)}
    >
      {/* groupProps assigns id, role="group", aria-labelledby="id of the label" */}
      <div {...groupProps} className="relative w-full">

        {/* TODO: Where does this make the most sense to go? */}
        {/* outputProps assigns for="id of the input" aria-live="off" */}
        <output {...outputProps} className="text-sm">
          {state.getThumbValueLabel(0)}
        </output>

        {/* trackProps assigns style="relative, no touch action" */}
        <Track ref={trackRef} isDisabled={state.isDisabled} {...trackProps}>
          <Thumb index={0} state={state} trackRef={trackRef} ariaProps={{}} />
        </Track>
      </div>
    </FormField>
  );
});
