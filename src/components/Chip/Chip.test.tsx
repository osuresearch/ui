import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Chip } from './Chip';

describe('Tests for Chip component', () => {
  it('renders content', () => {
    const { container } = render(<Chip>Foo bar</Chip>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
