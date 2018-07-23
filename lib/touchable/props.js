const touchableWithoutFeedbackProps = [
  'hitSlop',
  'accessibilityComponentType',
  'accessible',
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'disabled',
  'accessibilityTraits',
  'onLayout',
  'onLongPress',
  'onPress',
  'onPressIn',
  'onPressOut',
  'pressRetentionOffset',
  'style'
];

export const touchableHighlightProps = [
  ...touchableWithoutFeedbackProps,
  'onHideUnderlay',
  'onShowUnderlay',
  'style',
  'underlayColor',
  'hasTVPreferredFocus',
  'tvParallaxProperties'
];

export const touchableOpacityProps = [
  ...touchableWithoutFeedbackProps,
  'activeOpacity',
  'tvParallaxProperties',
  'hasTVPreferredFocus'
];

export const touchableNativeFeedbackProps = [
  ...touchableWithoutFeedbackProps,
  'background',
  'useForeground'
];
