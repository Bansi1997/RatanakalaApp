import React from 'react';
import {View, StyleSheet} from 'react-native';
import {wp} from '../../helper/constants';
import Color from '../../helper/Color';

const Line = ({borderStyle}) => {
  return <View style={[style.borderStyle, borderStyle]} />;
};

const style = StyleSheet.create({
  borderStyle: {
    borderWidth: wp(0.1),
    borderColor: Color.lightGray,
  },
});

export default Line;
