import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'], // Carrega os mocks e configurações extras para testes
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Ajuste para resolver imports, se necessário
  },
};

// Exporta a configuração final usando o `nextJest`
export default createJestConfig(customJestConfig);
