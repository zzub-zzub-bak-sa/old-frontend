import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const Chip = ({ text, width, height, radius, bgColor, textColor, onPressChip, style }) => {
  return (
    <ChipWrapper
      width={width || 80}
      height={height || 36}
      radius={radius || 0}
      bgColor={bgColor}
      onPress={onPressChip}
      style={style}
    >
      <ChipText textColor={textColor}>{text}</ChipText>
    </ChipWrapper>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  onPressChip: PropTypes.func.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Chip;

const ChipWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  border: 1px solid black;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: 'blue';
  ${props => props.style}
`;

const ChipText = styled(Text)`
  color: ${({ textColor }) => textColor};
`;
