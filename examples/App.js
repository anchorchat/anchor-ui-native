import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import { ThemeProvider } from './anchor-ui-native';
import { colors } from './anchor-ui-native/config';
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
      activeTintColor: colors.primary
    },
    initialRouteName: 'Home'
  })
}, {
  navigationOptions: ({ navigation }) => {
    const headerLeft = (
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Ionicons name="md-menu" size={32} color={colors.gray} />
      </TouchableOpacity>
    );

    return {
      headerLeft,
      headerStyle: { backgroundColor: colors.lighterGray, paddingLeft: 17 },
      title: 'AnchorUI Native',
      headerTintColor: colors.black
    };
  },
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
