import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';

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

export default Chip;

const ChipWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => size.width * width}px;
  height: ${({ height }) => size.height * height}px;
  border-radius: ${({ radius }) => size.height * radius}px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ style }) => style};
`;

const ChipText = styled(Text)`
  color: ${({ textColor }) => textColor};
`;
