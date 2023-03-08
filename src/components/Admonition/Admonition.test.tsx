import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Admonition } from './Admonition';

describe('Tests for Admonition component', () => {
  it('renders content', () => {
    const { container } = render(<Admonition>Foo bar</Admonition>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
