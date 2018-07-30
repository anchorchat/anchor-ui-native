import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import isNil from 'lodash/isNil';
import { Provider } from './context';

const displayName = 'DimensionsProvider';

const propTypes = {
  /** Children to apply dimensions to  */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

/** Provide dimensions to all children using context */
class DimensionsProvider extends Component {
  state = {
    dimensions: null
  }

  static getDerivedStateFromProps(props, state) {
    if (state.dimensions === null) {
      return {
        dimensions: {
          screen: Dimensions.get('screen'),
          window: Dimensions.get('window')
        }
      };
    }

    return null;
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleDimensionsChange);
  }

  handleDimensionsChange = (dimensions) => {
    this.setState((state) => {
      let { screen, window } = state.dimensions;

      if (
        !isNil(dimensions.screen)
        && dimensions.screen !== screen
      ) {
        ({ screen } = dimensions);
      }

      if (
        !isNil(dimensions.window)
        && dimensions.window !== window
      ) {
        ({ window } = dimensions);
      }

      return {
        dimensions: {
          screen,
          window
        }
      };
    });
  }

  render() {
    const { children } = this.props;
    const { dimensions } = this.state;

    return (
      <Provider value={dimensions}>
        {children}
      </Provider>
    );
  }
}

DimensionsProvider.propTypes = propTypes;
DimensionsProvider.displayName = displayName;

export default DimensionsProvider;

