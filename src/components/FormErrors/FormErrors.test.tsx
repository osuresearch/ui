import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { FormErrors } from './FormErrors';

describe('Tests for FormErrors component', () => {
  it('renders content', () => {
    const { container } = render(<FormErrors>Foo bar</FormErrors>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
