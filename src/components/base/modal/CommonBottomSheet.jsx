import React, { forwardRef } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import IcClear from '../../../assets/icons/IcClear';
import IcBack from '../../../assets/icons/IcBack';
import size from '../../../utils/size';
import { colors } from '../../../styles/colors';
import { title3, body2 } from '../../../styles/fonts';

const CommonBottomSheet = forwardRef(
  (
    {
      snapPoints = ['60%', '80%'],
      children,
      index = 0,
      style,
      title,
      leftButtonType = 'none',
      rightButtonType = 'none',
      onLeftButtonPress,
      onRightButtonPress,
    },
    ref,
  ) => {
    // 왼쪽, 오른쪽 상단의 버튼 종류, 표시 여부를 결정하는 함수
    const renderButton = (type, onPress) => {
      switch (type) {
        case 'none':
          return <ButtonImage />;
        case 'done':
          return <ButtonText onPress={onPress}>완료</ButtonText>;
        case 'back':
          return (
            <ButtonImage onPress={onPress}>
              <IcBack size={24} color="white" />
            </ButtonImage>
          );
        case 'close':
          return (
            <ButtonImage onPress={() => ref.current?.close()}>
              <IcClear size={24} color="white" />
            </ButtonImage>
          );
      }
    };

    return (
      <BottomSheet
        ref={ref}
        index={index}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        handleComponent={() => null}
        backgroundComponent={null}
        style={style}
      >
        <Header>
          {renderButton(leftButtonType, onLeftButtonPress)}
          <Title>{title}</Title>
          {renderButton(rightButtonType, onRightButtonPress)}
        </Header>
        <StyledBottomSheetScrollView>{children}</StyledBottomSheetScrollView>
      </BottomSheet>
    );
  },
);

export default CommonBottomSheet;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 24px 24px 0 0;
  padding: ${size.width * 20}px;
  background-color: ${colors.bg[400]};
`;

const Title = styled.Text`
  color: white;
  font-family: ${title3.semibold.fontFamily};
  font-size: ${title3.semibold.fontSize}px;
  flex: 1;
  text-align: center;
`;

const ButtonImage = styled(TouchableOpacity)`
  width: ${size.width * 24}px;
`;

const ButtonText = styled.Text`
  color: white;
  font-family: ${body2.medium.fontFamily};
  font-size: ${body2.medium.fontSize}px;
`;

const StyledBottomSheetScrollView = styled(BottomSheetScrollView)`
  background-color: ${colors.bg[400]};
`;
