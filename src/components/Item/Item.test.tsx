import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Item } from './Item';

describe('Tests for Item component', () => {
  it('renders content', () => {
    const { container } = render(<Item>Foo bar</Item>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
