import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';
import font from '../../utils/font';

const InputField = ({ placeholder, value, onChangeValue, color, placeholderColor, bg }) => {
  return (
    <Input
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      value={value}
      onChangeText={text => onChangeValue(text)}
      color={color}
      bg={bg}
    />
  );
};

export default InputField;

const Input = styled(TextInput)(props => ({
  color: props.color,
  backgroundColor: props.bg,
  fontSize: font(12),
}));
