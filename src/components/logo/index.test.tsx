import React from 'react';
import { render } from '@testing-library/react';
import Logo from '.';

test('render logotipo', () => {
  const logo = render(<Logo />);
  expect(logo).toMatchSnapshot();
})