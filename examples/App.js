import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { ThemeProvider, Header } from './anchor-ui-native';
import { colors } from './anchor-ui-native/config';
import Avatar from './pages/avatar';
import Button from './pages/button';
import ContentItem from './pages/content-item';
import Divider from './pages/divider';
import Home from './pages/home';
import ListItem from './pages/list-item';
import MessageInput from './pages/message-input';
import Text from './pages/text';
import TextInput from './pages/text-input';
import HeaderExample from './pages/header';

const Navigator = createStackNavigator({
  drawerStack: createDrawerNavigator({
    Home: { screen: Home },
    Avatar: { screen: Avatar },
    Button: { screen: Button },
    ContentItem: { screen: ContentItem },
    Divider: { screen: Divider },
    Header: { screen: HeaderExample },
    ListItem: { screen: ListItem },
    MessageInput: { screen: MessageInput },
    Text: { screen: Text },
    TextInput: { screen: TextInput },
  }, {
    contentOptions: {
      activeTintColor: colors.primary
    },
    initialRouteName: 'Home'
  })
}, {
  navigationOptions: ({ navigation }) => ({
    header: (
      <Header
        primaryText="AnchorUI Native"
        secondaryText="UI kit for Chat Engines"
        leftButton={
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 11 }}
          >
            <Ionicons name="md-menu" size={32} color={colors.gray} />
          </TouchableOpacity>
        }
      />
    )
  }),
  initialRouteName: 'drawerStack'
});

class App extends Component {
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

    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      fontLoaded: true
    });
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) {
      return null;
    }

    return (
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    );
  }
}

export default App;
