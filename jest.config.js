module.exports = {
  roots: ['<rootDir>/src'],
  collectCovarageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}'
  ],
  covarageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
