import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';

import { AvatarGroup } from './AvatarGroup';

describe('Tests for AvatarGroup component', () => {
  it('renders content', () => {
    const { container } = render(<AvatarGroup>Foo bar</AvatarGroup>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
