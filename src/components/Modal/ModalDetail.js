import React, {useState} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';
import SmoothPicker from '../../components/common/smoothPicker';
import {
  tempShapeslist,
  tempSearch_color,
  tempClarities_list,
  tempCut_list,
  tempSym_list,
  tempPol_list,
  tempFlor_list,
} from '../../helper/tempdata';
import InputText from '../../components/common/TextInput';

const ModalDetail = () => {
  //shape List.................
  const [shapes_list, setShapes_list] = useState(tempShapeslist);
  const [shapeSelectedValue, setShapeSelectedValue] = useState(shapes_list[1]);
  const [shapeIndex, setShapeIndex] = useState(1);
  const [selectedShap, setSelectedShap] = useState(shapes_list[1].code);
  //color List..........
  const [search_colors, setSelected_colors] = useState(tempSearch_color);
  const [colorSelectedValue, setColorSelectedValue] = useState(0);
  let mIndex = search_colors.findIndex(i => i.label === 'M');
  //clarity list.........
  const [clarities_list, setClarities_list] = useState(tempClarities_list);
  const [claritySelectedValue, setClaritySelectedValue] = useState(0);
  //cut list.......
  const [cut_list, setCut_list] = useState(tempCut_list);
  const [cutSelectedValue, setCutSelectedValue] = useState(0);
  //symatric list.......
  const [sym_list, setSym_list] = useState(tempSym_list);
  const [symSelectedValue, setSymSelectedValue] = useState(0);
  //Polish list..........
  const [polish_list, setPolish_list] = useState(tempPol_list);
  const [polishSelectedValue, setPolishSelectedValue] = useState(0);
  //Floor List
  const [flor_list, setFlor_list] = useState(tempFlor_list);
  const [florSelectedValue, setFlorSelectedValue] = useState(flor_list[1]);
  //carat
  const [carat, setCarat] = useState('');

  //method........
  const getRapCalcData = caratText => {
    const shapeSelectedValue = shapeSelectedValue;
    const carat = '';
    const colorSelectedValue = '';
    const claritySelectedValue = '';
    const rapSelectedValue = '';

    if (
      shapeSelectedValue &&
      (carat || caratText) &&
      colorSelectedValue &&
      claritySelectedValue &&
      rapSelectedValue !== null
    ) {
      // var result = this.state.rap.filter((item) => {
      //   return parseFloat(item) === parseFloat(rapSelectedValue);
      // });

      // if (result.length > 0) {
      let dataObj = {
        shapes: [shapeSelectedValue.code],
        // carats: [{from: caratText ? caratText : carat}, {to}, {}, {}],
        carats: this.handleCaratSize(carat),
        colors: [colorSelectedValue],
        clarities: [claritySelectedValue],
        advance: {
          rapDiscount: {
            from: rapSelectedValue,
          },
        },
      };
      this.props
        .getRepCalData(dataObj, 1)
        .then(res => {
          if (res) {
            const {rapCalcData} = this.props;
            if (rapCalcData && !rapCalcData.pricePerCt) {
              this.props.clearRepCalData(1);
            }
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.shapeContainer}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>Shape</Text>
        </View>

        <SmoothPicker
          data={shapes_list}
          selectedData={index => {
            setShapeSelectedValue(shapes_list[index]),
              setShapeIndex(index),
              setSelectedShap(shapes_list[index].code),
              getRapCalcData();
          }}
          index={1}
        />
      </View>

      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Color'}</Text>
        </View>

        <SmoothPicker
          data={search_colors.slice(0, mIndex + 1)}
          selectedData={index => {
            setColorSelectedValue(index + 1), getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Clarity'}</Text>
        </View>

        <SmoothPicker
          data={clarities_list}
          selectedData={index => {
            setClaritySelectedValue(clarities_list[index].code),
              getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Cut'}</Text>
        </View>

        <SmoothPicker
          data={cut_list}
          selectedData={index => {
            setCutSelectedValue(cut_list[index].code), getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Sym'}</Text>
        </View>

        <SmoothPicker
          data={sym_list}
          selectedData={index => {
            setSymSelectedValue(sym_list[index].code), getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Pol'}</Text>
        </View>

        <SmoothPicker
          data={polish_list}
          selectedData={index => {
            setPolishSelectedValue(polish_list[index].code), getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <View style={styles.nameWrapper}>
          <Text style={styles.sectionTitleText}>{'Flor'}</Text>
        </View>

        <SmoothPicker
          data={flor_list}
          selectedData={index => {
            setFlorSelectedValue(flor_list[index]), getRapCalcData();
          }}
          index={2}
        />
      </View>
      <View style={styles.smoothPickerStyle}>
        <Text style={[styles.sectionTitleText, {paddingTop: hp(2)}]}>
          {'Carat'}
        </Text>
        <InputText
          placeholder={'Carat'}
          value={carat}
          onChangeText={carat => setCarat(carat)}
          autoCapitalize={'none'}
          keyboardType={'decimal-pad'}
          returnKeyType="done"
          returnKeyLabel="done"
          mainContainerStyle={styles.mainContainerStyle}
        />
        <View style={[styles.mainContainerStyle, {marginTop: hp(0.8)}]}>
          <TouchableOpacity
            style={{
              backgroundColor: Color.secondaryBackground,
              alignItems: 'center',
              paddingVertical: hp(1.5),
              borderRadius: 10,
              marginHorizontal: wp(3),
            }}
            onPress={() => {
              console.log('Show data');
            }}>
            <Text style={styles.buttonText}>{'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-start',
    marginHorizontal: wp(5),
  },
  sectionTitleText: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginRight: wp(3),
    paddingTop: hp(0.3),
    // backgroundColor: 'red',
  },
  shapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  smoothPickerStyle: {
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrapper: {flex: 0.2},
  mainContainerStyle: {
    flex: 1 / 2,
  },
  buttonText: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    //alignSelf: 'flex-start',
    marginRight: wp(3),
    paddingTop: hp(0.3),
  },
});
export default ModalDetail;
