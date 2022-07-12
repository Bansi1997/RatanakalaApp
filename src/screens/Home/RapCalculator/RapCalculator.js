/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState, useRef, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import CommonHeader from '../../../components/common/CommomHeader';
import {hp, wp, isIos, statusBarHeight} from '../../../helper/constants';
import Color from '../../../helper/Color';
import {fontSize} from '../../../helper/fontSize';
import {fontFamily} from '../../../helper/fontFamily';
import BottomButton from '../../../components/common/BottomButtons';
import {Model} from '../../../components/Modal/Model';
import Line from '../../../components/common/Line';
import ModalDetail from '../../../components/Modal/ModalDetail';

const RapCalculator = ({navigation}) => {
  //.......
  const [showBottomSheet, setShowBottomSheet] = React.useState(true);
  const hide = () => {
    setShowBottomSheet(!showBottomSheet);
  };

  //animation
  const onPressSearchButton = () => {
    //navigation.navigate('SearchScreen');
    console.log('search');
  };
  return (
    <>
      <View style={styles.mainContainer}>
        <CommonHeader
          back
          onBackPress={() => {
            navigation.goBack();
            //   navigation.goBack();
            //   this.initial();
            //   this.props.clearRepCalData(1);
          }}
          title={'Rap Calculator'}
          rightComponent={
            <TouchableOpacity
              style={styles.headerRightComponent}
              onPress={() => {
                console.log('reset data');
                setShowBottomSheet(true); //just for the testing purpose........
              }}>
              <Text style={styles.headerRightText}>{'Reset'}</Text>
            </TouchableOpacity>
          }
        />
        <Line />
      </View>
      {/* ........................modal................. 290 */}
      <Model show={showBottomSheet} height={520}>
        <View style={styles.bottomSheetContent}>
          <CommonHeader
            leftComponent={
              <TouchableOpacity onPress={() => setShowBottomSheet(false)}>
                <Text style={styles.headerLeftText}>Cancel</Text>
              </TouchableOpacity>
            }
            onBackPress={() => {
              navigation.goBack();
              //   navigation.goBack();
              //   this.initial();
              //   this.props.clearRepCalData(1);
            }}
            title={'Rap Calculator'}
            rightComponent={
              <TouchableOpacity
                style={styles.headerRightComponent}
                onPress={() => {
                  console.log('reset data');
                }}>
                <Text style={styles.headerRightText}>{'Clear'}</Text>
              </TouchableOpacity>
            }
          />
          <View style={styles.Line} />
        </View>
        <ModalDetail />
      </Model>
    </>
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
    //backgroundColor: 'red',
  },
  headerRightText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.authMainTitleText,
    marginRight: wp(5),
  },
  headerLeftText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.authMainTitleText,
    marginLeft: wp(5),
  },

  bottomSheetContent: {
    paddingTop: 40,
    alignItems: 'center',
  },
  Line: {
    width: '100%',
    flex: 1,
    borderWidth: wp(0.1),
    borderColor: Color.lightGray,
  },
});
export default RapCalculator;
