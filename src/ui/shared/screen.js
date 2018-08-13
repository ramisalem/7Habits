import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

const GOLDEN_RATIO = 0.618;

export const screen = {
    height: window.height,
    width: window.width,
    goldenWidth: window.width * GOLDEN_RATIO,
};

