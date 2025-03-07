import '@testing-library/react';

jest.mock('@clerk/nextjs', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  ClerkLoaded: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useUser: jest.fn(() => ({
    isSignedIn: true,
    user: { id: '123', firstName: 'John' },
  })),
  useAuth: jest.fn(() => ({ getToken: jest.fn(), sessionId: 'session123' })),
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <button data-testid="clerk-sign-in-button">{children}</button>
  ),
  SignedOut: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  UserButton: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
  SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
