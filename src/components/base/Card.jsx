import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';

const Card = ({ width = 80, height = 80, bgColor, onPress }) => {
  const topAndBottomHeight = size.height * 2;
  const middleHeight = size.height * height - topAndBottomHeight;

  return (
    <CardWrapper width={width} height={height} bgColor={bgColor} onPress={onPress}>
      <ImageBox source={{ uri: undefined }} />
      <SectionWrapper>
        <Top>
          <Text>top</Text>
        </Top>
        <Middle height={middleHeight}>
          <Text>middle</Text>
        </Middle>
        <Bottom>
          <Text>bottom</Text>
        </Bottom>
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

const Middle = styled(View)(props => ({
  width: '100%',
  position: 'absolute',
  top: size.height * 14.8 + 'px',
  height: props.height - 15,
}));

const Bottom = styled(View)({
  width: '100%',
  position: 'absolute',
  bottom: size.height * 0 + 'px',
});
