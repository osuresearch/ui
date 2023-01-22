import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { DateField } from './DateField';

describe('Tests for DateField component', () => {
  it('renders content', () => {
    const { container } = render(<DateField>Foo bar</DateField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
