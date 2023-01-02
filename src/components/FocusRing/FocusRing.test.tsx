import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { FocusRing } from './FocusRing';

describe('Tests for FocusRing component', () => {
  it('renders content', () => {
    const { container } = render(<FocusRing>Foo bar</FocusRing>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
