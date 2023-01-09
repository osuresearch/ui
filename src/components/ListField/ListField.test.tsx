import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ListField } from './ListField';

describe('Tests for ListField component', () => {
  it('renders content', () => {
    const { container } = render(<ListField>Foo bar</ListField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
