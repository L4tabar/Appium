require('../po/pageManager/pageManagerConfig');

exports.config = {
    runner: 'local',
    specs: [
        '../features/**/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '15',
        'appium:appPackage': 'com.google.android.deskclock',
        'appium:appActivity': 'com.android.deskclock.DeskClock',
        'appium:automationName': 'UiAutomator2'
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    services: [
        ['appium', {
            args: {
                port: 4723
            }
        }]
    ],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./stepDefinitions/*.js'],
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        strict: false,
        timeout: 60000
    }
};
