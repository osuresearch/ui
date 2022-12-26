import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';

import { Accordion } from './Accordion';

describe('Tests for Accordion component', () => {
  it('renders content', () => {
    const { container } = render(<Accordion>Foo bar</Accordion>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
