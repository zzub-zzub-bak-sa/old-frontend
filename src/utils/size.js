import { WIDTH, HEIGHT } from '../constants/constants';

const basicDimensions = {
  width: 360,
  height: 800,
};

const width = (WIDTH * (1 / basicDimensions.width)).toFixed(2);
const height = (HEIGHT * (1 / basicDimensions.height)).toFixed(2);

const size = {
  height,
  width,
};

export default size;
