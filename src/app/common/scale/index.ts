import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

const guidelineBaseHeight = 812;

const widthBaseScale = width / guidelineBaseWidth;

const heightBaseScale = height / guidelineBaseHeight;

type BaseType = 'width' | 'height';
const normalize = (size: number, based: BaseType = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
export const scaleW = (size: number) => {
  return normalize(size, 'width');
};

//for height  pixel
export const scaleH = (size: number) => {
  return normalize(size, 'height');
};

//for font  pixel
export const fontPixel = (size: number) => {
  return scaleH(size);
};

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

export const sizeScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const widthWindow = width;

export const heightWindow = height;
