# AnchorUI Native Examples

## Requirements

- [Node](https://github.com/creationix/nvm) ^4.8.0 || ^5.7.0 || ^6.2.2 || >=8.0.0
- [Yarn](https://yarnpkg.com/en/)

## Getting started

Install the node_modules:
```bash
yarn install
```

## Running

Start the development server:
```bash
yarn start
```

## Starting Android emulator
First check if the emulator command is registered in the terminal:
```bash
which emulator
```

If this is not the case add the following to your `~/.zshrc` config:
```bash
export ANDROID_HOME="$HOME/Library/Android/sdk"
export PATH=$PATH:$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

Open Android Studio and make sure a sdk is installed. see: https://developer.android.com/studio/intro/update

Create an emulator, Pixel_2_XL_API_27 recommended. see: https://developer.android.com/studio/run/managing-avds

Start your emulator with:
```sh
$ emulator @Pixel_2_XL_API_27
```

For more information: https://developer.android.com/studio/run/emulator-commandline

## Running with debugger enabled
Install [React Native Debugger](https://github.com/jhen0409/react-native-debugger) `brew update && brew cask install react-native-debugger`

Make sure all React Native debugger clients are closed, usually they're running on `http://localhost:<port>/debugger-ui`


After running `yarn start` make sure development mode is enabled:
`› Press d to toggle development mode. (current mode: production)`

You can also check this with:
```bash
cat .expo/settings.json | grep dev
```

If this setting is false, set it to true

Open project with debugger:

```bash
yarn run start:debug
```

Follow expo instructions, press `i` to open iOS simulator

If debugger is not open, press `cmd + D` and click `Debug Remote JS`. This will open the debugger and restart the app.

## Troubleshooting
- iOS simulator gives error code 60:
`"Simulator" -> "Reset Content and Settings"`

- Runtime ready for debugging when running the app
Quit simulator and start again. This happens because a debugger needs to be connected. Or if there are multiple debuggers connected.
