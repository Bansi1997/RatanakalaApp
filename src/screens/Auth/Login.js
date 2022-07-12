/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Keyboard,
  Image,
} from 'react-native';
import Color from '../../helper/Color';
import KeyboardHandledView from '../../components/common/KeyboardHandledView';
import {hp, wp, statusBarHeight, bottomTabHeight} from '../../helper/constants';
import icon from '../../helper/icon';
import {fontSize} from '../../helper/fontSize';
import {fontFamily} from '../../helper/fontFamily';
import AuthTextInput from '../../components/Auth/AuthTextInput';
import RememberCheckBox from '../../components/Auth/RememberCheckBox';
import AsyncStorage from '@react-native-community/async-storage';
import BottomButtons from '../../components/common/BottomButtons';

const Login = ({navigation}) => {
  let passwordRef = useRef();
  let keyboardDidShow = useRef();
  //state variable.......
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_visible, setPassword_Visible] = useState(false);
  const [rememberMe, setRememberme] = useState(false);

  //Call on Login Button
  const onLoginPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <KeyboardHandledView contentContainerStyle={{flex: 1}}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={icon.main_logo}
              style={styles.mainLogo}
              resizeMode={'contain'}
            />
            <Text style={styles.mainTitleText}>{'SIGN IN'}</Text>
            <AuthTextInput
              title={'Email'}
              placeholder={'Enter your email address'}
              value={email}
              onChangeText={email => setEmail(email)}
              mainContainerStyle={styles.emailInput}
              autoCapitalize={'none'}
              returnKeyType={'next'}
              onSubmitEditing={() => passwordRef.current.focus()}
            />
            <AuthTextInput
              refer={ref => (passwordRef = ref)}
              title={'Password*'}
              placeholder={'Enter your password'}
              value={password}
              onChangeText={password => setPassword(password)}
              secureTextEntry={!password_visible}
              eyeVisible
              returnKeyType={'done'}
              onEyePress={() => setPassword_Visible(!password_visible)}
              mainContainerStyle={styles.inputContainer}
            />
          </View>
          <View style={styles.forgetBox}>
            <RememberCheckBox
              value={rememberMe}
              onPress={() => {
                setRememberme(!rememberMe);
                AsyncStorage.setItem(
                  'Is_RememberMe',
                  JSON.stringify(!rememberMe),
                );
              }}
            />
          </View>
          <View style={{height: bottomTabHeight}} />
        </ScrollView>
      </KeyboardHandledView>
      <BottomButtons buttonTitle={'Login'} onButtonPress={onLoginPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.background,
  },
  mainLogo: {
    width: wp(45),
    height: hp(10),
    marginTop: statusBarHeight + hp(7.5),
  },
  mainTitleText: {
    fontSize: fontSize.font22,
    color: Color.primary,
    fontFamily: fontFamily.charter_bold,
    marginTop: hp(7.5),
    marginBottom: hp(4),
  },
  emailInput: {
    marginBottom: hp(2.5),
  },
  forgotText: {
    fontSize: fontSize.font14,
    fontFamily: fontFamily.exo_medium,
    color: Color.primary,
  },
  forgetBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(8),
    marginTop: hp(2),
    alignItems: 'center',
  },
});
export default Login;
