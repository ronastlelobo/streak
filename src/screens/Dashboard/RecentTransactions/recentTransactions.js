import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Appconstants from '../../../components/Appconstants';
import ViewAll from '../../../components/ViewAll/viewAll';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Food & Drinks',
    time: '02:30 pm',
    cost: '-₹50',
    type: 'sale',
    img: require('../../../assets/burger.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Store sale',
    time: 'Jun - 4:30 PM',
    cost: '-₹140',
    type: 'sale',
    img: require('../../../assets/bill.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Money credited',
    time: 'Jun - 12:30 PM',
    cost: '+₹4500',
    type: 'sale',
    img: require('../../../assets/credit.png'),
  },
];

const RecentTransactions = () => {
  const renderItem = item => {
    return (
      <View key={item.id}>
        <View style={styles.item}>
          <View style={styles.left}>
            <Image source={item.img} />
            <View style={styles.timeTitleContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.timeTitle}>{item.time}</Text>
            </View>
          </View>
          <Text
            style={[
              styles.costText,
              item.title === 'Money credited' && {color: 'rgba(0, 96, 10, 1)'},
            ]}>
            {item.cost}
          </Text>
        </View>
        <View style={styles.divider} />
      </View>
    );
  };

  const divider = () => {
    return <View style={styles.divider} />;
  };

  return (
    <View style={styles.container}>
      {DATA.map(val => {
        return renderItem(val);
      })}
      <ViewAll
        title={'All transactions '}
        titleColor={'rgba(166, 85, 168, 0.9)'}
        themeColor={'rgba(234, 225, 242, 0.45)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
  },
  item: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 14,
    paddingRight: 20,
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  timeTitleContainer: {
    paddingLeft: 20,
  },
  title: {
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '600',
  },
  timeTitle: {
    fontSize: Appconstants.PIXEL_RATIO['14PX'],
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    color: 'rgba(0, 0, 0, 0.3)',
    fontWeight: '600',
  },
  divider: {
    borderWidth: 0.7,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  costText: {
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontFamily: Appconstants.FONT_FAMILY.IBMPM_BOLD,
    fontWeight: '600',
  },
});

export default RecentTransactions;
