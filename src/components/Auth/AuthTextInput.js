import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import {hp, wp} from '../../helper/constants';
import icon from '../../helper/icon';
import Color from '../../helper/Color';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';

const AuthTextInput = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  mainContainerStyle,
  forgotVisible,
  onForgotPress,
  eyeVisible,
  onEyePress,
  keyboardType,
  inputContainerStyle,
  titleTextStyle,
  autoCapitalize,
  autoCorrect,
  refer,
  onFocus,
  maxLength,
  onSubmitEditing,
  returnKeyType,
  editable,
}) => {
  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
      <Text style={[style.titleText, titleTextStyle]}>{title}</Text>
      <View style={[style.inputContainer, inputContainerStyle]}>
        <TextInput
          style={style.textInput}
          placeholder={placeholder}
          placeholderTextColor={Color.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect || false}
          ref={refer}
          onFocus={onFocus}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          editable={editable}
        />
        {forgotVisible && (
          <TouchableOpacity onPress={onForgotPress}>
            <Text style={style.forgotText}>{'Forgot ?'}</Text>
          </TouchableOpacity>
        )}
        {eyeVisible && (
          <TouchableOpacity onPress={onEyePress}>
            <Image
              source={secureTextEntry ? icon.eye : icon.eye_off}
              style={style.eyeIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    width: wp(85),
  },
  titleText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginBottom: hp(1),
  },
  inputContainer: {
    borderWidth: wp(0.25),
    borderRadius: wp(2),
    borderColor: Color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    padding: 0,
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_regular,
    color: Color.textInputText,
    flex: 1,
  },
  forgotText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.primary,
  },
  eyeIcon: {
    height: wp(5.5),
    width: wp(5.5),
    tintColor: Color.primary,
  },
});

export default AuthTextInput;
