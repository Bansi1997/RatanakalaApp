/* eslint-disable no-shadow */
/* eslint-disable react/self-closing-comp */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../../../helper/constants';
import KeyboardHandledView from '../../../components/common/KeyboardHandledView';
import {fontSize} from '../../../helper/fontSize';
import {fontFamily} from '../../../helper/fontFamily';
import Color from '../../../helper/Color';
import ShapeList from '../../../components/DiamondSearch/ShapeList';
import SizeList from '../../../components/DiamondSearch/SizeList';
import {
  tempShapeslist,
  tempSizeList,
  tempSearch_color,
  tempClarities_list,
  tempCut_list,
} from '../../../helper/tempdata'; //temperory data
import {getUniqueValues} from '../../../helper/globalFunctions';
import CommonSearchListItem from '../../../components/DiamondSearch/CommonSearchListItem';

const DimondDetail = ({isReset}) => {
  //shapelist
  const [selected_shape_list, setSelected_shape_list] = useState([]);
  const [shapeslist, setShapeslist] = useState(tempShapeslist);
  const [boolvalue, setBoolValue] = useState(false);
  //sizeList
  const [sizes_list, setSizesList] = useState(tempSizeList);
  const [showSizeView, setSizeView] = useState(false);
  const [selected_size, setSelected_size] = useState();
  const [carat_from11, setCarat_from11] = useState('');
  const [carat_to12, setCarat_to12] = useState('');
  const [carat_from21, setCarat_from21] = useState('');
  const [carat_to22, setCarat_to22] = useState('');
  const [carat_from31, setCarat_from31] = useState('');
  const [carat_to32, setCarat_to32] = useState('');
  const [carat_from41, setCarat_from41] = useState('');
  const [carat_to42, setCarat_to42] = useState('');
  //colorList
  const [search_colors, setSearch_colors] = useState(tempSearch_color);
  const [isFancy, setIsFancy] = useState(false);
  const [selected_colors, setSelected_colors] = useState([]);
  //clarityList
  const [clarities_list, setClatities_list] = useState(tempClarities_list);
  const [selected_clarities, setSelected_clarities] = useState([]);
  //Cut List
  const [cut_list, setCutList] = useState(tempCut_list);
  const [selected_Cut, setSelected_Cut] = useState([]);
  //reset all List
  const [isResetList, setIsResetList] = useState(isReset);

  //Reset or Clear all Filled data
  // resetMethod = () => {
  //   console.log('reset');
  // };
  //................Methods for Shapes..........

  const onAllShapesPresses = () => {
    console.log('All Shape');
    const shape_list = shapeslist;
    const boolVal =
      shape_list.filter(item => item.isSelected).length < shape_list.length;

    shape_list.map(item => {
      item.isSelected = boolVal;
    });
    setSelected_shape_list(shape_list);
    setShapeslist(shape_list);
    setBoolValue(!boolvalue);
  };

  const onShapItemPress = item => {
    const shape_list = shapeslist; //this.state
    if (shape_list.length > 0) {
      shape_list.some(list_item => {
        if (item.label === list_item.label) {
          list_item.isSelected = !list_item.isSelected;
          return;
        }
      });
      let selected_shape_list = shape_list.filter(
        list_item => list_item.isSelected,
      );
      setShapeslist(shape_list);
      setSelected_shape_list(selected_shape_list);
    }
  };

  //................Method for sizes.............
  const onSizeItemPress = item => {
    const size_list = sizes_list;
    if (size_list.length > 0) {
      size_list.some(list_item => {
        if (item.label === list_item.label) {
          list_item.isSelected = !list_item.isSelected;
          return;
        }
      });
      let selected_size = size_list.filter(list_item => list_item.isSelected);
      setSizesList(size_list);
      setSelected_size(selected_size);
    }
  };
  //..................Method for color
  const onColorItemPress = item => {
    const search_color = search_colors;

    if (search_color.length > 0) {
      search_color.some(list_item => {
        if (item.label === list_item.label) {
          list_item.isSelected = !list_item.isSelected;
          return;
        }
      });
      let selected_colors = search_color.filter(
        list_item => list_item.isSelected,
      );
      //this.setState({search_color, selected_colors});
      setSearch_colors(search_color);
      setSelected_colors(selected_colors);
    }
  };
  //.......method for clarity
  const onClaritiesItemPress = item => {
    const clarity_list = clarities_list;
    if (clarity_list.length > 0) {
      clarity_list.some(list_item => {
        if (item.label === list_item.label) {
          list_item.isSelected = !list_item.isSelected;
          return;
        }
      });
      let selected_clarities = clarity_list.filter(
        list_item => list_item.isSelected,
      );

      setClatities_list(clarity_list);
      setSelected_clarities(selected_clarities);
    }
  };
  //..........method for cut
  const onCutItemPress = item => {
    const cutList = cut_list;
    if (cutList.length > 0) {
      cutList.some(list_item => {
        if (item.label === list_item.label) {
          list_item.isSelected = !list_item.isSelected;
          return;
        }
      });
      let selected_cut = cutList.filter(list_item => list_item.isSelected);
      setCutList(cutList);
      setSelected_Cut(selected_cut);
    }
  };
  return (
    <View style={styles.mainContainer}>
      {isResetList && console.log('reset List')}
      {console.log('........', isResetList)}
      <KeyboardHandledView
        contentContainerStyle={styles.mainScroll}
        bounces={true}>
        {console.log('Bofore shape List .....')}
        {shapeslist.length > 0 && (
          <>
            <Text style={styles.sectionTitleText}>{'Shape'}</Text>
            <ShapeList
              shapList={shapeslist}
              moreVisible={shapeslist.length > 10}
              onItemPress={onShapItemPress}
              onAllShapesPress={onAllShapesPresses}
            />
          </>
        )}
        {sizes_list.length > 0 && (
          <SizeList
            selectedItemContainerStyle={{marginTop: hp(2)}}
            hideAll={true}
            title={'Size'}
            options={getUniqueValues(sizes_list)}
            onItemPress={onSizeItemPress}
            //onAllPress={this.onAllSizePress}
            mainContainerStyle={styles.itemContainer}
            show={showSizeView}
            onSpecific={() => setSizeView(true)}
            onGeneral={() => setSizeView(false)}
            // carat 1
            value_11={carat_from11}
            onChangeText_11={carat_from11 => setCarat_from11(carat_from11)}
            value_12={carat_to12}
            onChangeText_12={carat_to12 => setCarat_to12(carat_to12)}
            // carat 2
            value_21={carat_from21}
            onChangeText_21={carat_from21 => setCarat_from21(carat_from21)}
            value_22={carat_to22}
            onChangeText_22={carat_to22 => setCarat_to22(carat_to22)}
            // carat 3
            value_31={carat_from31}
            onChangeText_31={carat_from31 => setCarat_from31(carat_from31)}
            value_32={carat_to32}
            onChangeText_32={carat_to32 => setCarat_to32(carat_to32)}
            // carat 4
            value_41={carat_from41}
            onChangeText_41={carat_from41 => setCarat_from41(carat_from41)}
            value_42={carat_to42}
            onChangeText_42={carat_to42 => setCarat_to42(carat_to42)}
          />
        )}
        {search_colors.length > 0 && (
          <CommonSearchListItem
            hideAll={true}
            title={'Color'}
            options={search_colors}
            onItemPress={onColorItemPress}
            // onAllPress={this.onAllColorPress}
            mainContainerStyle={styles.itemContainer}
            fancyVisible={true}
            value={isFancy}
            onFancyPress={() => setIsFancy(!isFancy)}
          />
        )}
        {clarities_list.length > 0 && (
          <CommonSearchListItem
            hideAll={true}
            title={'Clarity'}
            options={clarities_list}
            onItemPress={onClaritiesItemPress}
            //onAllPress={this.onAllClaritiesPress}
            mainContainerStyle={styles.itemContainer}
          />
        )}
        {clarities_list.length > 0 && (
          <CommonSearchListItem
            hideAll={true}
            title={'Cut'}
            options={cut_list}
            onItemPress={onCutItemPress}
            //onAllPress={this.onAllClaritiesPress}
            mainContainerStyle={styles.itemContainer}
          />
        )}
      </KeyboardHandledView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainScroll: {
    alignItems: 'center',
    paddingBottom: hp(5),
  },
  sectionTitleText: {
    fontSize: fontSize.font14,
    lineHeight: fontSize.font18,
    fontFamily: fontFamily.exo_bold,
    color: Color.primary,
    marginTop: hp(2.5),
    marginBottom: hp(1.5),
    marginLeft: wp(5),
    alignSelf: 'flex-start',
  },
  itemContainer: {
    marginBottom: hp(1.25),
  },
});
export default DimondDetail;
