import React, { forwardRef, useEffect, useState } from 'react';
import { useProgressBar } from 'react-aria';

import { Color } from '../../theme';
import { CloseButton } from '../CloseButton';
import { Group } from '../Group';
import { Icon } from '../Icon';
import { Stack } from '../Stack';
import { Text } from '../Text';

export type ProgressBarProps = {
  label: string;
  showValueLabel: boolean;
  value?: any;
  minValue?: number;
  maxValue?: number;
};

/**
 * Attract user attention with important static message
 *
 * ## Accessibility
 * - Root element is `role="alert"`
 * - Dismiss button is labeled with "Dismiss this alert"
 */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const [percentComplete, setPercentComplete] = useState<number>(0);

  console.log(props.label, props.value);

  if (!props.value) {
    useEffect(() => {
      setInterval(() => setPercentComplete(percentComplete + 0.5), 1000);
    }, []);
  }

  const {
    label,
    showValueLabel = !!label,
    value = setPercentComplete,
    minValue = 0,
    maxValue = 100
  } = props;

  const { progressBarProps, labelProps } = useProgressBar(props);

  // Calculate the width of the progress bar as a percentage
  const percentage = (value - minValue) / (maxValue - minValue);
  const barWidth = `${Math.round(percentage * 100)}%`;
  //console.log(value, barWidth);

  //console.log(props, labelProps);

  console.log(percentComplete);

  return (
    <div {...progressBarProps} style={{ width: 200 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {label && <span {...labelProps}>{label}</span>}
        {showValueLabel && <span>{progressBarProps['aria-valuetext']}</span>}
      </div>
      <div style={{ height: 10, background: 'lightgray' }}>
        <div style={{ width: barWidth, height: 10, background: 'orange' }} />
      </div>

      {/* <button></button> */}
    </div>
  );
});
