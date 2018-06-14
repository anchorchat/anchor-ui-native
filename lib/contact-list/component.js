import React, { Component } from 'react';
import PropTypes from 'prop-types';
import findIndex from 'lodash/findIndex';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import { SectionList, View } from 'react-native';
import Divider from '../divider';
import ListItem from '../list-item';
import Avatar from '../avatar';
import getStyles from './styles';
import AlphabetPicker from '../alphabet-picker';

const displayName = 'ContactList';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Override the styles of the list element */
  listStyle: View.propTypes.style,
  /**
   * Custom props for the Header component
   *
   * See Header page for available props.
   */
  sectionListProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * Custom props for the Header component
   *
   * See https://facebook.github.io/react-native/docs/sectionlist.html#props for available props.
   */
  alphabetPickerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** Sorted contact data */
  contacts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  })).isRequired,
  /** Render the alphabet picker */
  alphabetPicker: PropTypes.bool,
  /** Contact item height */
  itemHeight: PropTypes.number,
  /**
   * Callback fired when item is pressed
   *
   * If custom renderItem method is supplied, implement your own onPress event.
   *
   * function(item: object) => void
   */
  onItemPress: PropTypes.func,
  /**
   * Override renderItem
   * If used make sure to adjust the itemHeight prop as well
   *
   * function(item: object) => void
   */
  renderItem: PropTypes.func,
  /** Contact divider height */
  sectionHeaderHeight: PropTypes.number,
  /**
   * Override renderSectionHeader
   * If used make sure to adjust the sectionHeaderHeight prop as well
   *
   * function(section: object) => void
   */
  renderSectionHeader: PropTypes.func,
  /**
   * Override keyExtractor
   *
   * function(item: object, index: number) => void
   */
  keyExtractor: PropTypes.func,
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
  alphabetPicker: false,
  sectionListProps: {},
  alphabetPickerProps: {},
  itemHeight: 56,
  keyExtractor: null,
  listStyle: {},
  onItemPress: () => {},
  renderItem: null,
  renderSectionHeader: null,
  sectionHeaderHeight: 24,
  style: {}
};

/** Sorted and separated ContactList */
class ContactList extends Component {
  onTouchLetter = (letter) => {
    const { contacts, sectionHeaderHeight } = this.props;

    const sectionIndex = findIndex(contacts, { title: letter });

    if (sectionIndex && sectionIndex > -1) {
      this.sectionList.current.scrollToLocation({
        sectionIndex: sectionIndex - 1,
        itemIndex: 0,
        animated: false,
        viewPosition: 0,
        viewOffset: sectionHeaderHeight
      });
    }
  }

  getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => this.props.itemHeight,
    getSectionHeaderHeight: () => this.props.sectionHeaderHeight
  });

  keyExtractor = (item, index) => {
    const { keyExtractor } = this.props;

    if (keyExtractor) {
      return keyExtractor(item, index);
    }

    return index;
  }

  sectionList = React.createRef()

  renderItem = ({ item }, styles) => {
    const { renderItem, itemHeight, onItemPress } = this.props;

    if (renderItem) {
      return renderItem(item);
    }

    return (
      <ListItem
        primaryText={item.name}
        icon={<Avatar text={item.name} />}
        style={[styles.listItem, { height: itemHeight }]}
        onPress={() => onItemPress(item)}
      />
    );
  }

  renderSectionHeader = ({ section }, styles) => {
    const { renderSectionHeader } = this.props;

    if (renderSectionHeader) {
      return renderSectionHeader(section);
    }

    return <Divider style={styles.divider} text={section.title} />;
  }

  render() {
    const {
      alphabetPicker,
      theme,
      style,
      listStyle,
      contacts,
      safeArea,
      sectionListProps,
      alphabetPickerProps,
      ...custom
    } = this.props;
    const styles = getStyles(theme.colors, safeArea);

    return (
      <View style={[styles.container, style]} {...custom}>
        <SectionList
          ref={this.sectionList}
          sections={contacts}
          renderItem={item => this.renderItem(item, styles)}
          keyExtractor={this.keyExtractor}
          style={listStyle}
          getItemLayout={this.getItemLayout}
          renderSectionHeader={section => this.renderSectionHeader(section, styles)}
          {...sectionListProps}
        />
        {
          alphabetPicker
            ? <AlphabetPicker onTouchLetter={this.onTouchLetter} {...alphabetPickerProps} />
            : null
        }
      </View>
    );
  }
}

ContactList.displayName = displayName;
ContactList.propTypes = propTypes;
ContactList.defaultProps = defaultProps;

export default ContactList;
