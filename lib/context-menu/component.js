import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import getStyles from './styles';
import Text from '../text';
import Touchable from '../touchable';

const displayName = 'ContextMenu';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
  /** Override the styles of the textContainer element */
  textContainerStyle: ViewPropTypes.style,
  /** Override the styles of the textContainer element */
  itemStyle: ViewPropTypes.style,
  /**
   * Custom props for the item Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  itemTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** ContextMenu items. Must be an array of objects containing the following:
   *
   * {
   *   key: String,
   *   text: Node,
   *   onPress: Function
   * }
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired
  })).isRequired,
  /** Override the styles of the notch element */
  notchStyle: ViewPropTypes.style,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  textContainerStyle: {},
  itemStyle: {},
  itemTextProps: {},
  notchStyle: {}
};

/** Display a menu of buttons based on an array of items */
const ContextMenu = ({
  items,
  style,
  theme,
  textContainerStyle,
  itemStyle,
  itemTextProps,
  notchStyle,
  ...custom
}) => {
  const styles = getStyles(theme.colors, theme.fonts);

  return (
    <View style={[styles.container, style]} {...custom}>
      <View style={styles.textContainer}>
        {items.map((item, index) => {
          const isLastItem = index === (items.length - 1);

          return (
            <Touchable
              onPress={item.onPress}
              key={item.key}
              style={[styles.item, !isLastItem ? styles.itemBorder : null]}
              opacity
            >
              <Text type="body-contrast" {...itemTextProps} style={styles.text}>{item.text}</Text>
            </Touchable>
          );
        })}
      </View>
      <View style={[styles.notch, notchStyle]} />
    </View>
  );
};

ContextMenu.displayName = displayName;
ContextMenu.propTypes = propTypes;
ContextMenu.defaultProps = defaultProps;

export default ContextMenu;
