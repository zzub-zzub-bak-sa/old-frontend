import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';
import { body1, body3 } from '../../styles/fonts';
import Check from '../../assets/icons/Check';
import { colors } from '../../styles/colors';

const Card = ({ title = '', numberOfLinks = 0, onPress, isSelected }) => {
  const handleSliceText = () => {
    return title.length > 16 ? title.slice(0, 16) + '...' : title;
  };

  const handleSliceLink = () => {
    return numberOfLinks.length > 999 ? '999+' : numberOfLinks;
  };

  return (
    <CardWrapper onPress={onPress}>
      <ImageBox source={require('../../assets/images/logo.png')} />
      <TextWrapper>
        <Title>{handleSliceText()}</Title>
        <Subtitle>{handleSliceLink()}개의 링크</Subtitle>
      </TextWrapper>
      {isSelected && (
        <SelectBox>
          <Check size={24} color={colors.orange} />
        </SelectBox>
      )}
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(TouchableOpacity)`
  width: '100%';
  height: ${size.height * 96};
  flex-direction: row;
  align-items: center;
  background-color: black;
  padding: 0 ${size.width * 20}px;
`;

const ImageBox = styled(Image)`
  width: ${size.width * 64}px;
  height: ${size.height * 64}px;
  margin-right: ${size.width * 16}px;
`;

const TextWrapper = styled(View)`
  gap: ${size.height * 12}px;
`;

const Title = styled(Text)`
  font-family: ${body1.medium.fontFamily};
  font-size: ${body1.medium.fontSize};
  color: white;
`;

const Subtitle = styled(Text)`
  font-family: ${body3.medium.fontFamily};
  font-size: ${body3.medium.fontSize};
  color: white;
`;

const SelectBox = styled(View)`
  position: absolute;
  right: ${size.width * 20}px;
`;
