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

const ChipWrapper = styled(TouchableOpacity)(props => ({
  width: size.width * props.width,
  height: size.height * props.height,
  borderRadius: size.height * props.radius,
  backgroundCOlor: props.bgColor,
  border: `1px solid black`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));

const ChipText = styled(Text)`
  color: ${({ textColor }) => textColor};
`;
