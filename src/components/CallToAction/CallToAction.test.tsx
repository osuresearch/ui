import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { CallToAction } from './CallToAction';

describe('Tests for CallToAction component', () => {
  it('renders content', () => {
    const { container } = render(<CallToAction>Foo bar</CallToAction>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
