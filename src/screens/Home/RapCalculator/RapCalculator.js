/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Animated,
  Pressable,
  TouchableHighlight,
  FlatList,
  Image,
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
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import {tempRapCalc_list} from '../../../helper/tempdata';

const deleteIcon = require('../../../../asset/icons/delete.png');
const copyIcon = require('../../../../asset/icons/copy.png');
const addNewItemIcon = require('../../../../asset/icons/add.png');

const RapCalculator = ({navigation}) => {
  //........Model state
  const [showBottomSheet, setShowBottomSheet] = useState(true);
  //.......Type state
  const [type, setType] = useState('GIA'); //Types :- Mix , GIA ,Order
  const [listData, setListData] = useState(tempRapCalc_list);

  const hide = () => {
    setShowBottomSheet(!showBottomSheet);
  };
  const renderDeleteCopyItem = ({data}) => {
    return (
      <View style={styles.swipeWrapper}>
        <TouchableOpacity
          onPress={() => {
            console.log('copy item');
          }}>
          <View style={styles.buttonLeft}>
            <Image source={copyIcon} style={styles.swipeIcon}></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log('Delete item');
          }}>
          <View style={styles.buttonLeft}>
            <Image source={deleteIcon} style={styles.swipeIcon}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
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
                //setShowBottomSheet(true); //just for the testing purpose........
              }}>
              <Text style={styles.headerRightText}>{'Reset'}</Text>
            </TouchableOpacity>
          }
        />
        <Line />
        <View style={styles.DetailWarpper}>
          <View style={styles.rawDataWrapper}>
            <View style={styles.typeWrapper}>
              <TouchableOpacity
                style={[
                  styles.typeButton,
                  {
                    backgroundColor:
                      type === 'Mix'
                        ? Color.secondaryBackground
                        : Color.background,
                    borderTopLeftRadius: 10,
                  },
                ]}
                onPress={() => {
                  setType('Mix');
                }}>
                <Text
                  style={{
                    fontSize: fontSize.font15,
                    color:
                      type === 'Mix' ? Color.primary : Color.inActiveTabColor,
                  }}>
                  Mix
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.typeButton,
                  {
                    backgroundColor:
                      type === 'GIA'
                        ? Color.secondaryBackground
                        : Color.background,
                  },
                ]}
                onPress={() => {
                  setType('GIA');
                }}>
                <Text
                  style={{
                    fontSize: fontSize.font15,
                    color:
                      type === 'GIA' ? Color.primary : Color.inActiveTabColor,
                  }}>
                  GIA
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.typeButton,
                  {
                    backgroundColor:
                      type === 'Order'
                        ? Color.secondaryBackground
                        : Color.background,
                    borderTopRightRadius: 10,
                  },
                ]}
                onPress={() => {
                  setType('Order');
                }}>
                <Text
                  style={{
                    fontSize: fontSize.font15,
                    color:
                      type === 'Order' ? Color.primary : Color.inActiveTabColor,
                  }}>
                  Order
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rawDatamainWrapper}>
              <View style={styles.rawDataDetailWrapper}>
                <View style={styles.headerWrapper}>
                  <View style={styles.detailTextWrapper}>
                    <Text style={{fontWeight: 'bold'}}>Detail</Text>
                  </View>
                  <View style={styles.PercentageTextWrapper}>
                    <Text style={{fontWeight: 'bold'}}>%</Text>
                  </View>
                  <View style={styles.rateTextWrapper}>
                    <Text style={{fontWeight: 'bold'}}>Rate</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.textWrapper}>
                    <Text>Org. Rate</Text>
                  </View>
                  <View style={styles.textWrapper}>
                    <Text>0.00</Text>
                  </View>
                  <View style={styles.rateWrapper}>
                    <Text>4600</Text>
                  </View>
                </View>
                {type === 'GIA' && (
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.textWrapper}>
                      <Text>Dis.</Text>
                    </View>
                    <View style={styles.textWrapper}>
                      <Text>31.00</Text>
                    </View>
                    <View style={styles.rateWrapper}>
                      <Text>3100</Text>
                    </View>
                  </View>
                )}
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.textWrapper}>
                    <Text style={{fontWeight: 'bold'}}>Total</Text>
                  </View>
                  <View style={styles.textWrapper}>
                    <Text>31.00</Text>
                  </View>
                  <View style={styles.rateWrapper}>
                    <Text>3100</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listWrapper}>
            <SwipeListView
              data={listData ? listData : []}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableHighlight
                    onPress={() => setShowBottomSheet(true)}
                    style={styles.listItem}
                    underlayColor={'#AAA'}>
                    <>
                      <View style={styles.listSubItemWrapper}>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'shape'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'Color'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Qty'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Cut'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'Polish'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Sym'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Flor'}</Text>
                        </View>
                      </View>
                      <View
                        style={[
                          styles.listSubItemWrapper,
                          {marginTop: hp(0.2)},
                        ]}>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'Round'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'D'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'VSI'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'EX'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'EX'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'EX'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'NONE'}</Text>
                        </View>
                      </View>
                      <View
                        style={[styles.listSubItemWrapper, {marginTop: hp(1)}]}>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'Carat'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'O.Rate'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'Dis %'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Rate'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>
                            {'Amount'}
                          </Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{'Type'}</Text>
                        </View>
                        {/* <View style={styles.subItem}>
                          <Text style={styles.listItemTitleText}>{''}</Text>
                        </View> */}
                      </View>
                      <View
                        style={[
                          styles.listSubItemWrapper,
                          {marginTop: hp(0.2)},
                        ]}>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'0.51'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'2000'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'0.00'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'2000'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'1020'}</Text>
                        </View>
                        <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'GTA'}</Text>
                        </View>
                        {/* <View style={styles.subItem}>
                          <Text style={styles.listItemText}>{'NONE'}</Text>
                        </View> */}
                      </View>
                    </>
                  </TouchableHighlight>
                );
              }}
              renderHiddenItem={data => renderDeleteCopyItem(data)}
              rightOpenValue={isIos ? -120 : -105}
              previewOpenDelay={3000}
              friction={1000}
              tension={40}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            marginBottom: hp(5),
            marginRight: hp(4),
          }}>
          <TouchableOpacity>
            <Image
              source={addNewItemIcon}
              style={{
                height: wp(15),
                width: wp(15),
                tintColor: Color.primary,
              }}
            />
          </TouchableOpacity>
        </View>
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
        <ModalDetail
          isShowModal={() => {
            setShowBottomSheet(false);
          }}
        />
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
  //detail......
  DetailWarpper: {flex: 1, marginVertical: hp(2)},
  rawDataWrapper: {
    marginHorizontal: wp(5),
  },
  typeWrapper: {flexDirection: 'row'},
  typeButton: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.primary,
    paddingVertical: hp(1),
  },
  rawDatamainWrapper: {
    borderWidth: 2,
    borderColor: Color.primary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  rawDataDetailWrapper: {
    borderWidth: 2,
    marginHorizontal: wp(0.6),
    marginVertical: hp(0.3),
    borderRadius: 5,
    borderColor: Color.primary,
  },
  headerWrapper: {
    borderBottomWidth: 2,
    borderColor: Color.primary,
    flexDirection: 'row',
  },
  detailTextWrapper: {
    flex: 1,
    alignItems: 'center',
    borderColor: Color.primary,
    borderRightWidth: 2,
    paddingVertical: hp(0.5),
  },
  PercentageTextWrapper: {
    flex: 1,
    borderRightWidth: 2,
    borderColor: Color.primary,
    alignItems: 'center',
    paddingVertical: hp(0.5),
  },
  rateTextWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(0.5),
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(0.5),
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderColor: Color.primary,
  },
  rateWrapper: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Color.primary,
    paddingVertical: hp(0.5),
  },
  //swipe list ...
  listWrapper: {marginHorizontal: wp(3), marginVertical: hp(5)},
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
  },
  buttonLeft: {
    flex: 1,
    width: wp(12),
    marginRight: wp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.background,
    borderColor: Color.bottomBorder,
    borderWidth: wp(0.25),
  },
  swipeIcon: {
    height: wp(4),
    width: wp(4),
    tintColor: Color.primary,
  },
  swipeWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: hp(1),
  },
  listItemTitleText: {
    fontSize: fontSize.font12,
    fontFamily: fontFamily.exo_regular,
    color: Color.authMainTitleText,
    fontWeight: 'bold',
  },
  subItem: {flex: 1, alignItems: 'center'},
  listSubItemWrapper: {flexDirection: 'row'},
  listItemText: {
    fontSize: fontSize.font12,
    fontFamily: fontFamily.exo_regular,
    color: 'black',
  },
});
export default RapCalculator;
