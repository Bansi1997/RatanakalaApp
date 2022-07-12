import React, {useState} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../helper/constants';
import {fontFamily} from '../../helper/fontFamily';
import {fontSize} from '../../helper/fontSize';
import Color from '../../helper/Color';
import SmoothPicker from '../../components/common/smoothPicker';
import {tempShapeslist} from '../../helper/tempdata';
import CommonHeader from '../common/CommomHeader';

const ModalDetail = () => {
  //shape List.................
  const [shapes_list, setShapes_list] = useState(tempShapeslist);
  const [shapeSelectedValue, setShapeSelectedValue] = useState(shapes_list[0]);
  const [shapeIndex, setShapeIndex] = useState(0);
  const [selectedShap, setSelectedShap] = useState(shapes_list[0].code);
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
        <Text style={styles.sectionTitleText}>Shape</Text>
        {console.log('shapes List..', shapes_list)}
        <SmoothPicker
          data={shapes_list}
          selectedData={index => {
            setShapeSelectedValue(shapes_list[index]),
              setShapeIndex(index),
              setSelectedShap(shapes_list[index].code),
              getRapCalcData();
          }}
          index={0}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: hp(2),
    alignItems: 'flex-start',
    marginHorizontal: wp(3),
  },
  sectionTitleText: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    alignSelf: 'flex-start',
    marginRight: wp(3),
  },
  shapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ModalDetail;
