import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Menu } from './Menu';

describe('Tests for Menu component', () => {
  it('renders content', () => {
    const { container } = render(<Menu>Foo bar</Menu>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
