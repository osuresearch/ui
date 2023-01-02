import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { CheckboxField } from './CheckboxField';

describe('Tests for CheckboxField component', () => {
  it('renders content', () => {
    const { container } = render(<CheckboxField>Foo bar</CheckboxField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
