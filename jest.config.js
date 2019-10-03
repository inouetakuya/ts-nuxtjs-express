module.exports = {
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: ['js', 'ts', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest'
  }
}
