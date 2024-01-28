import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';

const Card = ({ width, height, bg, onPress, children }) => {
  return (
    <CardWrapper width={width} height={height} bg={bg} onPress={onPress}>
      {children}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(TouchableOpacity)(props => ({
  width: size.width * props.width,
  height: size.height * props.height,
  backgroundColor: props.bg,
}));
