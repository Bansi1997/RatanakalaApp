/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CommonHeader from '../../../components/common/CommomHeader';
import {hp, wp, isIos, statusBarHeight} from '../../../helper/constants';
import Color from '../../../helper/Color';
import {fontSize} from '../../../helper/fontSize';
import {fontFamily} from '../../../helper/fontFamily';
import BottomButton from '../../../components/common/BottomButtons';
import Line from '../../../components/common/Line';
import HomeButtons from '../../../components/Home/HomeButton';
import KeyboardHandledView from '../../../components/common/KeyboardHandledView';
import DimondDetail from './DiamondDetail';

const DiamondSearch = ({navigation}) => {
  const [isResetList, setIsResetList] = useState(true);
  const onPressSearchButton = () => {
    navigation.navigate('SearchScreen');
    console.log('search');
  };
  const onPressReset = () => {
    setIsResetList(true);
  };

  return (
    <View style={styles.mainContainer}>
      <CommonHeader
        back
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'Diamond Search'}
        rightComponent={
          <TouchableOpacity
            style={styles.headerRightComponent}
            onPress={() => {
              onPressReset();
            }}>
            <Text style={styles.headerRightText}>{'Reset'}</Text>
          </TouchableOpacity>
        }
      />
      <Line />
      <DimondDetail isReset={isResetList} />

      <BottomButton
        buttonTitle={'Search'}
        onButtonPress={onPressSearchButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: isIos ? statusBarHeight : 0,
  },
  subContainer: {flex: 1, zIndex: -1},
  caratView: {
    flexDirection: 'row',
    marginHorizontal: hp(1),
    marginBottom: Platform.OS === 'android' ? hp(1.5) : 0,
  },
  subViewShadowStyle: {
    backgroundColor: Color.background,
    shadowColor: Color.shadowColor,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerRightComponent: {
    alignItems: 'flex-end',
  },
  headerRightText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.authMainTitleText,
    marginRight: wp(5),
  },
  dimondDetail: {flex: 1, marginBottom: hp(9.5)},
});
export default DiamondSearch;
