/* global alert */
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Avatar, ListItem, Text } from '../anchor-ui-native';

export default () => (
  <ScrollView style={[styles.wrapper]}>
    <View style={styles.item}>
      <Text>Default ListItem</Text>
      <ListItem primaryText="Peter Kuiper" />
    </View>
    <View style={styles.item}>
      <Text>ListItem with divider</Text>
      <ListItem
        primaryText="Peter Kuiper"
        divider
      />
    </View>
    <View style={styles.item}>
      <Text>ListItem with secondaryText</Text>
      <ListItem
        primaryText="Ian Stewart"
        secondaryText="'Ie-an'"
        divider
      />
    </View>
    <View style={styles.item}>
      <Text>ListItem with rightButton and custom divider style</Text>
      <ListItem
        primaryText="Lars Tadema"
        icon={<Avatar text="LT" color="hotpink" />}
        divider
        dividerStyle={{ left: 64, borderColor: 'hotpink' }}
        rightButton={<Text type="body-accent">I&apos;m a button</Text>}
      />
    </View>
    <View style={styles.item}>
      <Text>ListItem with time and multiple lines</Text>
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
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  item: {
    margin: 8
  }
});
