import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import { Text, ThemeProvider, Divider, ContentItem } from './lib';
import { colors, fonts } from './lib/config';

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
      <ThemeProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text type="body-light">Changes you make will automatically reload.</Text>
          <Text type="body-placeholder">Shake your phone to open the developer menu.</Text>
          <Text type="body-accent">Shake your phone to open the developer menu.</Text>
          <Text type="body-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
          <Text type="button">Shake your phone to open the developer menu.</Text>
          <Text type="divider">Shake your phone to open the developer menu.</Text>
          <Text type="heading">Shake your phone to open the developer menu.</Text>
          <Text type="heading-placeholder">Shake your phone to open the developer menu.</Text>
          <Text type="heading-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
          <Text type="navigation">Shake your phone to open the developer menu.</Text>
          <Text type="navigation-emphasized">Shake your phone to open the developer menu.</Text>
          <Text type="navigation-secondary">Shake your phone to open the developer menu.</Text>
          <Text type="tab">Shake your phone to open the developer menu.</Text>
          <Text type="tab-active">Shake your phone to open the developer menu.</Text>
          <Text type="time">Shake your phone to open the developer menu.</Text>
          <Text type="time-contrast" style={{ backgroundColor: colors.secondary }}>Shake your phone to open the developer menu.</Text>
          <Divider />
          <Divider text="A" />
          <ContentItem headerText="Mobile" bodyText="+ 31 6 37 40 52 93" divider />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    ...fonts.regular,
    color: colors.primary
  }
});
