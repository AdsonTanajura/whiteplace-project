import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/Header';
import GlobalStyle from '../styles/global';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalStyle />
      <ClerkProvider>
        <html lang="en" className={inter.className}>
          <body>
            <Header />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
