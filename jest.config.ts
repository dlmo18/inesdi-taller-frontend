export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    rootDir: "src",
    
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "\\.(gif|ttf|eot|svg|png|jpg)$": "<rootDir>/test/__ mocks __/fileMock.js",
        "^@app/(.*)$": "<rootDir>/$1",
        "\\.(css)$": "identity-obj-proxy",
    },
}