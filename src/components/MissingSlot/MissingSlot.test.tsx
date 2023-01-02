import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { MissingSlot } from './MissingSlot';

describe('Tests for MissingSlot component', () => {
  it('renders content', () => {
    const { container } = render(<MissingSlot>Foo bar</MissingSlot>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
