import { render } from '@testing-library/react';
import { ClerkProvider, ClerkLoaded } from '@clerk/nextjs';
// import { RouterContext } from 'next/dist/shared/lib/router-context'; // Para mock do useRouter

import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './createMockRouter';

const customRender = (
  ui: React.ReactElement,
  { routerOptions, ...options } = {}
) => {
  const mockRouter = createMockRouter(routerOptions);

  return render(
    <RouterContext.Provider value={mockRouter}>
      <ClerkProvider publishableKey="sk_test_rOVJ35xlMgx4neFf9qFqPiKmsiWOhZ88rsaPlPEnNE">
        <ClerkLoaded>{ui}</ClerkLoaded>
      </ClerkProvider>
    </RouterContext.Provider>,
    options
  );
};

export * from '@testing-library/react';
export { customRender as render };
