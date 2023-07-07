import { FocusableElement } from '@react-types/shared';
import React, { forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { Alert } from '../Alert';
import { Link } from '../Link';

export type FormErrorsProps = StyleSystemProps & {
  /* Your props */

  errorMessages?: {
    [field: string]: {
      message?: string;
    };
  };

  children?: React.ReactNode;
};

/**
 *
 * <!-- @ruiStatus In Development -->
 */
export const FormErrors = forwardRef<HTMLDivElement, FormErrorsProps>(
  ({ className, errorMessages, children, ...styleSystemProps }, ref) => {
    if (!errorMessages) {
      return null;
    }

    const keys = Object.keys(errorMessages);
    if (keys.length < 1) {
      return null;
    }

    const focusField = (name: string) => {
      const el = document.querySelector(`[data-label-for="${name}"]`);
      if (el) {
        (el as FocusableElement).focus();
      }
    };

    // TODO: The link name needs to either be a summary of the label
    // (paraphrased), or the message is a summary and the whole line
    // is a link to that error.

    return (
      <Alert variant="critical" title={`There are ${keys.length} problems to fix in this form`}>
        <ul>
          {keys.map((name) => (
            <li key={name}>{errorMessages[name as any].message}</li>
          ))}
        </ul>

        <Link variant="subtle" onClick={() => focusField(keys[0])}>
          Go to the first field with an error to fix it
        </Link>
      </Alert>
    );
  }
);
