import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PanResponder,
  View
} from 'react-native';
import getStyles from './styles';
import Text from '../text';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const propTypes = {
  alphabet: PropTypes.arrayOf(PropTypes.string),
  onTouchStart: PropTypes.func,
  onTouchLetter: PropTypes.func,
  onTouchEnd: PropTypes.func
};

const defaultProps = {
  alphabet: null,
  onTouchStart: () => {},
  onTouchLetter: () => {},
  onTouchEnd: () => {}
};

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
      onPanResponderGrant: (e, gestureState) => {
        const { onTouchStart, onTouchLetter } = this.props;

        onTouchStart();

        this.tapTimeout = setTimeout(() => {
          const touchedLetter = this.findTouchedLetter(gestureState.y0);

          if (touchedLetter) {
            onTouchLetter(touchedLetter);
          }
        }, 100);
      },
      onPanResponderMove: (e, gestureState) => {
        const { onTouchLetter } = this.props;

        clearTimeout(this.tapTimeout);
        const touchedLetter = this.findTouchedLetter(gestureState.moveY);

        if (touchedLetter) {
          onTouchLetter(touchedLetter);
        }
      },
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

    return null;
  }

  onPanResponderEnd = () => {
    const { onTouchEnd } = this.props;
    requestAnimationFrame(onTouchEnd); // eslint-disable-line no-undef
  }

  onLayout = () => this.rootRef.current.measure((x1, y1, width, height, px, py) => {
    this.absContainerTop = py;
    this.containerHeight = height;
  })

  findTouchedLetter = (y) => {
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
      theme
    } = this.props;

    const styles = getStyles(theme.colors);

    const letters = this.state.alphabet.map(letter => (
      <Text type="body-accent" key={letter} style={styles.letter}>
        {letter}
      </Text>
    ));

    return (
      <View style={styles.container} >
        <View
          ref={this.rootRef}
          onLayout={this.onLayout}
          style={styles.alphabetWrapper}
          {...this.panResponder.panHandlers}
        >
          {letters}
        </View>
      </View>
    );
  }
}

AlphabetPicker.propTypes = propTypes;
AlphabetPicker.defaultProps = defaultProps;

export default AlphabetPicker;
