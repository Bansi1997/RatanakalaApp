import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Color from '../../helper/Color';
import {hp, wp, isIos, statusBarHeight} from '../../helper/constants';
import {fontSize} from '../../helper/fontSize';
import {fontFamily} from '../../helper/fontFamily';
import HomeHeader from '../../components/Home/HomeHeader';
import Line from '../../components/common/Line';
import HomeButtons from '../../components/Home/HomeButton';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <Line />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <HomeButtons
          onDiamondSearchPress={() => navigation.navigate('DiamondSearch')}
          onRepCalculatorPress={() => navigation.navigate('RapCalculator')}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: isIos ? statusBarHeight : 0,
  },
  stockWiseTitleContainer: {
    marginTop: hp(3),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stockWiseTitleText: {
    fontSize: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.textInputText,
  },
  diamondTotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.25),
    marginBottom: -hp(3.5),
  },
  diamondTotalIndicator: {
    backgroundColor: Color.primary,
    height: hp(2.25),
    width: wp(10),
  },
  diamondTotalText: {
    fontSize: fontSize.font12,
    fontFamily: fontFamily.exo_regular,
    color: Color.textInputText,
    marginLeft: wp(2.5),
  },
  eventTitleContainer: {
    marginTop: hp(3.5),
    marginHorizontal: wp(5),
    marginBottom: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventTitleText: {
    fontSize: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.textInputText,
  },
  eventListContainer: {
    marginBottom: hp(12),
  },
  boxView: {
    alignSelf: 'center',
  },
});
export default Home;
