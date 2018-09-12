import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Audio } from 'expo';
import round from 'lodash/round';
import { Text, Touchable } from '../anchor-ui-native';
import IconSend from '../anchor-ui-native/icons/send';
import IconClose from '../anchor-ui-native/icons/close';
import { colors } from '../anchor-ui-native/config';

const navigationOptions = () => ({
  title: 'Home'
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1
  },
  headingLarge: {
    fontSize: 20,
    marginBottom: 16
  }
});

class Home extends Component {
  state = {
    status: {
      isPlaying: false,
      isLoaded: false,
    },
    percentage: 0
  }

  async componentDidMount() {
    try {
      this.audio = await Audio.Sound.create(
        require('../assets/sound.mp3'),
        { progressUpdateIntervalMillis: 1000 },
        this.handleUpdate
      )
      // await bla.sound.playAsync()
      // await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log('error', error);
      // An error occurred!
    }
  }

  handleUpdate = (status) => {
    this.setState({
      status,
      percentage: status.positionMillis && status.positionMillis !== 0
        ? round((status.positionMillis / status.playableDurationMillis) * 100, 2)
        : 0
    });
  }

  handlePlay = async () => {
    await this.audio.sound.playAsync();
  }

  handlePause = async () => {
    await this.audio.sound.pauseAsync();
  }

  render() {
    const { status, percentage } = this.state;
    // console.log(percentage);

    return (
      <View style={styles.wrapper}>
        <Text type="heading" style={styles.headingLarge}>AnchorUI Native</Text>
        {/* <Text>
          Welcome in the AnchorUI Native examples. View the components by using the drawer navigation.
        </Text> */}
        {
          status.isPlaying
            ? <Touchable onPress={this.handlePause}><IconClose color="red" /></Touchable>
            : <Touchable onPress={this.handlePlay}><IconSend color="green" /></Touchable>
        }
        <View style={{ width: 200, height: 5, borderRadius: 5, overflow: 'hidden' }}>
          <View style={{ width: `${percentage}%`, height: 5, backgroundColor: 'hotpink' }} />
        </View>
        <Text>{percentage}</Text>
      </View>
    );
  }
}

Home.navigationOptions = navigationOptions;

export default Home;
