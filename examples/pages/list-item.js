import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Avatar, ListItem, Text } from '../anchor-ui-native';
import { colors } from '../anchor-ui-native/config';

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: colors.white,
    flex: 1
  },
  item: {
    marginBottom: 8,
    alignItems: 'flex-start'
  },
  heading: {
    marginBottom: 8
  },
  headingLarge: {
    fontSize: 20,
    marginBottom: 16
  }
});

export default () => (
  <ScrollView style={styles.wrapper}>
    <Text type="heading" style={styles.headingLarge}>ListItem</Text>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>Default</Text>
      <ListItem primaryText="Peter Kuiper" />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With divider</Text>
      <ListItem primaryText="Charlotte Uithoven" divider />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With secondaryText</Text>
      <ListItem
        primaryText="Ian Stewart"
        secondaryText="'Ie-an'"
        divider
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With rightButton, icon and divider style</Text>
      <ListItem
        primaryText="Lars Tadema"
        icon={<Avatar text="LT" color="hotpink" />}
        divider
        dividerStyle={{ left: 64, borderColor: 'hotpink' }}
        rightButton={<Text type="body-accent">I&apos;m a button</Text>}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With time and multiple lines</Text>
      <ListItem
        primaryText="Sjaak Luthart"
        secondaryText="If we connect the monitor, we can get to the HDD monitor through the 1080p SMTP card! If we program the matrix, we can get to the SMTP application through the digital THX system!"
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
