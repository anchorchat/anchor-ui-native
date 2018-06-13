/* global alert */
import React from 'react';
import _ from 'lodash';
import { StyleSheet } from 'react-native';
import { ContactList } from '../anchor-ui-native';
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

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const contacts = _.map(ALPHABET, letter => ({
  title: `${letter}`, data: [{ name: `${letter}B` }, { name: `${letter}C` }, { name: `${letter}D` }]
}));

export default () => (
  <ContactList
    alphabetPicker
    contacts={contacts}
    onItemPress={item => alert(`Pressed: ${item.name}`)}
    style={styles.wrapper}
  />
);
