import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { List } from './List';

describe('Tests for List component', () => {
  it('renders content', () => {
    const { container } = render(<List>Foo bar</List>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
