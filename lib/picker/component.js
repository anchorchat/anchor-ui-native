import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Picker as NativePicker,
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
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Value matching the value of one of the items */
  selectedValue: PropTypes.string.isRequired,
  /** Picker items */
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
  /** Render a Divider underneath the Picker */
  divider: PropTypes.bool,
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
  style: {},
  divider: false
};

/** Pick a value from a list of items */
class Picker extends Component {
  state = {
    visible: false,
    value: null,
    index: null
  }

  showPicker = () => {
    this.setState({
      visible: true
    });
  }

  hidePicker = () => {
    const { onValueChange } = this.props;
    const { value, index } = this.state;

    this.setState({
      visible: false,
      value: null,
      index: null
    });

    if (value === null || index === null) {
      return false;
    }

    return onValueChange(value, index);
  }

  handleValueChange = (value, index) => {
    this.setState({
      value,
      index
    });
  }

  render() {
    const {
      style,
      items,
      selectedValue,
      divider,
      safeArea,
      theme,
      onValueChange,
      ...custom
    } = this.props;
    const { visible } = this.state;
    const { value } = this.state;

    const styles = getStyles(safeArea, theme.colors, theme.fonts);

    const isAndroid = Platform.OS === 'android';

    const picker = (
      <NativePicker
        selectedValue={value || selectedValue}
        style={[isAndroid ? styles.pickerAndroid : styles.pickerIos]}
        onValueChange={isAndroid ? onValueChange : this.handleValueChange}
        itemStyle={styles.item}
      >
        {map(items, item => (
          <NativePicker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </NativePicker>
    );

    if (Platform.OS === 'android') {
      return (
        <View style={style} {...custom}>
          {picker}
          {divider ? <Divider /> : null}
        </View>
      );
    }

    const selectedItem = find(items, { value: selectedValue });

    return (
      <View>
        <TouchableHighlight underlayColor={theme.colors.lighterGray} onPress={this.showPicker}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{selectedItem.label || selectedValue}</Text>
            <IconChevronRight size={20} color={theme.colors.lightGray} />
          </View>
        </TouchableHighlight>
        {divider ? <Divider /> : null}
        <Modal transparent visible={visible} supportedOrientations={['portrait', 'landscape']} animationType="slide">
          <TouchableWithoutFeedback
            underlayColor={theme.colors.lighterGray}
            onPress={this.hidePicker}
            style={styles.touchable}
          >
            <View style={[styles.pickerContainer, style]}>
              <View style={styles.pickerHeader}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.hidePicker}>
                  <Text type="button" style={styles.button}>Done</Text>
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
