/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {hp, isIos, wp} from '../../helper/constants';

import DiamondSearchTextInput from './DiamondSearchTextInput';
import Color from '../../helper/Color';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import icon from '../../helper/icon';

class SizeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  render() {
    const {
      title,
      mainContainerStyle,
      options,
      onAllPress,
      onItemPress,
      valueLable = 'label',
      hideAll = false,
      onGeneral,
      onSpecific,
      show,
      //  Carat TextInput 1
      inputTitle,
      value_11,
      onChangeText_11,
      value_12,
      onChangeText_12,
      //  Carat TextInput 2
      value_21,
      onChangeText_21,
      value_22,
      onChangeText_22,
      //  Carat TextInput 3
      value_31,
      onChangeText_31,
      value_32,
      onChangeText_32,
      //  Carat TextInput 4
      value_41,
      onChangeText_41,
      value_42,
      onChangeText_42,
      selectedItemContainerStyle,
    } = this.props;

    const {value} = this.state;

    let final_options = [];
    if (hideAll) {
      final_options = [...options];
    } else {
      final_options = ['0', ...options];
    }
    const allSelected =
      options.filter(item => item.isSelected).length < options.length;
    return (
      <View style={[style.mainContainer, mainContainerStyle]}>
        <View style={style.sizeContainer}>
          <View style={style.sizeViewStyle}>
            <Text style={style.titleText}>{title}</Text>
            <View style={[style.sizeButton, {alignItems: 'flex-start'}]}>
              <TouchableOpacity onPress={onGeneral}>
                <Text style={style.sizeButtontext}>{'General'}</Text>
              </TouchableOpacity>
              <View style={style.verticalLine} />
              <TouchableOpacity onPress={onSpecific}>
                <Text style={style.sizeButtontext}>{'Specific'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {show &&
            (value == 4 ? (
              <TouchableWithoutFeedback
                onPress={() => this.setState({value: value - 3})}>
                <View style={style.iconView}>
                  <Image style={style.addIconStyle} source={icon.minus_sign} />
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => this.setState({value: value + 1})}>
                <View style={style.iconView}>
                  <Image style={style.addIconStyle} source={icon.plus_sign} />
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>

        {show ? (
          <View>
            <DiamondSearchTextInput
              title={inputTitle}
              dualInput
              placeholder_1={'From'}
              value_1={value_11}
              onChangeText_1={onChangeText_11}
              keyboardType_1={'numeric'}
              placeholder_2={'To'}
              value_2={value_12}
              onChangeText_2={onChangeText_12}
              keyboardType_2={'numeric'}
              mainContainerStyle={{
                marginLeft: wp(5),
                marginTop: wp(isIos ? -1 : -3),
              }}
            />

            {value >= 2 && (
              <DiamondSearchTextInput
                title={inputTitle}
                dualInput
                placeholder_1={'From'}
                value_1={value_21}
                onChangeText_1={onChangeText_21}
                keyboardType_1={'numeric'}
                placeholder_2={'To'}
                value_2={value_22}
                onChangeText_2={onChangeText_22}
                keyboardType_2={'numeric'}
                mainContainerStyle={{
                  marginLeft: wp(5),
                  marginTop: wp(isIos ? -2 : -3),
                }}
              />
            )}

            {value >= 3 && (
              <DiamondSearchTextInput
                title={inputTitle}
                dualInput
                placeholder_1={'From'}
                value_1={value_31}
                onChangeText_1={onChangeText_31}
                keyboardType_1={'numeric'}
                placeholder_2={'To'}
                value_2={value_32}
                onChangeText_2={onChangeText_32}
                keyboardType_2={'numeric'}
                mainContainerStyle={{
                  marginLeft: wp(5),
                  marginTop: wp(isIos ? -2 : -3),
                }}
              />
            )}

            {value >= 4 && (
              <DiamondSearchTextInput
                title={inputTitle}
                dualInput
                placeholder_1={'From'}
                value_1={value_41}
                onChangeText_1={onChangeText_41}
                keyboardType_1={'numeric'}
                placeholder_2={'To'}
                value_2={value_42}
                onChangeText_2={onChangeText_42}
                keyboardType_2={'numeric'}
                mainContainerStyle={{
                  marginLeft: wp(5),
                  marginTop: wp(isIos ? -2 : -3),
                }}
              />
            )}
          </View>
        ) : (
          <View style={[style.mainContainer]}>
            <FlatList
              data={final_options}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                if (!hideAll && index === 0) {
                  return (
                    <TouchableWithoutFeedback onPress={onAllPress}>
                      {allSelected ? (
                        <View
                          style={[style.itemContainer, {marginLeft: wp(5)}]}>
                          <Text style={style.itemText}>{'All'}</Text>
                        </View>
                      ) : (
                        <LinearGradient
                          colors={Color.homeGradientColor}
                          style={[
                            style.selectedItemContainer,
                            {marginLeft: wp(5)},
                          ]}
                          start={{x: 1, y: 0}}
                          end={{x: 0, y: 0}}>
                          <Text style={style.itemText}>{'All'}</Text>
                        </LinearGradient>
                      )}
                    </TouchableWithoutFeedback>
                  );
                }
                return (
                  <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
                    {item.isSelected ? (
                      <LinearGradient
                        colors={Color.homeGradientColor}
                        style={[
                          style.selectedItemContainer,
                          selectedItemContainerStyle,
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
                          selectedItemContainerStyle,
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
        )}
      </View>
    );
  }
}

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
    paddingVertical: hp(1.5),
    padding: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(1.5),
    minWidth: wp(15),
    borderWidth: wp(0.25),
    borderColor: Color.primary,
  },
  sizeButton: {
    flexDirection: 'row',
    marginLeft: wp(5),
    alignItems: 'flex-end',
  },
  sizeButtontext: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    alignSelf: 'flex-start',
  },
  verticalLine: {
    borderWidth: wp(0.15),
    height: hp(2),
    marginHorizontal: wp(2),
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeViewStyle: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  addIconStyle: {
    height: wp(3),
    width: wp(3),
    tintColor: Color.authButtonText2,
  },
  iconView: {
    height: wp(8),
    width: wp(8),
    marginRight: wp(5),
    borderRadius: wp(5),
    backgroundColor: Color.secondaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SizeList;
