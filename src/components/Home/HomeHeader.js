import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import {hp, wp} from '../../helper/constants';
import icon from '../../helper/icon';
import Color from '../../helper/Color';
import {fontSize} from '../../helper/fontSize';
import {fontFamily} from '../../helper/fontFamily';

const HomeHeader = ({
  badgeMessageCount,
  badgeNotificationCount,
  onChatPress,
  onNotificationPress,
  onProfilePress,
  profilePhoto,
  onCalcPress,
  onPressWhatsapp,
}) => {
  return (
    <View style={style.mainContainer}>
      <View View style={style.middelView}>
        <Text style={style.headerTitle}>{'Home'}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    height: hp(5),
  },
  middelView: {flex: 1, alignItems: 'center'},
  headerTitle: {
    paddingTop: hp(1.2),
    fontSize: fontSize.font18,
    fontFamily: fontFamily.exo_semibold,
    color: Color.textInputText,
  },
});

export default HomeHeader;
