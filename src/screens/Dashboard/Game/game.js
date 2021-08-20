import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Appconstants from '../../../components/Appconstants';
import ViewAll from '../../../components/ViewAll/viewAll';
import LinearGradient from 'react-native-linear-gradient';

const Game = props => {
  const [gameCount, setGameCount] = useState([]);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Streak-Tech/assigment/main/data.json',
    )
      .then(resp => resp.json())
      .then(result => {
        setGameCount(result.numbers);
      });
  }, []);
  const Border = ({val}) => {
    return (
      <View style={styles.border1}>
        <View style={styles.border2}>
          <LinearGradient
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            colors={Appconstants.LINEAR_GRADIENT.BR}
            style={styles.linearGradient}>
            <Text style={styles.numberText}>{val}</Text>
          </LinearGradient>
        </View>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.itemContainer}>
        <View style={styles.container}>
          <Border val={gameCount[0]} />
          <Border val={gameCount[1]} />
          <Border val={gameCount[2]} />
          <Border val={gameCount[3]} />
        </View>
        <View style={styles.prizesContainer}>
          <Text style={styles.prizesText}>
            Win prizes worth ₹4000 or more.{' '}
          </Text>
          <View style={styles.tryYourLuckContainer}>
            <Text style={styles.tryYourLuck}>Try your luck</Text>
          </View>
        </View>
      </View>
      <ViewAll
        title={'View all games'}
        titleColor={'rgba(163, 80, 62, 1)'}
        themeColor={'rgba(242, 233, 225, 1)'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  savedText: {
    paddingVertical: 20,
    color: 'rgba(86,130,171,0.9)',
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
  },
  price: {
    color: 'rgba(17, 40, 84, 1)',
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
    fontWeight: '600',
  },
  container: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#F9EEEB',
    marginTop: 15,
    height: Appconstants.PIXEL_RATIO[50],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  border1: {
    width: '20%',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#EBD7CC',
    shadowColor: '#ffffff',
    opacity: 0.8,
    height: '70%',
  },
  border2: {
    width: '100%',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#E0CDC2',
    shadowColor: '#ffffff',
    opacity: 0.75,
    height: '100%',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  numberText: {
    color: 'rgba(99, 30, 0, 1)',
    fontSize: 60,
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontWeight: '600',
  },
  prizesText: {
    color: 'rgba(171, 96, 79, 1)',
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontSize: Appconstants.PIXEL_RATIO['18PX'],
  },
  prizesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  tryYourLuckContainer: {
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'rgba(171, 96, 79, 1)',
    height: Appconstants.PIXEL_RATIO[14],
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryYourLuck: {
    color: '#FFFFFF',
    fontSize: Appconstants.PIXEL_RATIO['16PX'],
    fontFamily: Appconstants.FONT_FAMILY.BARLOW_BOLD,
    fontWeight: '600',
  },
});

export default Game;
