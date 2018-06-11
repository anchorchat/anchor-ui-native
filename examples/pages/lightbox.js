import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lightbox, Text, Button } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const styles = StyleSheet.create({
  leftHeaderButton: {
    paddingLeft: 17,
    color: colors.white
  },
  leftFooterButton: {
    marginLeft: 11
  },
  rightFooterButton: {
    marginRight: 11
  }
});

class LightboxExample extends Component {
  state = {
    visible: false
  }

  showLightbox = () => {
    this.setState({
      visible: true
    });
  }

  hideLightbox = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <View>
        <Button labelText="Open Lightbox" onPress={this.showLightbox} />
        <Lightbox
          headerProps={{
            primaryText: '1 Of 1',
            leftButton: <TouchableOpacity onPress={this.hideLightbox}><Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text></TouchableOpacity>
          }}
          source={{ uri: 'https://images.pexels.com/photos/127902/pexels-photo-127902.jpeg' }}
          thumbnailSource={{ uri: 'https://images.pexels.com/photos/127902/pexels-photo-127902.jpeg?&w=48' }}
          primaryFooterText="Sjaak Luthart"
          secondaryFooterText="Today at 09:34"
          descriptionFooterText="House up in the mountains."
          leftFooterButton={<Ionicons name="ios-share-outline" size={32} color={colors.white} style={styles.leftFooterButton} />}
          rightFooterButton={<Ionicons name="ios-trash-outline" size={32} color={colors.white} style={styles.rightFooterButton} />}
          visible={this.state.visible}
          onRequestClose={this.hideLightbox}
        />
      </View>
    );
  }
}

export default LightboxExample;
