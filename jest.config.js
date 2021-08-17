const path = require('path');

module.exports = {
	rootDir: path.resolve(__dirname),
	clearMocks: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	// 测试文件
	testMatch: [
		`<rootDir>/src/**/*.test.ts?(x)`,
		`<rootDir>/__test__/**/*.test.ts?(x)`,
	],
	transform: {
		'^.+\\js$': 'babel-jest',
		'^.+\\.(t|j)sx?$': 'ts-jest',
	},
};
