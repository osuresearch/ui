import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { Image } from './Image';

describe('Tests for Image component', () => {
  it('renders content', () => {
    const { container } = render(<Image>Foo bar</Image>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
