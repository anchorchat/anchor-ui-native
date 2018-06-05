import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, Dimensions } from 'react-native';
import { getOrientation } from '../config/platform';
import getStyles from './styles';
import Text from '../text';

const displayName = 'Header';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Header primary text */
  primaryText: PropTypes.node.isRequired,
  /** Override the styles of the primaryText element */
  primaryTextStyle: NativeText.propTypes.style,
  /**
   * Custom props for the primary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  primaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Header secondary text */
  secondaryText: PropTypes.node,
  /** Override the styles of the primaryText element */
  secondaryTextStyle: NativeText.propTypes.style,
  /**
   * Custom props for the secondary Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  secondaryTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Button for the left hand side of the Header */
  leftButton: PropTypes.node,
  /** Button for the right hand side of the Header */
  rightButton: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  secondaryText: null,
  secondaryTextStyle: {},
  style: {},
  primaryTextProps: {},
  primaryTextStyle: {},
  secondaryTextProps: {},
  leftButton: null,
  rightButton: null
};

/** Headers are used to present multiple items vertically as a single element. */
class Header extends Component {
  state = {
    orientation: getOrientation()
  }

  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: getOrientation()
      });
    });
  }

  render() {
    const {
      primaryText,
      primaryTextStyle,
      secondaryText,
      secondaryTextStyle,
      style,
      primaryTextProps,
      secondaryTextProps,
      leftButton,
      rightButton,
      theme,
      ...custom
    } = this.props;
    const { orientation } = this.state;
    const styles = getStyles(theme.colors, orientation);

    return (
      <View style={styles.statusBar} {...custom}>
        <View style={[styles.container, style]}>
          {leftButton}
          <View style={styles.textContainer}>
            <Text type="heading" numberOfLines={1} style={[styles.primaryText, primaryTextStyle]} {...primaryTextProps}>{primaryText}</Text>
            {
              secondaryText
              ? <Text type="navigation-secondary" numberOfLines={1} style={[styles.secondaryText, secondaryTextStyle]} {...secondaryTextProps}>{secondaryText}</Text>
              : null
            }
          </View>
          {rightButton}
        </View>
      </View>
    );
  }
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
