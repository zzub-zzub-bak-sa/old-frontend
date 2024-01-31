import React from 'react';
import Svg, { Path } from 'react-native-svg';

const IcBack = ({ size, color }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M15.5302 4.53033C15.8231 4.23744 15.8231 3.76256 15.5302 3.46967C15.2373 3.17678 14.7624 3.17678 14.4696 3.46967L9.29798 8.64125C7.44299 10.4962 7.44299 13.5038 9.29798 15.3588L14.4696 20.5303C14.7624 20.8232 15.2373 20.8232 15.5302 20.5303C15.8231 20.2374 15.8231 19.7626 15.5302 19.4697L10.3586 14.2981C9.08944 13.0289 9.08944 10.9711 10.3586 9.70191L15.5302 4.53033Z"
      />
    </Svg>
  );
};

export default IcBack;
