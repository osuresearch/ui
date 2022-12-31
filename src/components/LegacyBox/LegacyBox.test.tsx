import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { LegacyBox } from './index';

describe('Tests for Box component', () => {
  it('renders content', () => {
    const { container } = render(<LegacyBox>Foo bar</LegacyBox>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
