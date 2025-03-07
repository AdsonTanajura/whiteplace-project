import '@testing-library/jest-dom';
import React from 'react';
import HamburgerButton from '.';
import { render } from '@testing-library/react';

describe('<HamburguerButton>', () => {
  it('should render HamburguerButtom', () => {
    const fn = jest.fn();
    const { queryAllByRole, container } = render(
      <HamburgerButton isOpen={false} setIsOpen={fn} />
    );
    const buttons = queryAllByRole('button');

    expect(container).toMatchSnapshot();
    expect(buttons).toHaveLength(1);
  });

  it('should show the HamburgerButton open', () => {
    const fn = jest.fn();

    const { queryAllByTestId, getByTestId, container } = render(
      <HamburgerButton isOpen={true} setIsOpen={fn} />
    );

    const hamburgerButtomClose = getByTestId('hamburger-button-close');
    const hamburgerButtonsOpen = queryAllByTestId('hamburger-button-open');

    expect(container).toMatchSnapshot();
    expect(hamburgerButtomClose).toBeVisible();
    expect(hamburgerButtonsOpen).toHaveLength(0);
  });

  it('should show the HamburgerButton close', () => {
    const fn = jest.fn();

    const { queryAllByTestId, getByTestId, container } = render(
      <HamburgerButton isOpen={false} setIsOpen={fn} />
    );

    const hamburgerButtomOpen = getByTestId('hamburger-button-open');
    const hamburgerButtomClose = queryAllByTestId('hamburger-button-close');

    expect(container).toMatchSnapshot();
    expect(hamburgerButtomOpen).toBeVisible();
    expect(hamburgerButtomClose).toHaveLength(0);
  });
});

// it('should show the HamburgerButton open', () => {
//   const fn = jest.fn();

//   const { container, queryAllByRole } = render(
//     <HamburgerButton isOpen={true} setIsOpen={fn} />
//   );

//   expect(container).toMatchSnapshot();
//   const buttons = queryAllByRole('button', { name: /Login/i });
//   expect(buttons).toHaveLength(1);
// });

// it('buttom teste', () => {
//   const fn = jest.fn();
//   const { container, queryAllByRole } = render(
//     <HamburgerButton isOpen={false} setIsOpen={fn} />
//   );

//   expect(container).toMatchSnapshot();
//   const buttons = queryAllByRole('button', { name: /Login/i });
//   expect(buttons).toHaveLength(0);
// });
