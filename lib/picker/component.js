import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Picker as NativePicker,
  Text as NativeText,
  Platform,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import map from 'lodash/map';
import find from 'lodash/find';
import getStyles from './styles';
import Divider from '../divider';
import Text from '../text';
import IconChevronRight from '../icons/chevron-right';

const displayName = 'Picker';

const propTypes = {
  /** Value matching the value of one of the items */
  selectedValue: PropTypes.string.isRequired,
  /** Picker items. Must be an array of objects containing the following:
   *
   * {
   *   label: String,
   *   value: String
   * }
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  /**
   * Callback fired when an item is selected
   *
   * function(itemValue: string, itemPosition: number) => void
   */
  onValueChange: PropTypes.func.isRequired,
  /** Override the styles of the picker element */
  pickerStyle: NativePicker.propTypes.style,
  /** Override the styles of the picker item element, iOS only */
  pickerItemStyle: NativePicker.propTypes.style,
  /**
   * Custom props for the Picker component
   *
   * See https://facebook.github.io/react-native/docs/picker.html#props for available props.
   */
  pickerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Render a Divider underneath the Picker */
  divider: PropTypes.bool,
  /**
   * Custom props for the Divider component
   *
   * See Divider for available props.
   */
  dividerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the text element, iOS only */
  textStyle: NativeText.propTypes.style,
  /**
   * Custom props for the Text component, iOS only
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  textProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Custom props for the Modal component, iOS only
   *
   * See https://facebook.github.io/react-native/docs/modal.html#props for available props.
   */
  modalProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the header element, iOS only */
  headerStyle: NativeText.propTypes.style,
  /** Header button text, iOS only */
  buttonText: PropTypes.node,
  /** Override the styles of the button element, iOS only */
  buttonStyle: NativeText.propTypes.style,
  /**
   * Custom props for the button Text component, iOS only
   *
   * See https://facebook.github.io/react-native/docs/text.html#props for available props.
   */
  buttonProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  safeArea: PropTypes.shape({
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.object.isRequired,
    fonts: PropTypes.object.isRequired
  }).isRequired
};

const defaultProps = {
  divider: false,
  pickerStyle: {},
  pickerItemStyle: {},
  pickerProps: {},
  textStyle: {},
  textProps: {},
  headerStyle: {},
  modalProps: {},
  buttonStyle: {},
  buttonProps: {},
  dividerProps: {},
  buttonText: 'Done'
};

/** Pick a value from a list of items */
class Picker extends Component {
  state = {
    visible: false
  }

  showPicker = () => {
    this.setState({
      visible: true
    });
  }

  hidePicker = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const {
      items,
      selectedValue,
      divider,
      safeArea,
      theme,
      onValueChange,
      pickerStyle,
      pickerItemStyle,
      pickerProps,
      textStyle,
      textProps,
      modalProps,
      buttonStyle,
      buttonProps,
      headerStyle,
      buttonText,
      dividerProps
    } = this.props;
    const { visible } = this.state;

    const styles = getStyles(safeArea, theme.colors, theme.fonts);

    const isAndroid = Platform.OS === 'android';

    const picker = (
      <NativePicker
        selectedValue={selectedValue}
        style={[isAndroid ? styles.pickerAndroid : styles.pickerIos, pickerStyle]}
        onValueChange={onValueChange}
        itemStyle={[styles.item, pickerItemStyle]}
        {...pickerProps}
      >
        {map(items, item => (
          <NativePicker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </NativePicker>
    );

    if (Platform.OS === 'android') {
      return (
        <View>
          {picker}
          {divider ? <Divider {...dividerProps} /> : null}
        </View>
      );
    }

    const selectedItem = find(items, { value: selectedValue });

    return (
      <View>
        <TouchableHighlight underlayColor={theme.colors.lighterGray} onPress={this.showPicker}>
          <View style={styles.textContainer}>
            <Text style={[styles.text, textStyle]} {...textProps}>
              {selectedItem.label || selectedValue}
            </Text>
            <IconChevronRight size={14} color={theme.colors.lightGray} />
          </View>
        </TouchableHighlight>
        {divider ? <Divider {...dividerProps} /> : null}
        <Modal
          transparent
          visible={visible}
          supportedOrientations={['portrait', 'landscape']}
          animationType="slide"
          {...modalProps}
        >
          <TouchableWithoutFeedback
            underlayColor={theme.colors.lighterGray}
            onPress={this.hidePicker}
            style={styles.touchable}
          >
            <View style={styles.pickerContainer}>
              <View style={[styles.pickerHeader, headerStyle]}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.hidePicker}>
                  <Text type="button" style={[styles.button, buttonStyle]} {...buttonProps}>
                    {buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
              <Divider />
              {picker}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

Picker.displayName = displayName;
Picker.propTypes = propTypes;
Picker.defaultProps = defaultProps;

export default Picker;
