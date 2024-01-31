import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';

const Tags = ({ text, width, height, radius, bgColor, textColor, onPressChip, style }) => {
  return (
    <TagWrapper
      width={width || 80}
      height={height || 36}
      radius={radius || 0}
      bgColor={bgColor}
      onPress={onPressChip}
      style={style}
    >
      <TagText textColor={textColor}>{text}</TagText>
    </TagWrapper>
  );
};

export default Tags;

const TagWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => size.width * width}%;
  height: ${({ height }) => size.height * height}%;
  border-radius: ${({ radius }) => size.height * radius};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ style }) => style};
`;

const TagText = styled(Text)`
  color: ${({ textColor }) => textColor};
`;
