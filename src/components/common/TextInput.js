import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Keyboard} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {hp, wp} from '../../helper/constants';
import Color from '../../helper/Color';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';

const InputText = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  mainContainerStyle,
  keyboardType,
  inputContainerStyle,
  autoCapitalize,
  autoCorrect,
  refer,
  onFocus,
  onBlur,
  maxLength,
  onSubmitEditing,
  returnKeyType,
  editable,
  listVisible,
  data,
  selectedData,
}) => {
  const [selectedIndex, setIndex] = useState(-50);
  let selectData = [];
  let nonSelectData = [];
  let filteredData = [];
  data &&
    data.length > 0 &&
    data.map((item, index) => {
      if (selectedIndex !== null) {
        if (item === selectedIndex) {
          selectData.push(item);
        } else {
          nonSelectData.push(item);
        }
        if (selectData && nonSelectData) {
          filteredData = [...selectData, ...nonSelectData];
        }
      } else {
        filteredData = data;
      }
    });

  const emptyList = () => {
    return (
      <View style={{marginVertical: hp(0.25), alignItems: 'center'}}>
        <Text style={[style.rowText, {color: Color.gray}]}>
          {'Invalid Percentage!'}
        </Text>
      </View>
    );
  };

  return (
    <View style={[style.mainContainer, mainContainerStyle]}>
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
          onBlur={onBlur}
          maxLength={maxLength}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          editable={editable}
        />
      </View>
      {listVisible && (
        <View style={style.autoCompleteList}>
          <FlatList
            data={filteredData}
            keyboardShouldPersistTaps={'always'}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss();
                    selectedData(item);
                    setIndex(item);
                  }}>
                  <View
                    style={{
                      marginVertical: hp(0.25),
                      backgroundColor:
                        index === 0 ? Color.secondaryBackground : Color,
                    }}>
                    <Text style={style.rowText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
            // ListEmptyComponent={emptyList()}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    borderWidth: wp(0.25),
    borderRadius: wp(1),
    borderColor: Color.primary,
    paddingHorizontal: wp(5),
    paddingVertical: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(0.8),
  },
  textInput: {
    padding: 0,
    fontSize: fontSize.font16,
    fontFamily: fontFamily.exo_regular,
    color: Color.textInputText,
    flex: 1,
  },
  autoCompleteList: {
    height: hp(10),
    borderColor: Color.primary,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: hp(0.25),
    zIndex: 1,
  },
  rowText: {
    padding: hp(0.5),
  },
});

export default InputText;
