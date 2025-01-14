## Appium Test
This is a counter app for testing Appium with Flutter.

### 📜 How to run
1. Clone the repo
```bash
git clone https://github.com/mhmzdev/appium_tests_flutter_app_automation.git
```
2. Navigate to `appium_test` directory
```bash
cd appium_test
```
3. Install node dependencies
```bash
npm install
```
4. Run Appium Server
```bash
appium
```
5. Run the test
```bash
npx wdio run wdio.android.js
```

| Do not use `sudo` when running POINT 4 and POINT 5, it will cause an error!

## Setup From Scratch
This is how you can setup everything from scratch for your own project.
### 🎯 Setup Flutter
1. Add `flutter_driver` in your pubspec.yaml
```yaml
flutter_driver:
    sdk: flutter
```
2. Update `main.dart` to enable `flutter_driver`
```dart
import 'package:flutter_driver/driver_extension.dart';

void main() {
  enableFlutterDriverExtension();
  runApp(const MyApp());
}
```
### 📦 Build the app
1. Android app
```bash
flutter build apk --debug
```
2. iOS app
```bash
flutter build ios --debug --simulator
```
### 🧰 Setup Appium
3. Install [node](https://nodejs.org/en/download)
4. Create a node project
```
npm init -y
```
5. Install libraries
```
npm i -D @wdio/cli appium-flutter-finder appium-flutter-driver
```
6. Install the appium library in last, otherwise it causes conflicts if installed before:
```
npm i -D appium
```
| Add `sudo` if you are on macOS and you get an error.

Add this point the `package.json` should look like this:
```json
{
  "name": "app_appium_test",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "@wdio/cli": "^9.5.7",
    "appium": "^2.15.0",
    "appium-flutter-driver": "^2.11.0",
    "appium-flutter-finder": "^0.2.0"
  }
}
```
7. Setup `wdio.conf.js` via WebDriverIO CLI
```bash
sudo npx wdio config
```
8 Complete the prompt as per your requirements, an example is like this:
```bash
✔ A project named "app_appium_test" was detected at "/<Path-to-your-project>/appium_test", correct? yes
✔ What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
✔ Where is your automation backend located? On my local machine
✔ Which environment you would like to automate? Mobile - native, hybrid and mobile web apps, on Android or iOS
✔ Which mobile environment you'd like to automate? iOS - applications on iOS, iPadOS, and tvOS
    > using XCTest (https://appium.github.io/appium-xcuitest-driver)
✔ Which framework do you want to use? Mocha (https://mochajs.org/)
✔ Do you want to use Typescript to write tests? no
✔ Do you want WebdriverIO to autogenerate some test files? yes
✔ What should be the location of your spec files? <Path-to-your-project>/appium_test/test/specs/**/*.js
✔ Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? no
✔ Which reporter do you want to use? spec
✔ Do you want to add a plugin to your test setup? 
✔ Would you like to include Visual Testing to your setup? For more information see https://webdriver.io/docs/visual-testing! no
✔ Do you want to add a service to your test setup? 
? Do you want me to run `npm install` (Y/n) Yes
```
9 Once everything is done and successful, continue the setup for android or iOS via `appium-installer`
```bash
✔ Continue with Appium setup using appium-installer (https://github.com/AppiumTestDistribution/appium-installer)? yes

👋 Hello, Appium user ✨

? Select an option (Use arrow keys)
❯ Need help setting up Android Environment to run your Appium test? 
  Need help setting up iOS Environment to run your Appium test? 
  Install Appium Server 
  Install Appium Drivers 
  Install Appium Plugin 
  Run Appium Doctor 
  Launch Emulators/Simulators 
(Move up and down to reveal more choices)(node:17961) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
```
10. Ultimately you'll be needing two files, `wdio.android.js` and `wdio.ios.js`
`wdio.android.js`:
```js
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
        'appium:deviceName': 'Pixel 4', // device name
        'appium:udid': 'emulator-5554', // generally it common for android emulators
        'appium:noReset': false,
        'appium:automationName': 'Flutter',
        'appium:app': '<Path-to-your-project>/build/app/outputs/flutter-apk/app-debug.apk'
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
```
`wdio.ios.js`:
```js
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
        'appium:deviceName': 'iPhone 16 Pro', // device name
        'appium:platformVersion': '18.2', // device version
        'appium:udid': '<udid of your device>', // device udid get it via `xcrun simctl list`
        'appium:noReset': false,
        'appium:automationName': 'Flutter',
        'appium:app': '<Path-to-your-project>/build/ios/iphonesimulator/Runner.app'
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
```
### 🧪 Run the test
1. Run Appium Server
```bash
appium
```
2. Run the test
```bash
npx wdio run wdio.android.js
```

NOTE: Do not use `sudo` when running the test, it will cause an error!

| Reference: https://stackoverflow.com/a/49251185/12297382