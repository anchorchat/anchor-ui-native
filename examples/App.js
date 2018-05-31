import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';
import { Text, ThemeProvider, Divider, ContentItem, Avatar, ListItem, Button } from './anchor-ui-native';
import { colors, fonts } from './anchor-ui-native/config';

export default class App extends React.Component {
  state = {
   fontLoaded: false,
 }

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
      'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf'),
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
          <View style={{ flexDirection: 'row' }}>
            <Avatar source={{ uri: 'https://source.unsplash.com/random/100x100' }} />
            <Avatar text="BG" />
            <Avatar text="MO" color="pink" />
          </View>
          <ListItem
            primaryText="Peter Kuiper"
            divider
          />
          <ListItem
            primaryText="Ian Stewart"
            secondaryText="'Ie-an'"
            divider
          />
          <ListItem
            primaryText="Lars Tadema"
            icon={<Avatar text="LT" color="hotpink" />}
            divider
            dividerStyle={{ left: 64 }}
            rightButton={<Text type="body-accent">I&apos;m a button</Text>}
          />
          <ListItem
            primaryText="Sjaak Luthart"
            secondaryText="If we connect the monitor, we can get to the HDD monitor through the 1080p SMTP card! If we program the matrix, we can get to the SMTP application through the digital THX system!"
            onPress={() => alert('herro')}
            icon={<Avatar text="SL" color="purple" size={64} textStyle={{ fontSize: 32 }} />}
            divider
            dividerStyle={{ left: 64 }}
            time="12:12"
            secondaryTextProps={{
              numberOfLines: 2
            }}
            iconStyle={{ marginTop: 8, marginBottom: 8 }}
          />
          <Button labelText="Click me!" />
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
