const {config} = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
  './tests/spec/*.js'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    deviceName: 'any',
    platformVersion: '8.0',
    orientation: 'PORTRAIT',
    // `automationName` will be mandatory, see
    // https://github.com/appium/appium/releases/tag/v1.13.0
    automationName: 'appium',
    // The path to the app
    app: './platforms/android/app/build/outputs/apk/debug/app-debug.apk',
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    noReset: true,
    newCommandTimeout: 240
  }
];

exports.config = config;
