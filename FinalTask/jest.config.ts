import nextJest from "next/jest";

const createJestConfig = nextJest({
	dir: "./", // Path to your Next.js app directory
});

const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
		"^@/components/(.*)$": "<rootDir>/src/components/$1",
		"^@/pages/(.*)$": "<rootDir>/src/pages/$1",
		"^@/app/(.*)$": "<rootDir>/src/app/$1", // Ensure this path is correct
	},
};

export default createJestConfig(customJestConfig);