import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Tooltip } from './Tooltip';

describe('Tests for Tooltip component', () => {
  it('renders content', () => {
    const { container } = render(<Tooltip>Foo bar</Tooltip>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
