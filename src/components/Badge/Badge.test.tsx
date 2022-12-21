import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Badge } from './index';

describe('Tests for Badge component', () => {
  it('renders content', () => {
    const { container } = render(<Badge>Foo bar</Badge>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
