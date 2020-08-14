module.exports = {
	transform: {
		"\^.*ts$": "ts-jest",
	  },
	  testMatch: [
		'<rootDir>/js/App.test.js',
	  ],
	  moduleFileExtensions: [
		"ts",
		"js",
		"json",
	  ],
	  moduleNameMapper: {
		"@/(.*)$": "<rootDir>/$1",
		"^src/(.*)$": "<rootDir>/src/$1",
		"^core/(.*)$": "<rootDir>/src/core/src/$1",
	  },
	  testEnvironment: 'node',
	// preset: 'ts-jest',
	// "testRegex": "(/test/.*/.*|(\\.|/)(test))\\.(jsx?)$",
}