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

const CardWrapper = styled(TouchableOpacity)(props => ({
  width: size.width * props.width,
  height: size.height * props.height,
  backgroundColor: props.bgColor,
}));

const ImageBox = styled(Image)({
  width: '100%',
  height: '100%',
});

const SectionWrapper = styled(View)({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

const Top = styled(View)({
  width: '100%',
  position: 'absolute',
  top: 0,
});

const Bottom = styled(View)({
  width: '100%',
  position: 'absolute',
  bottom: size.height * 0 + 'px',
});
