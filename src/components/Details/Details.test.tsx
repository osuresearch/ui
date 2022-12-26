import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Details } from './index';

describe('Tests for Details component', () => {
  it('renders content', () => {
    const { container } = render(<Details>Foo bar</Details>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
