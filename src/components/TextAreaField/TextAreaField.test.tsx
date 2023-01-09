import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { TextAreaField } from './TextAreaField';

describe('Tests for TextareaField component', () => {
  it('renders content', () => {
    const { container } = render(<TextAreaField>Foo bar</TextAreaField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
