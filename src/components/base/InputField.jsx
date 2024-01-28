import { PropTypes } from 'prop-types';
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

InputField.defaultProps = {
  color: '#242424',
  placeholderColor: '#242424',
  bg: 'tomato',
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  placeholderColor: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
};

export default InputField;

const Input = styled(TextInput)(props => ({
  color: props.color,
  backgroundColor: props.bg,
  fontSize: font(12),
}));
