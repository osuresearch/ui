import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { FormFieldError } from './FormFieldError';

describe('Tests for FormFieldError component', () => {
  it('renders', () => {
    const { container } = render(<FormFieldError />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
