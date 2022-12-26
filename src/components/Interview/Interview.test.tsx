import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Interview } from './Interview';

describe('Tests for Interview component', () => {
  it('renders content', () => {
    const { container } = render(<Interview>Foo bar</Interview>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
