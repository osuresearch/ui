import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Paper } from './index';

describe('Tests for Paper component', () => {
  it('renders content', () => {
    const { container } = render(<Paper>Foo bar</Paper>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
