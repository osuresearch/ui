import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ComboBoxField } from './ComboBoxField';

describe('Tests for ComboBoxField component', () => {
  it('renders content', () => {
    const { container } = render(<ComboBoxField>Foo bar</ComboBoxField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
