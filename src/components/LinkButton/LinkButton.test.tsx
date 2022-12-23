import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { LinkButton } from './LinkButton';

describe('Tests for LinkButton component', () => {
  it('renders content', () => {
    const { container } = render(<LinkButton>Foo bar</LinkButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
