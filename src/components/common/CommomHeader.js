import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/constants';
import icon from '../../helper/icon';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';

const CommonHeader = ({
  mainContainerStyle,
  back,
  leftComponent,
  leftComponentStyle,
  title,
  titleTextStyle,
  centerComponent,
  centerComponentStyle,
  rightComponent,
  rightComponentStyle,
  onBackPress,
  source,
}) => {
  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <View style={[style.leftComponentContainer, leftComponentStyle]}>
        {back ? (
          <TouchableOpacity onPress={onBackPress}>
            <Image source={source || icon.back} style={style.backIcon} />
          </TouchableOpacity>
        ) : (
          leftComponent
        )}
      </View>
      <View style={[style.centerComponentContainer, centerComponentStyle]}>
        {title ? (
          <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
        ) : (
          centerComponent
        )}
      </View>
      <View style={[style.rightComponentContainer, rightComponentStyle]}>
        {rightComponent}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    paddingVertical: hp(1.25),
    height: hp(7),
  },
  leftComponentContainer: {
    flex: 1,
  },
  backIcon: {
    width: wp(7),
    height: wp(7),
    marginLeft: wp(2.5),
  },
  centerComponentContainer: {
    flex: 2,
    alignItems: 'center',
  },
  titleText: {
    fontSize: fontSize.font18,
    fontFamily: fontFamily.exo_semibold,
    color: Color.textInputText,
  },
  rightComponentContainer: {
    flex: 1,
  },
});

export default CommonHeader;
