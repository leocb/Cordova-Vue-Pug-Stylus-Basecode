# Leocb's hybrid app basecode

## A Cordova basecode with Vue, Vuetify, Pug and Stylus

Welcome to my personal basecode, if you want to use this code, fork it and then do whatever you want with it.

_Note: A Firebase branch is planned for the future, but if you want to help me set it up, open a PR_

## What is this

This is a “Hybrid Mobile App” Which is basically a webview running inside a native app with some extra features like screen control, file access, sensors, etc.

This is based on: https://itnext.io/make-hybrid-platform-cordova-vue-webpack-2fb7031c4f9b

### What is what

- **Cordova**: Is a wrapper, not a framework. Apache Cordova is a layer between the device and the web app. It's responsible for executing a webview in the phone and providing native features not usually available on the web, like file access and sensors. (altough PWAs are changing this, but while iOS doesn't support it, we still have to use a hybrid app solution)
- **Vue**: Is a very nice, easy and powerfull javascript framework, we use it to be able to make the app an SPA.
- **Webpack**: This compiles everything, the pug, the stylus and what not, uglyfies it (make the app small and fast) and then generates a tiny html/js/css code that will be used by cordova when we build the final app.

## Development setup

### By the end of this section, you should have the following Programs setup

- Node
- NPM
- Git
- VSCode (or any other text editor)
- Java 8+
- Android Studio
- Android SDK - API level 26
- Android SDK - API level 19
- Graddle

### Install and configure (Android only for now)

All of the following commands should be executed in the root folder of this base code.

_Note: iOS setup instructions are still pending since I don't have a Mac to test it myself :(_

1. Android - Install the cordova requirements for Android following the official docs: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#requirements-and-support - Pay special attention to the instructions on installing Android Studio, Android SDK API 19, Android SDK API 26 and Graddle.
2. iOS - Pending
3. Install the Vue-CLI globally with the command `npm install -g vue-cli`
4. Install Cordova globally with the command `npm install -g cordova`
5. Install the project dependencies with `npm install` (If "fsevents" fails to install, don't worry, it's a Mac only dependency)
6. Check if all is correct with the command `cordova requirements` - if this return an "ok" you are ready to go!

### VSCode extensions

The following extensions are recommended but not required

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Manta's Stylus Supremacy](https://marketplace.visualstudio.com/items?itemName=thisismanta.stylus-supremacy)

### Execute the Dev environment

After everything is installed, type the command `cordova run android` to 
execute the app on a phone connected via ADB. If you installed the  AVD Android emulator and wish to run the app on it, use the command `cordova emulate android`

### Usefull commands

- `npm run dev` To execute a local dev enviroment on the browser without packaging the APK
- `npm run test` To execute unit tests
- `npm run build` To compile the code and build the APK for Android (iOS is pending)

## Publish on the Google Play Store

> still TODO, just follow the cordova docs for now: https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#signing-an-app
