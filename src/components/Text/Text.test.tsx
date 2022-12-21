import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Text } from './Text';

describe('Tests for Text component', () => {
  it('renders content', () => {
    const { container } = render(<Text>Foo bar</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
