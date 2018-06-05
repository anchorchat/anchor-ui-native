import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import getStyles from './styles';
import getTextStyles from '../text/styles';

const displayName = 'MessageInput';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** The string that will be rendered before text input has been entered. */
  placeholder: PropTypes.string.isRequired,
  /**
   * Callback fired when TextInput's text is changed
   *
   * function(text: string) => void
   */
  onChangeText: PropTypes.func.isRequired,
  /** TextInput value */
  value: PropTypes.string.isRequired,
  /** Override the styles of the input element */
  inputStyle: TextInput.propTypes.style,
  /**
   * Custom props for the TextInput component
   *
   * See https://facebook.github.io/react-native/docs/textinput.html#props for available props.
   */
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Icon for the left hand side of the TextInput */
  leftIcon: PropTypes.node,
  /** Override the styles of the icon container */
  leftIconStyle: View.propTypes.style,
  /** Icon for the right hand side of the TextInput */
  rightIcon: PropTypes.node,
  /** Override the styles of the icon container */
  rightIconStyle: View.propTypes.style,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  inputProps: {},
  leftIcon: null,
  leftIconStyle: {},
  rightIcon: null,
  rightIconStyle: {}
};

/** Component for inputting messages using a keyboard. */
class MessageInput extends Component {
  render() {
    const {
      style,
      onChangeText,
      value,
      placeholder,
      inputStyle,
      inputProps,
      leftIcon,
      leftIconStyle,
      rightIcon,
      rightIconStyle,
      theme,
      ...custom
    } = this.props;

    const styles = getStyles(theme.colors);
    const textStyles = getTextStyles(theme.colors, theme.fonts);

    return (
      <View style={[styles.container, style]} {...custom}>
        {
          leftIcon
          ? <View style={[styles.leftIcon, leftIconStyle]}>{leftIcon}</View>
          : null
        }
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.lightGray}
          onChangeText={onChangeText}
          value={value}
          style={[textStyles.body, styles.input, inputStyle]}
          selectionColor={theme.colors.primary}
          underlineColorAndroid="transparent"
          multiline
          onContentSizeChange={this.handleContentSizeChange}
          {...inputProps}
        />
        {
          rightIcon
          ? <View style={[styles.rightIcon, rightIconStyle]}>{rightIcon}</View>
          : null
        }
      </View>
    );
  }
}

MessageInput.displayName = displayName;
MessageInput.propTypes = propTypes;
MessageInput.defaultProps = defaultProps;

export default MessageInput;
