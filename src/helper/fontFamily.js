import {isIos} from './constants';
export const fontFamily = {
  charter_bold: isIos ? 'Charter-Bold' : 'Charter Bold',
  charter_regular: isIos ? 'Charter' : 'Charter Regular',
  exo_bold: 'Exo2-Bold',
  exo_medium: 'Exo2-Medium',
  exo_regular: 'Exo2-Regular',
  exo_semibold: 'Exo2-SemiBold',
  lato_bold: 'Lato-Bold',
  lato_regular: 'Lato-Regular',
  barlow_bold: 'Barlow-Bold',
  barlow_medium: 'Barlow-Medium',
  barlow_regular: 'Barlow-Regular',
};
