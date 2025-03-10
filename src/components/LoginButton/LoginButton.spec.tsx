import { render } from '@testing-library/react';
import LoginButton from '../LoginButton';

describe('<LoginButton />', () => {
  it('should render login button', () => {
    const { queryAllByRole, container } = render(<LoginButton />);
    const buttons = queryAllByRole('button', { name: /Login/i });
    expect(buttons).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });
});
