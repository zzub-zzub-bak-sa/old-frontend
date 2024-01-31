import React from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';
import { colors } from '../../styles/colors';
import { body2 } from '../../styles/fonts';

const SearchInput = ({ width, value, onChangeText }) => {
  return <Input width={width} value={value} onChangeText={onChangeText} />;
};

export default SearchInput;

const Input = styled(TextInput)`
  width: ${({ width }) => size.width * width}px;
  height: ${size.height * 36}px;
  border-radius: 10px;
  background-color: ${colors.grey[100]};
  text-align: right;
  font-size: ${body2.medium.fontSize}px;
  font-family: ${body2.medium.fontFamily};
  color: white;
  padding: 0 ${size.width * 12}px;
`;
