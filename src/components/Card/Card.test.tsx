import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';

describe('Tests for Card component', () => {
  it('renders content', () => {
    const { container } = render(<Card>Foo bar</Card>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
