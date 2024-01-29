import React, { forwardRef } from 'react';
import BottomSheet, {
  BottomSheetScrollView as OriginalBottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

const StyledBottomSheetScrollView = styled(OriginalBottomSheetScrollView)`
  flex: 1;
`;

const CommonBottomSheet = forwardRef(
  ({ snapPoints = ['30%', '50%'], children, index, style }, ref) => {
    return (
      <BottomSheet
        ref={ref}
        index={index}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={style}
      >
        <StyledBottomSheetScrollView>{children}</StyledBottomSheetScrollView>
      </BottomSheet>
    );
  },
);

export default CommonBottomSheet;
