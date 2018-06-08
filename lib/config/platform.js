import { Dimensions, Platform, StatusBar } from 'react-native';

export const getOrientation = (screen) => {
  if (screen.height >= screen.width) {
    return 'portrait';
  }

  return 'landscape';
};

export const isIphoneX = () => {
  const dimensions = Dimensions.get('screen');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimensions.height === 812 || dimensions.width === 812)
  );
};

const iPhoneX = {
  portrait: {
    top: 44,
    right: 0,
    bottom: 34,
    left: 0
  },
  landscape: {
    top: 0,
    right: 44,
    bottom: 21,
    left: 44
  }
};

const iOS = {
  portrait: {
    top: 20,
    right: 0,
    bottom: 0,
    left: 0
  },
  landscape: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

const Android = {
  portrait: {
    top: StatusBar.currentHeight,
    right: 0,
    bottom: 0,
    left: 0
  },
  landscape: {
    top: StatusBar.currentHeight,
    right: 0,
    bottom: 0,
    left: 0
  }
};

export const getSafeArea = (screen) => {
  const orientation = getOrientation(screen);

  if (Platform.OS === 'ios') {
    if (isIphoneX()) {
      return iPhoneX[orientation];
    }

    return iOS[orientation];
  }

  return Android[orientation];
};
