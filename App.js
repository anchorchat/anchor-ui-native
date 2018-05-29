import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
   fontLoaded: false,
 }

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-semi-bold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.textContainer}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontFamily: 'nunito-regular'
  }
});
