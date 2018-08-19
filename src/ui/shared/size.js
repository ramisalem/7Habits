import {
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
    HEIGHT: width,
    WIDTH: height,
    GOLDEN_WIDTH: width * 0.618,
};

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize =
    (size) => Math.ceil((size * scale));

export const size = {
    small: scaledSize(25),
    oneThird: scaledSize(125),
    fullScreen: scaledSize(375),
};