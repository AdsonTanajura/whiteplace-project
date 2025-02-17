// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectHome = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para /home
    router.push('/home');
  }, [router]);

  return null; // Não renderiza nada
};

export default RedirectHome;
