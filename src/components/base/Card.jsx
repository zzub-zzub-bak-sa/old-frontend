import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Card = ({ width, height, bg, onPress, children }) => {
  return (
    <CardWrapper width={width} height={height} bg={bg} onPress={onPress}>
      {children}
    </CardWrapper>
  );
};

Card.defaultProps = {
  width: 120,
  height: 120,
  bg: 'tomato',
};

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  bg: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;

const CardWrapper = styled(TouchableOpacity)`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ bg }) => bg};
`;
