import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Appconstants from '../../../components/Appconstants';
import ViewAll from '../../../components/ViewAll/viewAll';

const Savings = props => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.savedText}>
          Saved a total of <Text style={styles.price}>₹6,480</Text> this month
          and is close to achieving one goal
        </Text>
        <View style={styles.goalContainer}>
          <View style={styles.stick} />
          <View style={styles.productContainer}>
            <Text style={styles.productText}>Playstation 5</Text>
            <Text style={[styles.savedText]}>
              <Text style={styles.price}>₹36,480 saved of</Text> ₹40,000 goal
            </Text>
          </View>
        </View>
      </View>
      <ViewAll
        title={'Add and view goals'}
        titleColor={'rgba(87, 112, 164, 0.9)'}
        themeColor={'rgba(238, 241, 243, 1)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  savedText: {
    paddingTop: 7,
    color: 'rgba(86,130,171,0.9)',
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
  },
  price: {
    color: 'rgba(17, 40, 84, 1)',
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
  },
  goalContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 0.1,
    borderRadius: Appconstants.PIXEL_RATIO[2],
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1.0,
    elevation: 1,
    alignItems: 'center',
    height: 100,
  },
  stick: {
    marginLeft: 16,
    backgroundColor: 'rgba(88, 105, 140, 0.3)',
    width: 3,
    height: '100%',
  },
  productContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  productText: {
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    color: 'rgba(49, 68, 107, 0.9)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontWeight: '600',
  },
});

export default Savings;
