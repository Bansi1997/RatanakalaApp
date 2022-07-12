import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {hp, wp} from '../../helper/constants';

import icon from '../../helper/icon';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';

const HomeButtons = ({onDiamondSearchPress, onRepCalculatorPress}) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.topContainer}>
        <TouchableWithoutFeedback onPress={onDiamondSearchPress}>
          <View style={style.boxShadow}>
            <LinearGradient
              colors={Color.homeGradientColor}
              style={style.buttonContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Image
                source={icon.diamond_search}
                resizeMode={'contain'}
                style={style.icons}
              />
              <Text style={style.titleText}>{'Diamond\nSearch'}</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onRepCalculatorPress}>
          <View style={style.boxShadow}>
            <LinearGradient
              colors={Color.homeGradientColor}
              style={style.buttonContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Image
                source={icon.RapCalc}
                resizeMode={'contain'}
                style={style.icons}
              />
              <Text style={style.titleText}>{'Rap\nCalculator'}</Text>
            </LinearGradient>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: wp(5),
    marginTop: hp(3),
  },
  boxShadow: {
    shadowColor: Color.homeShadowColor,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonContainer: {
    width: wp(43),
    height: wp(38),
    borderRadius: wp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    width: wp(13),
    height: wp(13),
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp(4),
  },
  titleText: {
    color: Color.textInputText,
    fontSize: fontSize.font14,
    lineHeight: fontSize.font18,
    fontFamily: fontFamily.exo_medium,
    textAlign: 'center',
    marginTop: hp(1.75),
  },
  countView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    backgroundColor: Color.gradientColor2,
    borderRadius: hp(5),
    paddingHorizontal: hp(1),
    paddingVertical: hp(0.5),
    marginHorizontal: hp(1),
    marginVertical: hp(1),
  },
  countTextStyle: {color: Color.background},
});

export default HomeButtons;
