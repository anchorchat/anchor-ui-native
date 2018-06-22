import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';
import Svg, { G } from 'react-native-svg';

const displayName = 'ResizeableSvg';

const propTypes = {
  /** Icon size */
  size: PropTypes.number,
  children: PropTypes.node.isRequired
};

const defaultProps = {
  size: 28
};

const ResizeableSvg = ({
  size,
  children,
  ...custom
}) => {
  const containerStyle = {
    width: size,
    height: size
  };

  const isAndroid = Platform.OS === 'android';

  return (
    <View style={containerStyle} {...custom}>
      <Svg
        width={isAndroid ? 28 : size}
        height={isAndroid ? 28 : size}
        viewBox="0 0 28 28"
      >
        <G scale={isAndroid ? size / 28 : 1}>
          {children}
        </G>
      </Svg>
    </View>
  );
};

ResizeableSvg.displayName = displayName;
ResizeableSvg.propTypes = propTypes;
ResizeableSvg.defaultProps = defaultProps;

export default ResizeableSvg;
