import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Group } from './index';

describe('Tests for Group component', () => {
  it('renders content', () => {
    const { container } = render(<Group>Foo bar</Group>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
