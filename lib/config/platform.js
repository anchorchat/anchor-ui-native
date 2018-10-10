import { Dimensions, Platform, StatusBar } from 'react-native';

export const getOrientation = (screen) => {
  if (screen.height >= screen.width) {
    return 'portrait';
  }

  return 'landscape';
};

export const isIphoneX = () => {
  const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
  const IPHONE_XS_HEIGHT = 812; // iPhone X and XS
  const IPHONE_XR_HEIGHT = 896; // iPhone XR and XS Max

  return (
    Platform.OS === 'ios'
    && !Platform.isPad
    && !Platform.isTVOS
    && (
      WINDOW_HEIGHT === IPHONE_XS_HEIGHT
      || WINDOW_WIDTH === IPHONE_XS_HEIGHT
      || WINDOW_HEIGHT === IPHONE_XR_HEIGHT
      || WINDOW_WIDTH === IPHONE_XR_HEIGHT
    )
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
