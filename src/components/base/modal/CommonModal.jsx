import React from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import size from '../../../utils/size';

const CommonModal = ({ showModal, setShowModal, children, width, height, bg, style }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <ModalWrapper onPressOut={() => setShowModal(false)} style={style}>
        <ModalContent
          width={width || 80}
          height={height || 50}
          bg={bg}
          onStartShouldSetResponder={() => true}
          onResponderRelease={e => e.stopPropagation()}
        >
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

const ModalContent = styled(View)(props => ({
  width: size.width * props.width,
  height: size.height * props.height,
  backgroundColor: props.bg,
  justifyContent: 'center',
  alignItems: 'center',
  ...props.style,
}));
