import React, { forwardRef } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BackIcon from '../../../assets/images/ic_back.svg';
import CloseIcon from '../../../assets/images/ic_clear.svg';
import styled from 'styled-components/native';
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
          return (
            <ButtonImage onPress={onPress}>
              <ButtonText>완료</ButtonText>
            </ButtonImage>
          );
        case 'back':
          return (
            <ButtonImage onPress={onPress}>
              <BackIcon />
            </ButtonImage>
          );
        case 'close':
          return (
            <ButtonImage onPress={() => ref.current?.close()}>
              <CloseIcon />
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
  padding: 5.13%;
  background-color: ${colors.bg[400]};
`;

const Title = styled.Text`
  color: #fff;
  font-family: ${title3.semibold.fontFamily};
  font-size: ${title3.semibold.fontSize}px;
  flex: 1;
  text-align: center;
`;

const ButtonImage = styled(TouchableOpacity)`
  width: 24px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: ${body2.medium.fontFamily};
  font-size: ${body2.medium.fontSize}px;
`;

const StyledBottomSheetScrollView = styled(BottomSheetScrollView)`
  background-color: ${colors.bg[400]};
`;
