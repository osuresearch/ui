import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Code } from './Code';

describe('Tests for Code component', () => {
  it('renders content', () => {
    const { container } = render(<Code>Foo bar</Code>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
