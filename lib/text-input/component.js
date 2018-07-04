import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text as NativeText,
  TextInput as NativeTextInput,
  TouchableWithoutFeedback,
  ViewPropTypes
} from 'react-native';
import Text from '../text';
import Divider from '../divider';
import getStyles from './styles';
import getTextStyles from '../text/styles';

const displayName = 'TextInput';

const propTypes = {
  /** Override the styles of the root element */
  style: ViewPropTypes.style,
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
  inputStyle: NativeTextInput.propTypes.style,
  /**
   * Custom props for the TextInput component
   *
   * See https://facebook.github.io/react-native/docs/textinput.html#props for available props.
   */
  inputProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** TextInput label text */
  labelText: PropTypes.node,
  /** Override the styles of the label element */
  labelStyle: NativeText.propTypes.style,
  /**
   * Custom props for the label Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  labelTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider underneath the TextInput */
  divider: PropTypes.bool,
  /**
   * Custom props for the Divider component
   *
   * See Divider for available props.
   */
  dividerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  inputProps: {},
  labelText: null,
  labelStyle: {},
  labelTextProps: {},
  divider: null,
  dividerProps: {}
};

/** Component for inputting text using a keyboard. */
class TextInput extends Component {
  input = createRef();

  focusInput = () => {
    const input = this.input.current;

    input.focus();
  }

  render() {
    const {
      style,
      onChangeText,
      value,
      placeholder,
      inputStyle,
      inputProps,
      labelText,
      labelStyle,
      labelTextProps,
      theme,
      divider,
      dividerProps,
      ...custom
    } = this.props;
    const styles = getStyles();
    const textStyles = getTextStyles(theme.colors, theme.fonts);

    return (
      <View style={[styles.container, style]} {...custom}>
        {
          labelText
          ? (
            <TouchableWithoutFeedback onPress={this.focusInput}>
              <Text type="body-light" style={[styles.label, labelStyle]} {...labelTextProps}>
                {labelText}
              </Text>
            </TouchableWithoutFeedback>
          )
          : null
        }
        <NativeTextInput
          placeholder={placeholder}
          placeholderTextColor={theme.colors.lightGray}
          onChangeText={onChangeText}
          value={value}
          style={[textStyles.body, styles.input, inputStyle]}
          selectionColor={theme.colors.primary}
          underlineColorAndroid="transparent"
          ref={this.input}
          {...inputProps}
        />
        {divider ? <Divider {...dividerProps} /> : null}
      </View>
    );
  }
}

TextInput.displayName = displayName;
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
