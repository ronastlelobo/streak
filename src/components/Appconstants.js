import {PixelRatio} from 'react-native';
export default {
  FONT_FAMILY: {
    IBMPM: 'IBMPlexMono',
    IBMPS: 'IBMPlexSans',
    BARLOW: 'Barlow',
    IBMPM_BOLD: 'IBMPlexMonoMedium',
    IBMPS_BOLD: 'IBMPlexSansMedium',
    BARLOW_BOLD: 'BarlowMedium',
  },
  COLORS: {
    WHITE: '#FFFFFF',
  },
  PIXEL_RATIO: {
    50: PixelRatio.getPixelSizeForLayoutSize(50),
    18: PixelRatio.getPixelSizeForLayoutSize(18),
    15: PixelRatio.getPixelSizeForLayoutSize(15),
    14: PixelRatio.getPixelSizeForLayoutSize(14),
    12: PixelRatio.getPixelSizeForLayoutSize(12),
    10: PixelRatio.getPixelSizeForLayoutSize(10),
    2: PixelRatio.getPixelSizeForLayoutSize(2),
    '14PX': PixelRatio.getPixelSizeForLayoutSize(4.5),
    '16PX': PixelRatio.getPixelSizeForLayoutSize(5),
    '18PX': PixelRatio.getPixelSizeForLayoutSize(6.2),
    '20PX': PixelRatio.getPixelSizeForLayoutSize(6.8),
    '22PX': PixelRatio.getPixelSizeForLayoutSize(7.2),
    '30PX': PixelRatio.getPixelSizeForLayoutSize(10),
  },
  LINEAR_GRADIENT: {
    BR: [
      'rgba(146, 90, 37, 1)',
      'rgba(178, 123, 43, 0.7)',
      'rgba(171, 115, 42, 0.7)',
      'rgba(169, 112, 41, 0.7)',
      'rgba(141, 84, 42, 1)',
    ],
  },
};
