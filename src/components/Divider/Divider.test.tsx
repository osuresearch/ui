import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Divider } from './Divider';

describe('Tests for Divider component', () => {
  it('renders content', () => {
    const { container } = render(<Divider>Foo bar</Divider>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
