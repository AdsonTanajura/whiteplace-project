// src/app/private/layout.tsx
'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      // Se o usuário não estiver autenticado, redireciona para /sign-in
      router.push('/sign-in');
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Exibe um carregando enquanto o status de autenticação é carregado
  }

  return (
    <div>
      {/* Renderiza o conteúdo das páginas protegidas aqui */}
      {children}
    </div>
  );
};

export default PrivateLayout;
