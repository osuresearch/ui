import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { FormField } from './FormField';

describe('Tests for FormField component', () => {
  it('renders content', () => {
    const { container } = render(<FormField>Foo bar</FormField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
