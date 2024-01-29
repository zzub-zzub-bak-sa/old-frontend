import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';

const Card = ({ width = 80, height = 80, bgColor, onPress, renderTop, renderBottom }) => {
  return (
    <CardWrapper width={width} height={height} bgColor={bgColor} onPress={onPress}>
      <ImageBox source={{ uri: undefined }} />
      <SectionWrapper>
        <Top>{renderTop()}</Top>
        <Bottom>{renderBottom()}</Bottom>
      </SectionWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => size.width * width}%;
  height: ${({ height }) => size.height * height}%;
  background-color: ${({ bgColor }) => bgColor};
`;

const ImageBox = styled(Image)`
  width: '100%';
  height: '100%';
`;

const SectionWrapper = styled(View)`
  position: 'absolute';
  width: '100%';
  height: '100%';
`;

const Top = styled(View)`
  width: '100%';
  position: 'absolute';
  top: 0;
`;

const Bottom = styled(View)`
  width: '100%';
  position: 'absolute';
  bottom: 0 + 'px';
`;
