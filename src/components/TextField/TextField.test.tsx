import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { TextField } from './TextField';

describe('Tests for TextField component', () => {
  it('renders content', () => {
    const { container } = render(<TextField>Foo bar</TextField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
