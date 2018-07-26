/* eslint global-require: [0] */
import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Asset, AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import _ from 'lodash';
import { ThemeProvider, Header } from './anchor-ui-native';
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

const Navigator = createStackNavigator({
  drawerStack: createDrawerNavigator({
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
  }, {
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
    initialRouteName: 'Home'
  })
}, {
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
            <Ionicons name="md-menu" size={32} color={colors.gray} />
          </TouchableOpacity>
        )}
      />
    )
  }),
  initialRouteName: 'drawerStack'
});

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
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    );
  }
}

export default App;
