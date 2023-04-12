import React, { forwardRef, useEffect, useState } from 'react';
import { useProgressBar } from 'react-aria';

import { Box } from '../Box';
import { Group } from '../Group';

export type ProgressBarProps = {
  label: string;

  /**
   * Controlled value between `minValue` and `maxValue`.
   *
   * If omitted, the component will behave as if it's indeterminate.
   */
  value?: number;

  /**
   * Minimum value. Defaults to `0`
   */
  minValue?: number;

  /**
   * Maximum value. Defaults to `100`.
   */
  maxValue?: number;
};

/**
 *
 */
export function ProgressBar({
  label,
  value,
  minValue = 0,
  maxValue = 100
}: ProgressBarProps) {
  const { progressBarProps, labelProps } = useProgressBar({
    label,
    showValueLabel: true,
    value,
    minValue,
    maxValue
  });

  const isIndeterminate = value === undefined;

  let barWidth;
  if (!isIndeterminate) {
    // Calculate the width of the progress bar as a percentage
    const percentage = (value - minValue) / (maxValue - minValue);
    barWidth = `${Math.round(percentage * 100)}%`;
  } else {
    progressBarProps['aria-valuetext'] = 'unknown';
  }

  return (
    <Box {...progressBarProps} w="100%">
      <Group justify="apart" fs="sm">
        {label && <span {...labelProps}>{label}</span>}
        {label && <span>{isIndeterminate ? '' : progressBarProps['aria-valuetext']}</span>}
      </Group>
      <Box bgc="light-shade" h={4} className="rui-overflow-x-hidden rui-relative">
      {isIndeterminate
        ? <Box bgc="info" className="rui-animate-scroll rui-absolute rui-inset-0" w="50%" />
        : <Box bgc="info" h="100%" w={barWidth} />
      }
      </Box>
    </Box>
  );
}
