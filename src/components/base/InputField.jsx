import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styled from 'styled-components';
import size from '../../utils/size';
import { body1 } from '../../styles/fonts';
import { colors } from '../../styles/colors';
import Tags from './Tags';

const InputField = ({ placeholder, value, onChangeValue, style }) => {
  const [tags, setTags] = useState([]);

  const handleTagAdd = () => {
    setTags([...tags, value]);
    onChangeValue('');
    console.log(tags);
  };

  const handleTagDelete = idx => {
    setTags(tags.filter((_, i) => i !== idx));
  };

  return (
    <Container>
      <Content>
        <TagWrapper>
          {tags.map((tag, idx) => (
            <Tags key={idx} text={tag} onPressTag={() => handleTagDelete(idx)} />
          ))}
        </TagWrapper>
        <InputWrapper hasTags={tags.length > 0}>
          <Input
            placeholder={placeholder}
            placeholderTextColor={colors.grey[100]}
            value={value}
            onChangeText={text => onChangeValue(text)}
            style={style}
            onEndEditing={handleTagAdd}
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
  border-bottom-width: 1px;
  border-bottom-color: ${colors.orange};
  overflow: hidden;
`;

const Content = styled(View)`
  height: ${size.height * 42}px;
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

const TagWrapper = styled(View)`
  flex-direction: row;
  gap: ${size.width * 8}px;
`;
