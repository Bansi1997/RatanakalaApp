import React from 'react';
import {Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {hasNotch, hp, isIos, wp} from '../../helper/constants';
import Color from '../../helper/Color';
import {fontSize} from '../../helper/fontSize';
import {fontFamily} from '../../helper/fontFamily';

const BottomButtons = ({onButtonPress, buttonTitle, disabled}) => {
  return (
    <View style={style.shadowContainer}>
      <View style={style.mainContainer}>
        <TouchableWithoutFeedback onPress={onButtonPress} disabled={disabled}>
          <View style={style.button}>
            <Text style={style.buttonText}>{buttonTitle}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  shadowContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowColor: Color.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 4,
    shadowOffset: {width: 0, height: -8},
    borderTopStartRadius: wp(6.5),
    borderTopEndRadius: wp(6.5),
  },
  mainContainer: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    borderTopStartRadius: wp(6.5),
    borderTopEndRadius: wp(6.5),
    paddingTop: isIos ? 0 : hp(1.25),
  },
  button: {
    width: wp(100),
    paddingTop: hp(2.5),
    paddingBottom: hasNotch ? hp(4) : hp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.secondaryBackground,
    borderTopRightRadius: wp(6.5),
    borderTopLeftRadius: wp(6.5),
  },
  buttonText: {
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_regular,
    color: Color.authButtonText2,
  },
});

export default BottomButtons;
