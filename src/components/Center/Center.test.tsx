import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Center } from './Center';

describe('Tests for Center component', () => {
  it('renders content', () => {
    const { container } = render(<Center>Foo bar</Center>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
