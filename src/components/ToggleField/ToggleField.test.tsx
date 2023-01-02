import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ToggleField } from './ToggleField';

describe('Tests for ToggleField component', () => {
  it('renders content', () => {
    const { container } = render(<ToggleField>Foo bar</ToggleField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
