import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Grid } from './Grid';

describe('Tests for Grid component', () => {
  it('renders content', () => {
    const { container } = render(<Grid>Foo bar</Grid>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
