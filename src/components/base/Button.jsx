import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ bg }) => bg};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ color }) => color};
`;

const Button = ({ width = 80, height = 24, bg, text, color, onPress }) => {
  return (
    <ButtonWrapper width={width} height={height} bg={bg} onPress={onPress}>
      <ButtonText color={color || '#242424'}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  width: 24,
  height: 24,
  color: '#242424',
  bg: '#fff',
};

Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  bg: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default Button;
