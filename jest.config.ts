export default {
    preset:'ts-jest',
    moduleNameMapper:{
        '^src/(.*)$':'<rootDir>/src/$1',
    },
    workerIdleMemoryLimit:"1024MB"
};
