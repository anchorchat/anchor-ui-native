import React from 'react';
import { Dimensions } from 'react-native';
import wrapDisplayName from 'recompose/wrapDisplayName';
import { getSafeArea } from '../config/platform';

const withSafeArea = (Component) => {
  class SafeAreaComponent extends React.Component {
    state = {
      screen: null
    }

    static getDerivedStateFromProps(props, state) {
      if (state.screen === null) {
        const screen = Dimensions.get('screen');
        return {
          screen
        }
      }

      return null;
    }

    componentDidMount() {
      Dimensions.addEventListener('change', (dimensions) => {
        this.setState({
          screen: dimensions.screen
        });
      });
    }

    componentWillUnmount() {
      Dimensions.removeEventListener('change');
    }

    render() {
      const { screen } = this.state;

      const safeArea = getSafeArea(screen);

      return <Component {...this.props} safeArea={safeArea} />
    }
  }

  SafeAreaComponent.displayName = wrapDisplayName(Component, 'withSafeArea');

  return SafeAreaComponent;
};

export default withSafeArea;
