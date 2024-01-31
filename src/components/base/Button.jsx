import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';
import size from '../../utils/size';
import { colors } from '../../styles/colors';
import { subtitle2 } from '../../styles/fonts';

const Button = ({
  width = 350,
  height = 54 | 36,
  varient = 'outlined' | 'filled' | 'none',
  color = 'primary' | 'default' | 'disable',
  text,
  renderIcon = () => null,
  onPress,
}) => {
  const [style, setStyle] = useState({
    borderColor: '',
    bgColor: '',
    textColor: '',
  });

  useEffect(() => {
    switch (color) {
      case 'primary':
        if (varient === 'outlined') {
          return setStyle({
            borderColor: colors.orange,
            bgColor: 'transparent',
            textColor: colors.orange,
          });
        } else if (varient === 'filled') {
          return setStyle({
            borderColor: colors.orange,
            bgColor: colors.orange,
            textColor: 'white',
          });
        } else if (varient === 'none') {
          return setStyle({
            borderColor: 'transparent',
            bgColor: 'transparent',
            textColor: colors.orange,
          });
        }
      case 'disable':
        if (varient === 'outlined') {
          return setStyle({
            borderColor: colors.grey[100],
            bgColor: 'transparent',
            textColor: 'white',
          });
        } else if (varient === 'filled') {
          return setStyle({
            borderColor: color.grey[100],
            bgColor: color.grey[100],
            textColor: 'white',
          });
        } else if (varient === 'none') {
          return setStyle({
            borderColor: 'transparent',
            bgColor: 'transparent',
            textColor: 'white',
          });
        }
      case 'default':
        if (varient === 'outlined') {
          return setStyle({ borderColor: 'white', bgColor: 'transparent', textColor: 'white' });
        } else if (varient === 'filled') {
          return setStyle({ borderColor: 'white', bgColor: 'white', textColor: colors.black });
        } else if (varient === 'none') {
          return setStyle({
            borderColor: 'transparent',
            bgColor: 'transparent',
            textColor: 'white',
          });
        }
    }
  }, [varient, color]);

  return (
    <ButtonWrapper width={width} height={height | 54} onPress={onPress} buttonStyle={style}>
      {renderIcon()}
      <ButtonText height={height} buttonStyle={style}>
        {text}
      </ButtonText>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => size.width * width}px;
  height: ${({ height }) => size.height * height}px;
  background-color: ${({ buttonStyle }) => buttonStyle.bgColor};
  border: 1px solid ${({ buttonStyle }) => buttonStyle.borderColor};
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  gap: ${size.width * 4}px;
  padding-top: ${size.height * 16}px;
  padding-bottom: ${size.height * 16}px;
`;

const ButtonText = styled(Text)(props => ({
  fontFamily: subtitle2.semibold.fontFamily,
  fontSize: subtitle2.semibold.fontSize,
  color: props.buttonStyle.textColor,
}));
