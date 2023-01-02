import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CheckboxGroupField } from './CheckboxGroupField';

describe('Tests for CheckboxGroupField component', () => {
  it('renders content', () => {
    const { container } = render(<CheckboxGroupField>Foo bar</CheckboxGroupField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
