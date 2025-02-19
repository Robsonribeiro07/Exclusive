const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/stores/(.*)$': '<rootDir>/src/stores/$1', // <-- Adicione esta linha
    'lucide-react':
      '<rootDir>/node_modules/lucide-react/dist/umd/lucide-react.js',
    '^next/navigation$':
      '<rootDir>/node_modules/next/dist/client/components/navigation.js',
    // <- Corrige erro ESM
  },
  transformIgnorePatterns: ['/node_modules/(?!lucide-react)'], // Transforma ESM corretamente
}

module.exports = createJestConfig(customJestConfig)
