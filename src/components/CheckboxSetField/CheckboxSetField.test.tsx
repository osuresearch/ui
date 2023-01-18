import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CheckboxSetField } from './CheckboxSetField';

describe('Tests for CheckboxGroupField component', () => {
  it('renders content', () => {
    const { container } = render(<CheckboxSetField>Foo bar</CheckboxSetField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
