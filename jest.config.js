/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@Test/(.*)$': '<rootDir>/src/test/$1',
        '^@models/(.*)$': '<rootDir>/src/db/models/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        '^@db/(.*)$': '<rootDir>/src/db/$1',
        '^@myTypes/(.*)$': '<rootDir>/src/types/$1',
        '^@controllers/(.*)$': '<rootDir>/src/controllers/$1',
        '^@routes/(.*)$': '<rootDir>/src/routes/$1',
        '^@middleware/(.*)$': '<rootDir>/src/middleware/$1',
        '^@config/(.*)$': '<rootDir>/src/config/$1',

        '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    },
    testTimeout: 30000,
    testMatch: ['**/test/**/**.test.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
