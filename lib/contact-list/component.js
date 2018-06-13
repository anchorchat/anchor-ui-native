import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import sectionListGetItemLayout from 'react-native-section-list-get-item-layout';
import {
  SectionList,
  View
} from 'react-native';
import Divider from '../divider';
import ListItem from '../list-item';
import Avatar from '../avatar';
import getStyles from './styles';
import AlphabetPicker from '../alphabet-picker';

const displayName = 'ContactList';

const propTypes = {
  /** Override the styles of the root element */
  style: View.propTypes.style,
  /** Sorted contact data */
  contacts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  })).isRequired,
  /** Override the styles of the container element */
  containerStyle: View.propTypes.style,
  /** Override the styles of the list element */
  listStyle: View.propTypes.style,
  itemHeight: PropTypes.number,
  keyExtractor: PropTypes.func,
  /**
   * Callback fired when Avatar is pressed
   *
   * function(event: object) => void
   */
  onPress: PropTypes.func,
  renderItem: PropTypes.func,
  renderSectionHeader: PropTypes.func,
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
  containerStyle: {},
  listStyle: {},
  itemHeight: 56,
  onPress: () => {},
  keyExtractor: null,
  renderItem: null,
  renderSectionHeader: null
};

/** View ContactList with safeArea. */
class ContactList extends Component {
  onTouchLetter = (letter) => {
    const { contacts } = this.props;

    const sectionIndex = _.findIndex(contacts, { title: letter });

    if (sectionIndex && sectionIndex > -1) {
      this.sectionList.current.scrollToLocation({
        sectionIndex: sectionIndex - 1,
        itemIndex: 0,
        animated: true,
        viewPosition: 0,
        viewOffset: 24
      });
    }
  }

  getItemLayout = sectionListGetItemLayout({
    getItemHeight: () => 56,
    getSectionHeaderHeight: () => 24
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
    const { renderItem, itemHeight, onPress } = this.props;

    if (renderItem) {
      return renderItem(item);
    }

    return (
      <ListItem
        primaryText={item.name}
        icon={<Avatar text={item.name} />}
        style={[styles.listItem, { height: itemHeight }]}
        onPress={() => onPress(item)}
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
      style,
      theme,
      containerStyle,
      listStyle,
      contacts,
      safeArea,
      ...custom
    } = this.props;
    const styles = getStyles(theme.colors, safeArea);

    return (
      <View style={[styles.container, containerStyle]} {...custom}>
        <SectionList
          ref={this.sectionList}
          sections={contacts}
          renderItem={item => this.renderItem(item, styles)}
          keyExtractor={this.keyExtractor}
          style={[listStyle]}
          getItemLayout={this.getItemLayout}
          renderSectionHeader={section => this.renderSectionHeader(section, styles)}
        />
        <AlphabetPicker onTouchLetter={this.onTouchLetter} />
      </View>
    );
  }
}

ContactList.displayName = displayName;
ContactList.propTypes = propTypes;
ContactList.defaultProps = defaultProps;

export default ContactList;
