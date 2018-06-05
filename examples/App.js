/* global alert */
import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {
  Text,
  ThemeProvider,
  Divider,
  ContentItem,
  Avatar,
  ListItem,
  Button,
  TextInput,
  Message
} from './anchor-ui-native';
import { colors, fonts } from './anchor-ui-native/config';

export default class App extends React.Component {
  state = {
   fontLoaded: false,
   text: ''
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

  handleTextChange = (text) => {
    this.setState({
      text
    });
  }

  render() {
    const { fontLoaded, text } = this.state;

    if (!fontLoaded) {
      return null;
    }

    return (
      <ThemeProvider>
        <SafeAreaView style={styles.safeAreaContainer}>
          <ScrollView contentContainerStyle={styles.container}>
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
              dividerStyle={{ left: 80 }}
              time="12:12"
              secondaryTextProps={{
                numberOfLines: 2
              }}
              iconStyle={{ marginTop: 8, marginBottom: 8 }}
            />
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                labelText="Click me!"
                onPress={() => alert('You pressed me!')}
              />
              <Button
                style={styles.button}
                labelText="Herro!"
                icon={<Ionicons name="ios-analytics" size={20} color={colors.primary} />}
                onPress={() => alert('Button says no!')}
              />
            </View>
            <TextInput
              labelText="Text"
              placeholder="Jot something down..."
              onChangeText={this.handleTextChange}
              value={text}
              divider
            />
            <View style={styles.messageContainer}>
              <Message
                type="text"
                bodyText="Tremblant is based in Canada and has over 90 runs millions of skiers each year bliep."
                time="12:32"
              />
              <Message
                type="text"
                align="right"
                bodyText="Tremblant is based in Canada and has over 90 runs millions of skiers each year."
                time="12:32"
                statusIcon={<Ionicons style={{ paddingLeft: 2 }} name="ios-checkmark" size={16} color={colors.white} />}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    ...fonts.regular,
    color: colors.primary
  },
  safeAreaContainer: { flex: 1 },
  buttonContainer: { flexDirection: 'row' },
  button: { margin: 4 },
  messageContainer: { backgroundColor: 'steelblue', width: '100%' }
});
