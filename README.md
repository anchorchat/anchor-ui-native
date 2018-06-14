# AnchorUI Native

## Install using npm

```bash
npm i -S anchor-ui-native
```

## Or install using yarn

```bash
yarn add anchor-ui-native
```

## Requirements

- [Node](https://github.com/creationix/nvm) ^4.8.0 || ^5.7.0 || ^6.2.2 || >=8.0.0
- [Yarn](https://yarnpkg.com/en/)

## Getting started

Install the node_modules:
```bash
yarn install
```

Copy the `lib` folder to `docs` and `examples`:
```bash
make build
```

Copy the `lib` folder and watch for changes:
```bash
yarn run watch
```

## Running the examples

After installing the requirements in the root directory, navigate to `examples` and install it's requirements.

```bash
cd examples && yarn install
```

Start the example React Native app by running:

```bash
yarn start
```

This will start [Expo](https://expo.io/) and you can choose to run the examples in a simulator or real device.

Check [example's README](https://github.com/anchorchat/anchor-ui-native/blob/master/examples/README.md) for using the React Native debugger.

## Running the docs

After installing the requirements in the root directory, navigate to `docs` and install it's requirements.

```bash
cd docs && yarn install
```

Start the docs React app by running:

```bash
yarn start
```
