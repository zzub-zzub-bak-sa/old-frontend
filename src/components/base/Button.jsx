import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import size from '../../utils/size';
import font from '../../utils/font';

const Button = ({ width = 80, height = 24, bgColor, text, color, onPress }) => {
  return (
    <ButtonWrapper width={width} height={height} bg={bg} onPress={onPress}>
      <ButtonText color={color}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => size.width * width}%;
  height: ${({ height }) => size.height * height}%;
  background-color: ${({ bgColor }) => bgColor};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)(props => ({
  color: props.color,
  fontSize: font(12),
  fontWeight: 500,
}));
