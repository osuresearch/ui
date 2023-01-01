import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Text } from './Text';

describe('Tests for Text component', () => {
  it('renders content', () => {
    const { container } = render(<Text>Foo bar</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
