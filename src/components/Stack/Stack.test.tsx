import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Stack } from './index';

describe('Tests for Stack component', () => {
  it('renders content', () => {
    const { container } = render(<Stack>Foo bar</Stack>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
