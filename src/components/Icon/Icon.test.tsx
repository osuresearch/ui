import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Icon } from './index';

describe('Tests for Icon component', () => {
  it('renders content', () => {
    const { container } = render(<Icon>Foo bar</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
