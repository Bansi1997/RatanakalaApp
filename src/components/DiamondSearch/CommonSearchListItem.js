/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {hp, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';

const CommonSearchListItem = ({
  title,
  mainContainerStyle,
  options,
  onAllPress,
  onItemPress,
  onFancyPress,
  fancyVisible,
  valueLable = 'label',
  hideAll = false,
  value,
}) => {
  let final_options = [];
  if (fancyVisible) {
    final_options = hideAll ? [...options, '1'] : ['0', ...options, '1'];
  } else if (hideAll) {
    final_options = [...options];
  } else {
    final_options = ['0', ...options];
  }
  const allSelected =
    options.filter(item => item.isSelected).length < options.length;
  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <Text style={style.titleText}>{title}</Text>
      <FlatList
        data={final_options}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          if (!hideAll && index === 0) {
            return (
              <TouchableWithoutFeedback onPress={onAllPress}>
                {allSelected ? (
                  <View style={[style.itemContainer, {marginLeft: wp(5)}]}>
                    <Text style={style.itemText}>{'All'}</Text>
                  </View>
                ) : (
                  <LinearGradient
                    colors={Color.homeGradientColor}
                    style={[style.selectedItemContainer, {marginLeft: wp(5)}]}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}>
                    <Text style={style.itemText}>{'All'}</Text>
                  </LinearGradient>
                )}
              </TouchableWithoutFeedback>
            );
          } else if (fancyVisible && index === final_options.length - 1) {
            if (value) {
              return (
                <TouchableWithoutFeedback onPress={onFancyPress}>
                  <View
                    style={[
                      style.fancyBtn,
                      {
                        borderColor: Color.borderColorBox,
                        backgroundColor: Color.borderColorBox,
                        marginLeft: hideAll && index === 0 ? wp(5) : 0,
                      },
                    ]}>
                    <Text style={style.itemText}>{'Fancy'}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            } else {
              return (
                <TouchableWithoutFeedback onPress={onFancyPress}>
                  <View
                    style={[
                      style.fancyBtn,
                      {
                        marginLeft: hideAll && index === 0 ? wp(5) : 0,
                      },
                    ]}>
                    <Text style={style.itemText}>{'Fancy'}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }
          }
          return (
            <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
              {item.isSelected ? (
                <LinearGradient
                  colors={Color.homeGradientColor}
                  style={[
                    style.selectedItemContainer,
                    {
                      marginLeft: hideAll && index === 0 ? wp(5) : 0,
                    },
                  ]}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}>
                  <Text style={style.itemText}>{item[valueLable]}</Text>
                </LinearGradient>
              ) : (
                <View
                  style={[
                    style.itemContainer,
                    {marginLeft: hideAll && index === 0 ? wp(5) : 0},
                  ]}>
                  <Text style={[style.itemText]}>{item[valueLable]}</Text>
                </View>
              )}
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: wp(100),
  },
  titleText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginBottom: hp(1),
    marginLeft: wp(5),
  },
  selectedItemContainer: {
    borderRadius: wp(1.6),
    paddingVertical: hp(1),
    padding: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(1.5),
    minWidth: wp(15),
    borderWidth: wp(0.25),
    borderColor: Color.borderColorBox,
  },
  itemContainer: {
    borderRadius: wp(1.6),
    paddingVertical: hp(1),
    minWidth: wp(15),
    borderWidth: wp(0.25),
    borderColor: Color.primary,
    padding: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(1.5),
  },
  itemText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.lato_regular,
    color: Color.textInputText,
  },
  fancyBtn: {
    borderRadius: wp(1.6),
    paddingVertical: hp(1),
    padding: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(1.5),
    minWidth: wp(15),
    borderWidth: wp(0.25),
    borderColor: Color.primary,
  },
});

export default CommonSearchListItem;
