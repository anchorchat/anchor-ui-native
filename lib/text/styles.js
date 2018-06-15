import { StyleSheet } from 'react-native';

export default (colors, fonts) => (
  StyleSheet.create({
    body: {
      ...fonts.regular,
      color: colors.black,
      fontSize: 15
    },
    'body-light': {
      ...fonts.regular,
      color: colors.darkGray,
      fontSize: 15
    },
    'body-lighter': {
      ...fonts.regular,
      color: colors.lightGray,
      fontSize: 15
    },
    'body-accent': {
      ...fonts.regular,
      color: colors.primary,
      fontSize: 15
    },
    'body-contrast': {
      ...fonts.regular,
      color: colors.white,
      fontSize: 15
    },
    button: {
      ...fonts.semiBold,
      color: colors.primary,
      fontSize: 15
    },
    divider: {
      ...fonts.bold,
      color: colors.darkGray,
      fontSize: 14
    },
    heading: {
      ...fonts.semiBold,
      color: colors.black,
      fontSize: 17
    },
    'heading-contrast': {
      ...fonts.semiBold,
      color: colors.white,
      fontSize: 17
    },
    'heading-light': {
      ...fonts.semiBold,
      color: colors.lightGray,
      fontSize: 17
    },
    'heading-secondary': {
      ...fonts.regular,
      color: colors.darkGray,
      fontSize: 14
    },
    navigation: {
      ...fonts.regular,
      color: colors.primary,
      fontSize: 17
    },
    'navigation-emphasized': {
      ...fonts.bold,
      color: colors.primary,
      fontSize: 17
    },
    tab: {
      ...fonts.semiBold,
      color: colors.gray,
      fontSize: 10
    },
    'tab-active': {
      ...fonts.semiBold,
      color: colors.primary,
      fontSize: 10
    },
    time: {
      ...fonts.italic,
      color: colors.lightGray,
      fontSize: 10
    },
    'time-contrast': {
      ...fonts.italic,
      color: colors.white,
      fontSize: 10
    },
    avatar: {
      ...fonts.bold,
      color: colors.white,
      fontSize: 18
    }
  })
);
