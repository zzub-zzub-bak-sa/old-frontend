import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { HEIGHT, WIDTH } from '../../constants/constants';
import size from '../../utils/size';

const Layout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;

const LayoutWrapper = styled(View)({
  width: WIDTH - `${size.width * 20 * 2}`,
  height: HEIGHT,
  marginRight: `${size.width * 20}px`,
  marginLeft: `${size.width * 20}px`,
});
