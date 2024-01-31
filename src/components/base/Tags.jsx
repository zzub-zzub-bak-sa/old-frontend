import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';
import { colors } from '../../styles/colors';
import IcClear from '../../assets/icons/IcClear';
import { body1 } from '../../styles/fonts';

const Tags = ({ text, onPressTag, style }) => {
  const handleSliceText = () => {
    return text.length > 7 ? text.slice(0, 7) + '...' : text;
  };

  return (
    <TagWrapper onPress={onPressTag} style={style}>
      <TagText>{handleSliceText()}</TagText>
      <IcClear size={20} color={'white'} />
    </TagWrapper>
  );
};

export default Tags;

const TagWrapper = styled(TouchableOpacity)`
  height: ${size.height * 40}px;
  border-radius: 8px;
  background-color: ${colors.orange};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${size.width * 8}px;
  padding: ${size.height * 8}px ${size.width * 12}px;
  ${({ style }) => style};
`;

const TagText = styled(Text)`
  font-family: ${body1.medium.fontFamily};
  font-size: ${body1.medium.fontSize};
  color: white;
`;
