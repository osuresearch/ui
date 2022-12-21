import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Space } from './index';

describe('Tests for Space component', () => {
  it('renders content', () => {
    const { container } = render(<Space>Foo bar</Space>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
