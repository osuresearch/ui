import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { UnstyledList } from './UnstyledList';

describe('Tests for UnstyledList component', () => {
  it('renders content', () => {
    const { container } = render(<UnstyledList>Foo bar</UnstyledList>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
