import { PixelRatio } from 'react-native';

const font = size => {
  const fontScale = PixelRatio.getFontScale();
  return size / fontScale;
};

export default font;
