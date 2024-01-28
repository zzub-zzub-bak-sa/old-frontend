import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import size from '../../utils/size';
import font from '../../utils/font';

const Button = ({ width = 80, height = 24, bg, text, color, onPress }) => {
  return (
    <ButtonWrapper width={width} height={height} bg={bg} onPress={onPress}>
      <ButtonText color={color}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled(TouchableOpacity)(props => ({
  width: size.width * props.width,
  height: size.height * props.height,
  backgroundColor: props.bg,
  justifyContent: 'center',
  alignItems: 'center',
}));

const ButtonText = styled(Text)(props => ({
  color: props.color,
  fontSize: font(12),
  fontWeight: 500,
}));
