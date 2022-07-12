import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {wp} from '../../helper/constants';
import icon from '../../helper/icon';
import Color from '../../helper/Color';
import {fontSize} from '../../helper/fontSize';
import {fontFamily} from '../../helper/fontFamily';

const RememberCheckBox = ({value, onPress}) => {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
      activeOpacity={1}>
      <Image
        source={value ? icon.checkbox_checked : icon.checkbox}
        resizeMode={'contain'}
        style={style.checkIcon}
      />
      <Text style={style.title}>{'Remember'}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  checkIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2.5),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.primary,
  },
});

export default RememberCheckBox;
