import '@testing-library/jest-dom';
import React from 'react';
import HamburgerButton from '.';
import { render } from '@testing-library/react';

describe('<HamburguerButton>', () => {
  it('should render HamburguerButton', () => {
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

    const hamburgerButtonClose = getByTestId('hamburger-button-close');
    const hamburgerButtonsOpen = queryAllByTestId('hamburger-button-open');

    expect(container).toMatchSnapshot();
    expect(hamburgerButtonClose).toBeVisible();
    expect(hamburgerButtonsOpen).toHaveLength(0);
  });

  it('should show the HamburgerButton close', () => {
    const fn = jest.fn();

    const { queryAllByTestId, getByTestId, container } = render(
      <HamburgerButton isOpen={false} setIsOpen={fn} />
    );

    const hamburgerButtonOpen = getByTestId('hamburger-button-open');
    const hamburgerButtonClose = queryAllByTestId('hamburger-button-close');

    expect(container).toMatchSnapshot();
    expect(hamburgerButtonOpen).toBeVisible();
    expect(hamburgerButtonClose).toHaveLength(0);
  });
});
