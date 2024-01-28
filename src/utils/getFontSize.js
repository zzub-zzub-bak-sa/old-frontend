import { PixelRatio } from 'react-native';

const getFontSize = size => {
  const fontScale = PixelRatio.getFontScale();
  return size / fontScale;
};

export default getFontSize;
