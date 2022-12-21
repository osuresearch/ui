import React, {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode
} from 'react';
import { cx } from '../../styles';
import { Box } from '../Box';
import { DefaultProps } from '../../types';
import { ForwardRefWithStaticComponents } from '../../utils/ForwardRefWithStaticComponents';
import { Question, QuestionProps } from './Question/Question';

export type InterviewVariant = 'default' | 'storytelling';

export type InterviewProps = DefaultProps & {
  variant?: InterviewVariant;

  /** <Interview.Question /> components only */
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
      <Box
        ref={ref}
        component="dl"
        className={cx(
          {
            // your additional classes
          },
          props.className
        )}
        {...props}
      >
        {items}
      </Box>
    );
  }
) as any;

Interview.Question = Question;
