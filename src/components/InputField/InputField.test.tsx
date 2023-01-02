import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { InputField } from './InputField';

describe('Tests for InputField component', () => {
  it('renders content', () => {
    const { container } = render(<InputField>Foo bar</InputField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
