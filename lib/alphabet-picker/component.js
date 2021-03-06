/* global requestAnimationFrame */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PanResponder, View, Dimensions } from 'react-native';
import split from 'lodash/split';
import map from 'lodash/map';
import isFinite from 'lodash/isFinite';
import getStyles from './styles';
import Text from '../text';
import { getOrientation } from '../config/platform';

const ALPHABET = split('ABCDEFGHIJKLMNOPQRSTUVWXYZ', '');

const propTypes = {
  /** Override the styles of the root element */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /**
   * Override the alphabet
   *
   * Defaults to: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  */
  alphabet: PropTypes.arrayOf(PropTypes.string),
  /**
   * Callback fired when touch event is fired
   *
   * function() => void
   */
  onTouchStart: PropTypes.func,
  /**
   * Callback fired when touch event has ended
   *
   * function() => void
   */
  onTouchEnd: PropTypes.func,
  /**
   * Callback fired when a letter is touched
   *
   * function(letter: string) => void
   */
  onTouchLetter: PropTypes.func,
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
  alphabet: null,
  onTouchEnd: () => {},
  onTouchLetter: () => {},
  onTouchStart: () => {},
  style: {}
};

/** Alphabet picker */
class AlphabetPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alphabet: props.alphabet || ALPHABET
    };

    this.rootRef = React.createRef();

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => {},
      onPanResponderGrant: this.onPanResponderGrant,
      onPanResponderMove: this.onPanResponderMove,
      onPanResponderTerminate: this.onPanResponderEnd,
      onPanResponderRelease: this.onPanResponderEnd,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.alphabet && props.alphabet !== state.alphabet) {
      return {
        alphabet: props.alphabet
      };
    }

    if (props.safeArea !== state.safeArea) {
      const screen = Dimensions.get('screen');

      return {
        orientation: getOrientation(screen),
        safeArea: props.safeArea
      };
    }

    return null;
  }

  onPanResponderGrant = (event, gestureState) => {
    const { onTouchStart, onTouchLetter } = this.props;

    onTouchStart();

    this.tapTimeout = setTimeout(() => {
      const touchedLetter = this.findTouchedLetter(gestureState.y0);

      if (touchedLetter) {
        onTouchLetter(touchedLetter);
      }
    }, 100);
  }

  onPanResponderMove = (event, gestureState) => {
    const { onTouchLetter } = this.props;

    clearTimeout(this.tapTimeout);
    const touchedLetter = this.findTouchedLetter(gestureState.moveY);

    if (touchedLetter) {
      onTouchLetter(touchedLetter);
    }
  }

  onPanResponderEnd = () => {
    const { onTouchEnd } = this.props;

    requestAnimationFrame(onTouchEnd);
  }

  onLayout = () => this.rootRef.current.measure((x1, y1, width, height, px, py) => {
    this.absContainerTop = py;
    this.containerHeight = height;
  })

  findTouchedLetter = (y) => {
    if (!isFinite(this.absContainerTop) || !isFinite(this.containerHeight)) {
      return this.onLayout();
    }

    const top = y - (this.absContainerTop || 0);

    const { alphabet } = this.state;

    if (top >= 1 && top <= this.containerHeight) {
      return alphabet[Math.round((top / this.containerHeight) * alphabet.length)];
    }

    return false;
  }

  render() {
    const {
      style,
      theme,
      alphabet,
      onTouchStart,
      onTouchEnd,
      onTouchLetter,
      safeArea,
      ...custom
    } = this.props;
    const { orientation } = this.state;

    const styles = getStyles(theme.fonts);

    const letters = map(this.state.alphabet, letter => ( // eslint-disable-line react/destructuring-assignment
      <Text type="body-accent" key={letter} style={styles.letter}>
        {letter}
      </Text>
    ));

    let content = (
      <View
        ref={this.rootRef}
        onLayout={this.onLayout}
        style={styles.containerPortait}
        {...this.panResponder.panHandlers}
      >
        {letters}
      </View>
    );

    if (orientation === 'landscape') {
      content = (
        <View
          ref={this.rootRef}
          onLayout={this.onLayout}
          style={styles.containerLandscape}
          {...this.panResponder.panHandlers}
        />
      );
    }

    return (
      <View style={[styles.container, style]} {...custom}>
        {content}
      </View>
    );
  }
}

AlphabetPicker.propTypes = propTypes;
AlphabetPicker.defaultProps = defaultProps;

export default AlphabetPicker;
