exports.config = {
    runner: 'local',
    path: '/wd/hub',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 16 Pro',
        'appium:platformVersion': '18.2',
        'appium:udid': '179CE75B-1BBD-4A76-BD70-023273645B6C',
        'appium:noReset': false,
        'appium:automationName': 'Flutter',
        'appium:app': '/Users/hamza/Development/Work/learn_tests/build/ios/iphonesimulator/Runner.app'
    }],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
