import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {hp, wp} from '../../helper/constants';
import icon from '../../helper/icon';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';
import {capitalizeWord} from '../../helper/globalFunctions';

const ShapList = ({shapList, moreVisible, onItemPress, onAllShapesPress}) => {
  const [shapesList, setShapesList] = useState(() => {
    if (shapList.length > 10) {
      return shapList.slice(0, 10);
    }
    return shapList;
  });
  const [fullListVisible, setFullListVisible] = useState(() => {
    if (shapList.length < 10) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    setShapesList(() => {
      if (shapList.length > 10) {
        return shapList.slice(0, 10);
      }
      return shapList;
    });
    setFullListVisible(() => {
      if (shapList.length < 10) {
        return true;
      }
      return false;
    });
  }, [shapList]);

  function onMorePress() {
    setShapesList(shapList);
    if (moreVisible) {
      setFullListVisible(!fullListVisible);
    }
  }

  function onLessPress() {
    setShapesList(shapList.slice(0, 10));
    if (moreVisible) {
      setFullListVisible(!fullListVisible);
    }
  }

  return (
    <FlatList
      data={['0', ...shapList]}
      style={style.mainContainer}
      scrollEnabled={false}
      numColumns={4}
      renderItem={({item, index}) => {
        if (index === 0) {
          return (
            <TouchableWithoutFeedback onPress={() => onAllShapesPress()}>
              <View style={style.itemContainer}>
                <Text style={style.itemTitleText}>{'All\nShapes'}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        } else {
          return (
            <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
              {item.isSelected ? (
                (console.log('isSelected'),
                (
                  <LinearGradient
                    colors={Color.homeGradientColor}
                    style={style.itemContainer}
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}>
                    {icon[item.label] && (
                      <Image
                        source={icon[item.label]}
                        resizeMode={'contain'}
                        style={style.itemIcon}
                      />
                    )}
                    <Text style={style.itemTitleText} numberOfLines={1}>
                      {capitalizeWord(item.name)}
                    </Text>
                  </LinearGradient>
                ))
              ) : (
                <View style={style.itemContainer}>
                  {icon[item.label] && (
                    <Image
                      source={icon[item.label]}
                      resizeMode={'contain'}
                      style={style.itemIcon}
                    />
                  )}
                  <Text style={style.itemTitleText} numberOfLines={1}>
                    {capitalizeWord(item.name)}
                  </Text>
                </View>
              )}
            </TouchableWithoutFeedback>
          );
        }
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const style = StyleSheet.create({
  mainContainer: {
    marginTop: -hp(2.5),
    paddingVertical: hp(2.5),
  },
  itemContainer: {
    marginRight: wp(1),
    marginLeft: wp(1),
    marginTop: wp(1),
    marginBottom: wp(1),
    width: wp(20.5),
    height: wp(20.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1.25),
    backgroundColor: Color.background,
    shadowColor: Color.homeShadowColor,
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  itemIcon: {
    width: wp(10),
    height: wp(10),
    marginBottom: hp(0.75),
  },
  itemTitleText: {
    fontSize: fontSize.font12,
    fontFamily: fontFamily.exo_regular,
    color: Color.textInputText,
    textAlign: 'center',
    paddingHorizontal: wp(1),
  },
});

export default ShapList;
