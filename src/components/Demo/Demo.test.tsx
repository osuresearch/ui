import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Demo } from './Demo';

describe('Tests for Demo component', () => {
  it('renders content', () => {
    const { container } = render(<Demo>Foo bar</Demo>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
