import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Appconstants from '../Appconstants';

const ViewAll = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.themeColor}]}>
      <Text style={[styles.text, {color: props.titleColor}]}>
        {props.title}
      </Text>
      <Image
        style={{tintColor: props.titleColor, marginTop: 5, marginLeft: 4}}
        resizeMode="center"
        source={require('../../assets/right.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    paddingLeft: 14,
  },
});

export default ViewAll;
