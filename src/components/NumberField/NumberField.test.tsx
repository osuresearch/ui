import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { NumberField } from './NumberField';

describe('Tests for NumberField component', () => {
  it('renders content', () => {
    const { container } = render(<NumberField>Foo bar</NumberField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
