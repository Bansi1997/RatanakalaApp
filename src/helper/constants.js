import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import DeviceInfo from 'react-native-device-info';

export const wp = val => {
  return widthPercentageToDP(val);
};

export const hp = val => {
  return heightPercentageToDP(val);
};

export const statusBarHeight = getStatusBarHeight();

export const isIos = Platform.OS === 'ios' ? true : false;

// Device info
export const hasNotch = DeviceInfo.hasNotch();
export const appVersion = DeviceInfo.getVersion();
// export const deviceType = DeviceInfo.getDeviceType();
export const deviceModel = DeviceInfo.getModel();
export const UDID = DeviceInfo.getUniqueId();
export const deviceType = Platform.OS === 'ios' ? 'ios' : 'android';

export const bottomTabHeight = hp(12);
