export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/test/**/*.test.tsx'],
    setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
    moduleNameMapper: {
        '^@$': '<rootDir>/src',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@jiovan-labs/react-condition$': '<rootDir>/src',
        '^@jiovan-labs/react-condition/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.test.json'
        }]
    }
};
