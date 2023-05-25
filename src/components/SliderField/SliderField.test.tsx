import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { SliderField } from './SliderField';

describe('Tests for SliderField component', () => {
  it('renders content', () => {
    const { container } = render(<SliderField>Foo bar</SliderField>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
