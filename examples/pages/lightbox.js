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
  footer: {
    paddingLeft: 11,
    paddingRight: 11,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lightboxHeading: {
    textAlign: 'center'
  },
  time: {
    color: colors.white,
    textAlign: 'center'
  },
  description: {
    marginLeft: 17,
    marginBottom: 4,
    marginTop: 8
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
    const { visible } = this.state;
    return (
      <View>
        <Button labelText="Open Lightbox" onPress={this.showLightbox} />
        <Lightbox
          headerProps={{
            primaryText: '1 Of 1',
            leftButton: <TouchableOpacity onPress={this.hideLightbox}><Text type="navigation-emphasized" style={styles.leftHeaderButton}>Done</Text></TouchableOpacity>
          }}
          source={{ uri: 'https://images.pexels.com/photos/127902/pexels-photo-127902.jpeg?w=1500' }}
          thumbnailSource={{ uri: 'https://images.pexels.com/photos/127902/pexels-photo-127902.jpeg?&w=48' }}
          visible={visible}
          onRequestClose={this.hideLightbox}
          footer={(
            <View>
              <Text type="body-contrast" style={styles.description}>House up in the mountains.</Text>
              <View style={styles.footer}>
                <Ionicons name="ios-share-outline" size={32} color={colors.white} />
                <View>
                  <Text type="heading-contrast" style={styles.lightboxHeading}>Sjaak Luthart</Text>
                  <Text type="heading-secondary" style={styles.time}>Today at 09:34</Text>
                </View>
                <Ionicons name="ios-trash-outline" size={32} color={colors.white} />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default LightboxExample;
