import { StyleSheet } from 'react-native';

export default (colors, fonts) => (
  StyleSheet.create({
    body: {
      ...fonts.regular,
      color: colors.black,
      fontSize: 15,
      lineHeight: 16
    },
    'body-light': {
      ...fonts.regular,
      color: colors.darkGray,
      fontSize: 15,
      lineHeight: 16
    },
    'body-lighter': {
      ...fonts.regular,
      color: colors.lightGray,
      fontSize: 15,
      lineHeight: 16
    },
    'body-accent': {
      ...fonts.regular,
      color: colors.primary,
      fontSize: 15,
      lineHeight: 16
    },
    'body-contrast': {
      ...fonts.regular,
      color: colors.white,
      fontSize: 15,
      lineHeight: 16
    },
    button: {
      ...fonts.semiBold,
      color: colors.primary,
      fontSize: 15,
      lineHeight: 16
    },
    divider: {
      ...fonts.bold,
      color: colors.darkGray,
      fontSize: 14
    },
    heading: {
      ...fonts.semiBold,
      color: colors.black,
      fontSize: 17,
      lineHeight: 22
    },
    'heading-contrast': {
      ...fonts.semiBold,
      color: colors.white,
      fontSize: 17,
      lineHeight: 22
    },
    'heading-light': {
      ...fonts.semiBold,
      color: colors.lightGray,
      fontSize: 17,
      lineHeight: 22
    },
    'heading-message': {
      ...fonts.bold,
      color: colors.primary,
      fontSize: 12
    },
    'heading-secondary': {
      ...fonts.regular,
      color: colors.darkGray,
      fontSize: 14,
      lineHeight: 16
    },
    navigation: {
      ...fonts.regular,
      color: colors.primary,
      fontSize: 17,
      lineHeight: 22
    },
    'navigation-emphasized': {
      ...fonts.bold,
      color: colors.primary,
      fontSize: 17,
      lineHeight: 22
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
      fontSize: 10,
      lineHeight: 12
    },
    'time-contrast': {
      ...fonts.italic,
      color: colors.white,
      fontSize: 10,
      lineHeight: 12
    },
    avatar: {
      ...fonts.bold,
      color: colors.white
    },
    counter: {
      ...fonts.semiBold,
      color: colors.white,
      fontSize: 10
    },
    'message-separator': {
      ...fonts.semiBold,
      color: colors.white,
      fontSize: 14,
      lineHeight: 16
    }
  })
);
