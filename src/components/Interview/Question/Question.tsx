import React, { forwardRef, ReactNode, useContext } from 'react';
import { cx } from '../../../styles';
import { Group } from '../../Group';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { VisuallyHidden } from '../../VisuallyHidden';
import { InterviewVariant } from '../Interview';

export type QuestionProps = {
  index?: number;
  variant?: InterviewVariant;
  title: ReactNode;
  children: ReactNode;
};

// TODO: This is all sorts of hacky. Align better.
// TODO: Variants.

const questionClasses = {
  label: 'text-h3 bg-gray-tint-60 dark:bg-gray-shade-60 text-center px-8 py-4 w-32'
};

export const Question = forwardRef<HTMLDivElement, QuestionProps>(
  ({ index, variant, title, children }, ref) => (
    <Stack component="dd" ref={ref} gap="lg">
      <Group align="center">
        <VisuallyHidden>Question</VisuallyHidden>
        {variant === 'default' && (
          <Text className={questionClasses.label} aria-hidden>
            Q
          </Text>
        )}
        <Text className="text-h3">{title}</Text>
      </Group>
      <Group align="start" pb="xl">
        <VisuallyHidden>Answer</VisuallyHidden>
        {variant === 'default' && (
          <Text className={questionClasses.label} aria-hidden>
            A
          </Text>
        )}
        <Text>{children}</Text>
      </Group>
    </Stack>
  )
);
