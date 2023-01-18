import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { RadioSetField } from './RadioSetField';

describe('Tests for RadioSetField component', () => {
  it('renders content', () => {
    const { container } = render(<RadioSetField>Foo bar</RadioSetField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
