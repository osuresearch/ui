import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { SelectField } from './SelectField';

describe('Tests for SelectField component', () => {
  it('renders content', () => {
    const { container } = render(<SelectField>Foo bar</SelectField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
