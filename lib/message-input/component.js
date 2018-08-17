import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Animated,
  Keyboard,
  ViewPropTypes
} from 'react-native';
import getStyles from './styles';
import getTextStyles from '../text/styles';
import Divider from '../divider';

const displayName = 'MessageInput';

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
  leftIconStyle: ViewPropTypes.style,
  /** Icon for the right hand side of the TextInput */
  rightIcon: PropTypes.node.isRequired,
  /** Override the styles of the icon container */
  rightIconStyle: ViewPropTypes.style,
  /** Render a Divider above the MessageInput */
  divider: PropTypes.bool,
  /**
   * Custom props for the top Divider component
   *
   * See Divider for available props.
   */
  dividerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired,
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired
};

const defaultProps = {
  style: {},
  inputStyle: {},
  inputProps: {},
  leftIconStyle: {},
  leftIcon: null,
  rightIconStyle: {},
  divider: true,
  dividerProps: {}
};

/** Component for inputting messages using a keyboard. */
class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paddingBottom: props.safeArea.bottom
    };

    this.keyboardPaddingBottom = new Animated.Value(props.safeArea.bottom);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.safeArea.bottom !== state.paddingBottom) {
      return {
        paddingBottom: props.safeArea.bottom
      };
    }

    return null;
  }

  componentDidMount() {
    this.keyboardWillShowEvent = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideEvent = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowEvent.remove();
    this.keyboardWillHideEvent.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.keyboardPaddingBottom, {
      duration: event.duration,
      toValue: 0,
    }).start();
  };

  keyboardWillHide = (event) => {
    const { paddingBottom } = this.state;
    Animated.timing(this.keyboardPaddingBottom, {
      duration: event.duration,
      toValue: paddingBottom,
    }).start();
  };

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
      safeArea,
      theme,
      divider,
      dividerProps,
      ...custom
    } = this.props;
    const styles = getStyles(theme.colors, safeArea);
    const textStyles = getTextStyles(theme.colors, theme.fonts);

    return (
      <Animated.View
        style={[styles.container, style, { paddingBottom: this.keyboardPaddingBottom }]}
        {...custom}
      >
        {divider ? <Divider {...dividerProps} /> : null}
        <View style={styles.row}>
          {leftIcon ? <View style={[styles.leftIcon, leftIconStyle]}>{leftIcon}</View> : null}
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={theme.colors.lightGray}
            onChangeText={onChangeText}
            value={value}
            style={[textStyles.body, styles.input, inputStyle]}
            selectionColor={theme.colors.primary}
            underlineColorAndroid="transparent"
            multiline
            allowFontScaling={false}
            {...inputProps}
          />
          <View style={[styles.rightIcon, rightIconStyle]}>{rightIcon}</View>
        </View>
      </Animated.View>
    );
  }
}

MessageInput.displayName = displayName;
MessageInput.propTypes = propTypes;
MessageInput.defaultProps = defaultProps;

export default MessageInput;
