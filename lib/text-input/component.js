import React from 'react';
import PropTypes from 'prop-types';
import { View, Text as NativeText, TextInput as NativeTextInput } from 'react-native';
import Text from '../text';
import Divider from '../divider';
import getStyles from './styles';
import getTextStyles from '../text/styles';

const displayName = 'TextInput';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** The string that will be rendered before text input has been entered. */
  placeholder: PropTypes.string.isRequired,
  /**
   * Callback fired Input's text is changed
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
  /** Content label text */
  labelText: PropTypes.node,
  /** Override the styles of the label element */
  labelStyle: NativeText.propTypes.style,
  /**
   * Custom props for the label Text component
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  labelTextProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider underneath the bodyText */
  divider: PropTypes.bool,
  /** Override the styles of the divider element */
  dividerStyle: View.propTypes.style,
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
  dividerStyle: {}
};

const TextInput = ({
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
  dividerStyle,
  ...custom
}) => {
  const styles = getStyles();
  const textStyles = getTextStyles(theme.colors, theme.fonts);

  return (
    <View style={[styles.container, style]} {...custom}>
      {
        labelText
        ? (
          <Text type="body-light" style={[styles.label, labelStyle]} {...labelTextProps}>
            {labelText}
          </Text>
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
        {...inputProps}
      />
      {divider ? <Divider style={[styles.divider, dividerStyle]} /> : null}
    </View>
  );
};

TextInput.displayName = displayName;
TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;