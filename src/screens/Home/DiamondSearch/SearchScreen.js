import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Color from '../../../helper/Color';
import CommonHeader from '../../../components/common/CommomHeader';
import Line from '../../../components/common/Line';
import {hp, isIos, statusBarHeight, wp} from '../../../helper/constants';
import {fontFamily} from '../../../helper/fontFamily';
import {fontSize} from '../../../helper/fontSize';

const SearchScreen = ({navigation}) => {
  const showListItem = () => {
    return (
      <View style={styles.listItem}>
        <View style={styles.firstSubListItem}>
          <View style={[styles.subitemWrapper, {marginVertical: hp(0.5)}]}>
            <View style={styles.subView}>
              <Text style={styles.titleText}>{'From :'}</Text>
            </View>
            <View style={styles.subView}>
              <Text style={styles.textItem}>{'0.30'}</Text>
            </View>
          </View>
          <View style={[styles.subitemWrapper, {marginVertical: hp(0.5)}]}>
            <View style={styles.subView}>
              <Text style={styles.titleText}>{'To :'}</Text>
            </View>
            <View style={styles.subView}>
              <Text style={styles.textItem}>{'0.35'}</Text>
            </View>
          </View>
          <View style={[styles.subitemWrapper, {marginVertical: hp(0.5)}]}>
            <View style={styles.subView}>
              <Text style={styles.titleText}>{'Avg :'}</Text>
            </View>
            <View style={styles.subView}>
              <Text style={styles.textItem}>{'0.40'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.Line}></View>
        <View style={styles.secondSubListItem}>
          <>
            <View style={styles.subitemWrapper}>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Shape'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Qty'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Color'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Cut'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Flor'}</Text>
              </View>
            </View>
            <View style={[styles.subitemWrapper, {marginBottom: hp(0.5)}]}>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'Round'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'VSI'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'E'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'EX'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'NONE'}</Text>
              </View>
            </View>
            <View style={styles.subitemWrapper}>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Rap-Rate'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Dis%'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Rate'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Amount'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.titleText}>{'Type'}</Text>
              </View>
            </View>

            <View style={styles.subitemWrapper}>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'2900'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'34%'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'1914'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'612'}</Text>
              </View>
              <View style={styles.subView}>
                <Text style={styles.textItem}>{'GIA'}</Text>
              </View>
            </View>
          </>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <CommonHeader
        back
        onBackPress={() => {
          navigation.goBack();
        }}
        title={'Result'}
        // rightComponent={
        //   <TouchableOpacity
        //     style={styles.headerRightComponent}
        //     onPress={() => {
        //       // onPressReset();
        //     }}>
        //     <Text style={styles.headerRightText}>{'Reset'}</Text>
        //   </TouchableOpacity>
        // }
      />
      <Line />
      <View style={styles.listItemWrapper}>
        <FlatList data={[1, 2, 3]} renderItem={showListItem} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: isIos ? statusBarHeight : 0,
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
  listItem: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    borderBottomWidth: 3,
    borderColor: Color.secondaryBackground,
    backgroundColor: Color.background,
    shadowColor: Color.homeShadowColor,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: hp(1),
    flexDirection: 'row',
  },
  listItemWrapper: {marginVertical: hp(2), flex: 1, marginHorizontal: wp(1)},
  firstSubListItem: {flex: 1 / 3, alignSelf: 'center'},
  Line: {borderWidth: 1, borderColor: Color.inActiveTabColor},
  secondSubListItem: {flex: 1, marginLeft: wp(2)},
  subitemWrapper: {
    flexDirection: 'row',
    marginVertical: hp(0.1),
  },
  subView: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: Color.authMainTitleText,
    fontFamily: fontFamily.exo_bold,
  },
  textItem: {fontFamily: fontFamily.exo_regular},
});
export default SearchScreen;
