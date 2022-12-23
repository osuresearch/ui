import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Title } from './index';

describe('Tests for Title component', () => {
  it('renders content', () => {
    const { container } = render(<Title level={1}>Foo bar</Title>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
