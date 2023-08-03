import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { LinkList } from './LinkList';

describe('Tests for LinkList component', () => {
  it('renders', () => {
    const { container } = render(<LinkList />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
