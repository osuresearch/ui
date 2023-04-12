import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { PageButton } from './index';

describe('Tests for PageButton component', () => {
  it('renders content', () => {
    const { container } = render(<PageButton>Foo bar</PageButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
