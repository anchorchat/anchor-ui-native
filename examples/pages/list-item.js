import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Avatar, ListItem, Text, Counter } from '../anchor-ui-native';
import Checkmark from '../anchor-ui-native/icons/checkmark';
import { colors } from '../anchor-ui-native/config';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 16
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
      <Text type="heading" style={styles.heading}>With dividerBottom</Text>
      <ListItem primaryText="Charlotte Uithoven" dividerBottom />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With secondaryText</Text>
      <ListItem
        primaryText="Ian Stewart"
        secondaryText="'Ie-an'"
        dividerBottom
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With rightButton, icon and dividerBottom style</Text>
      <ListItem
        primaryText="Lars Tadema"
        icon={<Avatar text="LT" color="hotpink" />}
        dividerBottom
        dividerBottomStyle={{ borderColor: 'hotpink' }}
        dividerBottomProps={{ offset: 64 }}
        rightButton={<Text type="body-accent">I&apos;m a button</Text>}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With time and multiple lines</Text>
      <ListItem
        primaryText="Sjaak Luthart"
        secondaryText="If we connect the monitor, we can get to the HDD monitor through the 1080p SMTP card! If we program the matrix, we can get to the SMTP application through the digital THX system!"
        icon={<Avatar text="SL" color="purple" size={64} textStyle={{ fontSize: 32 }} />}
        dividerBottom
        dividerBottomProps={{ offset: 80 }}
        time="12:12"
        secondaryTextProps={{
          numberOfLines: 2
        }}
        iconStyle={{ marginTop: 8, marginBottom: 8 }}
        counter={<Counter value={1} />}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With leftButton</Text>
      <ListItem
        primaryText="Henk de Vries"
        icon={<Avatar text="HV" color="lightsteelblue" />}
        dividerBottom
        dividerBottomProps={{ offset: 100 }}
        leftButton={<Checkmark color={colors.primary} />}
      />
    </View>
    <View style={styles.item}>
      <Text type="heading" style={styles.heading}>With Top & Bottom divider</Text>
      <ListItem
        primaryText="Piet Heijn"
        icon={<Avatar text="PH" color="darkkhaki" />}
        dividerBottom
        dividerTop
      />
    </View>
  </ScrollView>
);
