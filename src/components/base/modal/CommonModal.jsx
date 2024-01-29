import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import size from '../../../utils/size';

const CommonModal = ({
  showModal,
  onClose,
  children,
  width = 80,
  height = 20,
  bg = 'white',
  style,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={onClose}
    >
      <ModalWrapper onPressOut={onClose} style={style}>
        <ModalContent width={width} height={height} bg={bg}>
          <View style={{ alignItems: 'center' }}>{children}</View>
        </ModalContent>
      </ModalWrapper>
    </Modal>
  );
};

export default CommonModal;

const ModalWrapper = styled(TouchableOpacity)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled(View)`
  width: ${props => size.width * props.width}%;
  height: ${props => size.height * props.height}%;
  background-color: ${props => props.bg};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
