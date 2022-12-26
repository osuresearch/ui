import { Box } from '@osuresearch/ui';
import React, { Children, ReactNode, cloneElement, forwardRef, isValidElement } from 'react';

import { cx } from '@osuresearch/ui/theme/utils';
import { DefaultProps, ForwardRefWithStaticComponents } from '@osuresearch/ui/types';

import { Question, QuestionProps } from './Question/Question';

export type InterviewVariant = 'default' | 'storytelling';

export type InterviewProps = DefaultProps & {
  variant?: InterviewVariant;

  /** `<Interview.Question>` components only */
  children: ReactNode;
};

type InterviewComponent = ForwardRefWithStaticComponents<
  InterviewProps,
  {
    Question: typeof Question;
  }
>;

// ForwardRefExoticComponent<DefaultProps<never> & { variant?: InterviewVariant | undefined; children: ReactNode; } & RefAttributes<HTMLDivElement>>
//

/**
 * A transcript of an interview that includes both the interviewer’s direct
 * questions and the interviewee’s response in written format.
 *
 * ### Accessibility
 *
 * - "Q" and "A" labels are expanded to "Question" and "Answer" for screen readers
 */
export const Interview: InterviewComponent = forwardRef<HTMLDListElement, InterviewProps>(
  ({ variant = 'default', children, ...props }, ref) => {
    const items = Children.map(children, (child, index) => {
      if (!isValidElement<QuestionProps>(child)) {
        return child;
      }

      return cloneElement(child, {
        variant,
        index
      });
    });

    return (
      <Box ref={ref} component="dl" {...props}>
        {items}
      </Box>
    );
  }
) as any;

// Order matters! Subcomponent display names need to be declared
// in the parent and *after* the parent's display name, otherwise
// Storybook can't map them correctly for ArgsTables.
Interview.displayName = 'Interview';
Question.displayName = 'Interview.Question';

Interview.Question = Question;

// _Interview.displayName = 'Interview';

// export const Interview = _Interview as typeof _Interview & {
//   Question: typeof Question;
// }

// Interview.Question = Question;

// Question.displayName = 'Interview.Question';
