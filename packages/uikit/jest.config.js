module.exports = {
  displayName: 'packages-uikit',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg|jpeg)$': 'jest-transform-stub',
  },
  collectCoverage: true,

  collectCoverageFrom: ['components/**/*.{js,vue}'],

  coverageReporters: ['text', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/uikit',
};
