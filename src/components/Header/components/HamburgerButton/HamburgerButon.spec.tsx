import React from 'react';
import HamburgerButton from '.';
import { render } from '@testing-library/react';

describe('<HamburguerButton>', () => {
  it('should render HamburguerButtom', () => {
    const fn = jest.fn();
    const { container, queryAllByRole } = render(
      <HamburgerButton isOpen={false} setIsOpen={fn} />
    );

    expect(container).toMatchSnapshot();
    const buttons = queryAllByRole('button', { name: /Login/i });
    expect(buttons).toHaveLength(0);
  });

  it('should show the HamburgerButton open', () => {
    const fn = jest.fn();

    const { container, queryAllByRole } = render(
      <HamburgerButton isOpen={true} setIsOpen={fn} />
    );

    expect(container).toMatchSnapshot();
    const buttons = queryAllByRole('button', { name: /Login/i });
    expect(buttons).toHaveLength(1);
  });
});
