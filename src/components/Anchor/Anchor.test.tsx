import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Anchor } from './index';

describe('Tests for Anchor component', () => {
  it('renders content', () => {
    const { container } = render(<Anchor>Foo bar</Anchor>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
