import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { __TEMPLATE__ } from './__TEMPLATE__';

describe('Tests for __TEMPLATE__ component', () => {
  it('renders', () => {
    const { container } = render(<__TEMPLATE__ />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
