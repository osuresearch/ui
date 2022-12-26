import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { UnstyledButton } from './index';

describe('Tests for UnstyledButton component', () => {
  it('can be disabled', () => {
    render(<UnstyledButton>Foo bar</UnstyledButton>);
    expect(screen.getByRole('button', { name: 'Foo bar' })).toBeDisabled();
  });

  it('renders content', () => {
    const { container } = render(<UnstyledButton>Foo bar</UnstyledButton>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
