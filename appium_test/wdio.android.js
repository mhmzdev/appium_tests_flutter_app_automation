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
        platformName: 'Android',
        'appium:deviceName': 'Pixel 4',
        'appium:udid': 'emulator-5554',
        'appium:noReset': false,
        'appium:automationName': 'Flutter',
        'appium:app': '/Users/hamza/Development/Work/learn_tests/build/app/outputs/flutter-apk/app-debug.apk'
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
