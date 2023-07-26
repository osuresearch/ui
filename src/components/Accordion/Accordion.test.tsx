import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Accordion } from './Accordion';

describe('Tests for Accordion component', () => {
  it('renders', () => {
    const { container } = render(<Accordion />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
