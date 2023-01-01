import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { TabPanel } from './TabPanel';

describe('Tests for TabPanel component', () => {
  it('renders content', () => {
    const { container } = render(<TabPanel>Foo bar</TabPanel>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
