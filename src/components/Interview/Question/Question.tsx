import React, { forwardRef, ReactNode, useContext } from 'react';
import { cx } from '../../../theme/utils';
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
  label: 'rui-text-h3 rui-bg-gray-tint-60 dark:rui-bg-gray-shade-60 rui-text-center'
};

export const Question = forwardRef<HTMLDivElement, QuestionProps>(
  ({ index, variant, title, children }, ref) => (
    <Stack component="dd" ref={ref} gap="lg">
      <Group align="center">
        <VisuallyHidden>Question</VisuallyHidden>
        {variant === 'default' && (
          <Text className={questionClasses.label} w={30} h={30} aria-hidden>
            Q
          </Text>
        )}
        <Text className="rui-text-h3">{title}</Text>
      </Group>
      <Group align="start" pb="xl">
        <VisuallyHidden>Answer</VisuallyHidden>
        {variant === 'default' && (
          <Text className={questionClasses.label} w={30} h={30} px="xs" py="xxs" aria-hidden>
            A
          </Text>
        )}
        <Text>{children}</Text>
      </Group>
    </Stack>
  )
);
