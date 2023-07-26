import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Tabs } from './Tabs';

describe('Tests for Tabs component', () => {
  it('renders', () => {
    const { container } = render(<Tabs />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
