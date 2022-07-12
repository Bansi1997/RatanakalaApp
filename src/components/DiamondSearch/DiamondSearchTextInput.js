import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import {hp, isIos, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';

const DiamondSearchTextInput = ({
  title,
  placeholder,
  placeholder_1,
  placeholder_2,
  value,
  value_1,
  value_2,
  onChangeText,
  onChangeText_1,
  onChangeText_2,
  secureTextEntry,
  mainContainerStyle,
  keyboardType,
  keyboardType_1,
  keyboardType_2,
  dualInput,
}) => {
  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <Text style={style.titleText}>{title}</Text>
      {dualInput ? (
        <View style={style.dualInputContainer}>
          <TextInput
            style={style.textInput_1}
            placeholder={placeholder_1}
            placeholderTextColor={Color.placeholder}
            value={typeof value_1 === 'number' ? value_1.toString() : value_1}
            onChangeText={onChangeText_1}
            keyboardType={keyboardType_1}
          />
          <TextInput
            style={style.textInput_2}
            placeholder={placeholder_2}
            placeholderTextColor={Color.placeholder}
            value={typeof value_2 === 'number' ? value_2.toString() : value_2}
            onChangeText={onChangeText_2}
            keyboardType={keyboardType_2}
          />
        </View>
      ) : (
        <View style={style.inputContainer}>
          <TextInput
            style={style.textInput}
            placeholder={placeholder}
            placeholderTextColor={Color.placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: wp(90),
  },
  titleText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginBottom: hp(1),
  },
  inputContainer: {
    borderWidth: wp(0.25),
    borderRadius: wp(2),
    borderColor: Color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(isIos ? 2 : 0.8),
  },
  textInput: {
    padding: 0,
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_medium,
    color: Color.textInputText,
    flex: 1,
  },
  dualInputContainer: {
    flexDirection: 'row',
  },
  textInput_1: {
    padding: 0,
    borderWidth: wp(0.25),
    borderRadius: wp(2),
    borderColor: Color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(isIos ? 1.7 : 0.6),
    marginRight: wp(4.5),
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_medium,
    color: Color.textInputText,
    flex: 1,
  },
  textInput_2: {
    padding: 0,
    borderWidth: wp(0.25),
    borderRadius: wp(2),
    borderColor: Color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(isIos ? 1.7 : 0.6),
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_medium,
    color: Color.textInputText,
    flex: 1,
  },
});

export default DiamondSearchTextInput;
