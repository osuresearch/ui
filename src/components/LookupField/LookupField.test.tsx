import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { LookupField } from './LookupField';

describe('Tests for LookupField component', () => {
  it('renders content', () => {
    const { container } = render(<LookupField>Foo bar</LookupField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
