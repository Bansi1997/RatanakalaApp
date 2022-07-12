/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SmoothPicker from 'react-native-smooth-picker';
import {hp, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';

const opacities = {
  0: 1,
  1: 1,
  2: 0.6,
  3: 0.3,
  4: 0.1,
};

const Item = ({opacity, selected, name}) => {
  return (
    <View
      style={[
        styles.OptionWrapper,
        {
          opacity,
          borderColor: selected ? Color.secondaryBackground : Color.primary,
          flexDirection: 'row',
          backgroundColor: selected ? Color.secondaryBackground : 'white',
          alignItems: 'center',
          marginHorizontal: hp(0.25),
          paddingHorizontal: hp(2),
        },
      ]}>
      <Text
        style={{
          fontSize: fontSize.font11,
          fontFamily: fontFamily.lato_regular,
          color: Color.textInputText,
        }}>
        {name}
      </Text>
    </View>
  );
};

const ItemToRender = ({item, index}, indexSelected, width) => {
  const selected = index === indexSelected;
  const gap = Math.abs(index - indexSelected);

  let opacity = opacities[gap];
  if (gap > 3) {
    opacity = opacities[4];
  }
  return (
    <>
      <Item
        opacity={opacity}
        selected={selected}
        name={item && item.label ? item.label : item}
      />
    </>
  );
};
const SmoothPickerDropDown = ({data, selectedData, index}) => {
  let defaultIndex = index;
  const [selected, setSelected] = useState(defaultIndex);
  const handleChange = index => {
    setSelected(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperVertical}>
        <SmoothPicker
          initialScrollToIndex={selected}
          onScrollToIndexFailed={() => {}}
          keyExtractor={(_, index) => index.toString()}
          data={data}
          scrollAnimation
          onSelected={({item, index}) => {
            handleChange(index);
            selectedData(index);
          }}
          renderItem={option => ItemToRender(option, selected)}
          selectOnPress
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperVertical: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  OptionWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(3.5),
    borderWidth: wp(0.25),
    borderRadius: wp(2),
  },
});

export default SmoothPickerDropDown;
