module.exports = {
    setupTestFrameworkScriptFile: "<rootDir>/src/setupTests.js",
    collectCoverage: true,
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
      "xcomponents": "<rootDir>/src/xcomponents/index.js",
      // "services": "<rootDir>/src/services/index.js"
    },
    // verbose: true,
    testPathIgnorePatterns: [
      "/node_modules/"
    ],
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    testRegex: '.*\\.spec\\.js$'
}
// setupFiles： 配置文件， 在运行测试案例代码之前， Jest会先运行这里的配置文件来初始化指定的测试环境
// moduleFileExtensions： 代表支持加载的文件名
// testPathIgnorePatterns： 用正则来匹配不用测试的文件
// testRegex： 正则表示的测试文件， 测试文件的格式为xxx.test.js
// collectCoverage： 是否生成测试覆盖报告， 如果开启， 会增加测试的时间
// collectCoverageFrom： 生成测试覆盖报告是检测的覆盖文件
// moduleNameMapper： 代表需要被Mock的资源名称
// transform： 用babel - jest来编译文件， 生成ES6 / 7 的语法


// 常用断言
// expect(value)： 要测试一个值进行断言的时候， 要使用expect对值进行包裹
// toBe(value)： 使用Object.is来进行比较， 如果进行浮点数的比较， 要使用toBeCloseTo
// not： 用来取反
// toEqual(value)： 用于对象的深比较
// toMatch(regexpOrString)： 用来检查字符串是否匹配， 可以是正则表达式或者字符串
// toContain(item)： 用来判断item是否在一个数组中， 也可以用于字符串的判断
// toBeNull(value)： 只匹配null
// toBeUndefined(value)： 只匹配undefined
// toBeDefined(value)： 与toBeUndefined相反
// toBeTruthy(value)： 匹配任何使if语句为真的值
// toBeFalsy(value)： 匹配任何使if语句为假的值
// toBeGreaterThan(number)： 大于
// toBeGreaterThanOrEqual(number)： 大于等于
// toBeLessThan(number)： 小于
// toBeLessThanOrEqual(number)： 小于等于
// toBeInstanceOf(class)： 判断是不是class的实例
// anything(value)： 匹配除了null和undefined以外的所有值
// resolves： 用来取出promise为fulfilled时包裹的值， 支持链式调用
// rejects： 用来取出promise为rejected时包裹的值， 支持链式调用
// toHaveBeenCalled()： 用来判断mock function是否被调用过
// toHaveBeenCalledTimes(number)： 用来判断mock function被调用的次数
// assertions(number)： 验证在一个测试用例中有number个断言被调用
// extend(matchers)： 自定义一些断言

// "jest": {
//   "collectCoverageFrom": [
//     "src/**/*.{js,jsx,ts,tsx}",
//     "!src/**/*.d.ts"
//   ],
//   "resolver": "jest-pnp-resolver",
//   "setupFiles": [
//     "react-app-polyfill/jsdom"
//   ],
//   "testMatch": [
//     "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
//     "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
//   ],
//   "testEnvironment": "jsdom",
//   "testURL": "http://localhost",
//   "transform": {
//     "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
//     "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
//     "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
//   },
//   "transformIgnorePatterns": [
//     "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
//     "^.+\\.module\\.(css|sass|scss)$"
//   ],
//   "moduleNameMapper": {
//     "^react-native$": "react-native-web",
//     "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
//   },
//   "moduleFileExtensions": [
//     "web.js",
//     "js",
//     "web.ts",
//     "ts",
//     "web.tsx",
//     "tsx",
//     "json",
//     "web.jsx",
//     "jsx",
//     "node"
//   ]
// },