import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Avatar } from './index';

describe('Tests for Avatar component', () => {
  it('renders content', () => {
    const { container } = render(<Avatar>Foo bar</Avatar>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
