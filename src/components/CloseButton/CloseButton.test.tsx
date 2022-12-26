import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { CloseButton } from './CloseButton';

describe('Tests for CloseButton component', () => {
  it('renders content', () => {
    const { container } = render(<CloseButton>Foo bar</CloseButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
