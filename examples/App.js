/* eslint global-require: [0] */
import React, { Component } from 'react';
import { TouchableOpacity, Image, Platform } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import _ from 'lodash';
import { UIProvider, Header } from './anchor-ui-native';
import { colors, fonts } from './anchor-ui-native/config';
import Avatar from './pages/avatar';
import Button from './pages/button';
import ContentItem from './pages/content-item';
import MessageSeparator from './pages/message-separator';
import Divider from './pages/divider';
import Home from './pages/home';
import Lightbox from './pages/lightbox';
import ListItem from './pages/list-item';
import MessageInput from './pages/message-input';
import Text from './pages/text';
import TextInput from './pages/text-input';
import HeaderExample from './pages/header';
import MessageHighlight from './pages/message-highlight';
import Message from './pages/message';
import ContextMenu from './pages/context-menu';
import ContactList from './pages/contact-list';
import Picker from './pages/picker';
import Icons from './pages/icons';
import Counter from './pages/counter';

const cacheImages = images => (
  _.map(images, (image) => {
    if (_.isString(image)) {
      return Image.prefetch(image);
    }

    return Asset.fromModule(image).downloadAsync();
  })
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Avatar: { screen: Avatar },
    Button: { screen: Button },
    ContactList: { screen: ContactList },
    ContentItem: { screen: ContentItem },
    ContextMenu: { screen: ContextMenu },
    Counter: { screen: Counter },
    Divider: { screen: Divider },
    Header: { screen: HeaderExample },
    Icons: { screen: Icons },
    Lightbox: { screen: Lightbox },
    ListItem: { screen: ListItem },
    Message: { screen: Message },
    MessageHighlight: { screen: MessageHighlight },
    MessageInput: { screen: MessageInput },
    MessageSeparator: { screen: MessageSeparator },
    Picker: { screen: Picker },
    Text: { screen: Text },
    TextInput: { screen: TextInput },
  },
  {
    contentOptions: {
      labelStyle: {
        ...fonts.regular,
        color: colors.black,
        fontSize: 14
      },
      activeLabelStyle: {
        color: colors.primary
      }
    },
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      header: (
        <Header
          primaryText="AnchorUI Native"
          secondaryText="UI kit for Chat Engines"
          leftButton={(
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              style={{ marginLeft: 11 }}
            >
              <Ionicons
                name="md-menu"
                size={32}
                color={Platform.OS === 'ios' ? colors.gray : colors.white}
              />
            </TouchableOpacity>
          )}
        />
      )
    })
  }
);

const StackNavigator = createStackNavigator(
  {
    drawerStack: DrawerNavigator
  },
  {
    initialRouteName: 'drawerStack'
  }
);

const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
  state = {
    assetsLoaded: false
  }

  loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/avatar.jpg'),
      require('./assets/images/background.jpg')
    ]);

    return Promise.all([...imageAssets]);
  }

  render() {
    const { assetsLoaded } = this.state;

    if (!assetsLoaded) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ assetsLoaded: true })}
          onError={console.warn} // eslint-disable-line no-console
        />
      );
    }

    return (
      <UIProvider>
        <AppContainer />
      </UIProvider>
    );
  }
}

export default App;
