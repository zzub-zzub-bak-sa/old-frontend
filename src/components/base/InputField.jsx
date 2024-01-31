import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';
import { body1 } from '../../styles/fonts';
import { colors } from '../../styles/colors';
import { WIDTH } from '../../constants/constants';
import Tags from './Tags';

const InputField = ({ placeholder, value, onChangeValue, style }) => {
  const [tags, setTags] = useState([]);

  const handleTag = () => {
    setTags([...tags, value]);
    onChangeValue('');
    console.log(tags);
  };

  return (
    <Container>
      <Content>
        <View style={{ gap: 8, flexDirection: 'row' }}>
          {tags.map((tag, idx) => (
            <Tags key={idx} text={tag} />
          ))}
        </View>
        <InputWrapper hasTags={tags.length > 0}>
          <Input
            placeholder={placeholder}
            placeholderTextColor={colors.grey[100]}
            value={value}
            onChangeText={text => onChangeValue(text)}
            style={style}
            onEndEditing={handleTag}
          />
        </InputWrapper>
      </Content>
    </Container>
  );
};

export default InputField;

const Container = styled(View)`
  width: '100%';
  height: ${size.height * 58}px;
  border-width: 1px;
  border-bottom-color: ${colors.orange};
`;

const Content = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const InputWrapper = styled(View)`
  margin-left: ${({ hasTags }) => (hasTags ? 8 : 0)}px;
`;

const Input = styled(TextInput)`
  font-family: ${body1.medium.fontFamily};
  font-size: ${body1.medium.fontSize}px;
  color: white;
`;
