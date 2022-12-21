import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { __TEMPLATE__ } from './__TEMPLATE__';

describe('Tests for __TEMPLATE__ component', () => {
  it('renders content', () => {
    const { container } = render(<__TEMPLATE__>Foo bar</__TEMPLATE__>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
