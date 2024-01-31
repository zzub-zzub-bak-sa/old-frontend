import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Check = ({ size, color }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7803 9.78033C17.0732 9.48744 17.0732 9.01256 16.7803 8.71967C16.4874 8.42678 16.0126 8.42678 15.7197 8.71967L10.75 13.6893L8.28033 11.2197C7.98744 10.9268 7.51256 10.9268 7.21967 11.2197C6.92678 11.5126 6.92678 11.9874 7.21967 12.2803L10.2197 15.2803C10.5126 15.5732 10.9874 15.5732 11.2803 15.2803L16.7803 9.78033Z"
        fill={color}
      />
    </Svg>
  );
};

export default Check;
