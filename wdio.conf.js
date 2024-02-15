export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature',
    ],
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'cucumber',
    reporters: [['allure', {outputDir: 'allure-results'}]],
    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        parallel: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
}
