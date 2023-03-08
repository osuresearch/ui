import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { ScrollArea } from './ScrollArea';

describe('Tests for ScrollArea component', () => {
  it('renders content', () => {
    const { container } = render(<ScrollArea>Foo bar</ScrollArea>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
