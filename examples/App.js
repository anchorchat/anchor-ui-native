import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { ThemeProvider } from './anchor-ui-native';
import { colors, fonts } from './anchor-ui-native/config';
import Avatar from './src/avatar';
import Button from './src/button';
import ContentItem from './src/content-item';
import Divider from './src/divider';
import Home from './src/home';
import ListItem from './src/list-item';
import MessageInput from './src/message-input';
import Text from './src/text';
import TextInput from './src/text-input';

const Navigator = createStackNavigator({
  drawerStack: createDrawerNavigator({
    Home: { screen: Home },
    Avatar: { screen: Avatar },
    Button: { screen: Button },
    ContentItem: { screen: ContentItem },
    Divider: { screen: Divider },
    ListItem: { screen: ListItem },
    MessageInput: { screen: MessageInput },
    Text: { screen: Text },
    TextInput: { screen: TextInput },
  }, {
    contentOptions: {
      activeTintColor: colors.secondary
    },
    initialRouteName: 'Home'
  })
}, {
  navigationOptions: ({ navigation }) => {
    const headerLeft = (
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Ionicons name="md-menu" size={32} color={colors.white} />
      </TouchableOpacity>
    );

    return {
      headerLeft,
      headerStyle: { backgroundColor: colors.secondary, paddingLeft: 15},
      title: 'Anchor UI - native',
      headerTintColor: colors.white
    };
  },
  initialRouteName: 'drawerStack'
});

export default class App extends Component {
  state = {
   fontLoaded: false
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
        <SafeAreaView style={styles.safeAreaContainer}>
          <Navigator />
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
  safeAreaContainer: { flex: 1, backgroundColor: colors.secondary },
  buttonContainer: { flexDirection: 'row' },
  button: { margin: 4 }
});
