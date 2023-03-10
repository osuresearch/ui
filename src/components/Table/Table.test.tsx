import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Table } from './Table';

describe('Tests for Table component', () => {
  it('renders content', () => {
    const { container } = render(<Table>Foo bar</Table>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
