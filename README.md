# Demo using a Cordova app with Appium

First, we have to install all the project dependencies `npm install`

Then, we add a platform. We are going to use an Android Emulator with API 26 (8.0)
`cordova platform add android`

Config your Android device or emulator data in the `/tests/wdio.android.app.config.js`

We have to add the Android data in the `capabilities` object:

```javascript
  {
    platformName: 'Android',
    maxInstances: 1,
    deviceName: 'any', // with any it will get the first adb device recognized
    platformVersion: '8.0', // the version of our Android OS emulator device
    orientation: 'PORTRAIT', // this is optional
    automationName: 'appium',
    app: './platforms/android/app/build/outputs/apk/debug/app-debug.apk', // it must be exactly the route to our APK
    noReset: true,
    newCommandTimeout: 240
  }
```

Check appium-doctor. With appium-doctor we know what dependencies are required. We need to install all the necessaries.

`npm run appium-doctor`

To lauch the tests, first we have to build the app

`cordova build android`

Then we launch our tests with `npm run test:android`

## package.json config

In the `package.json` file we have a set of script needed to launch Appium in our project.

```JSON
  "scripts": {
    "appium": "appium",
    "appium-doctor": "appium-doctor",
    "test:android": "wdio tests/wdio.android.app.conf.js"
  },
```