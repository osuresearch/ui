import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Paper } from './index';

describe('Tests for Paper component', () => {
  it('renders content', () => {
    const { container } = render(<Paper>Foo bar</Paper>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
