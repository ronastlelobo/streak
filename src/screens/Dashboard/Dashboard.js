import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  PixelRatio,
  Image,
  Animated,
} from 'react-native';
import {useSelector} from 'react-redux';
import Appconstants from '../../components/Appconstants';
import {styles} from '../Dashboard/dashboard.style';
import Game from './Game/game';
import RecentTransactions from './RecentTransactions/recentTransactions';
import Savings from './Savings/savings';

const Dashboard = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnimButtom = useRef(new Animated.Value(0)).current;
  const animatedBottom = new Animated.Value(180);
  const profileDetailsState = useSelector(state => state);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnimButtom, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedBottom, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={{
            width: '100%',
          }}
          source={require('../../assets/gradient.png')}
          resizeMode="cover">
          <View style={styles.mainHorizontalPadding}>
            <View style={styles.header}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.logoImage}
              />
              <View style={styles.profile}>
                <View style={{flex: 0.3}}>
                  <Image
                    style={styles.photo}
                    source={require('../../assets/photo.png')}
                  />
                </View>
                <Text numberOfLines={1} style={styles.profileText}>
                  {profileDetailsState.details.firstName === ''
                    ? 'Andy'
                    : profileDetailsState.details.firstName}
                </Text>
                <Image
                  style={{flex: 0.3}}
                  resizeMode="center"
                  source={require('../../assets/down.png')}
                />
              </View>
            </View>
          </View>
          <Animated.View
            style={{
              opacity: fadeAnimButtom,
            }}>
            <View style={[styles.mainHorizontalPadding, {paddingTop: 18}]}>
              <View style={styles.topCard}>
                <View style={styles.bottomCardPadding}>
                  <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Balance</Text>
                    <Image
                      resizeMode="center"
                      source={require('../../assets/hide.png')}
                    />
                  </View>
                  <Text style={styles.balanceTextCost}>₹12,000</Text>
                </View>
                <Image
                  style={{position: 'absolute', right: 0}}
                  source={require('../../assets/bglogo.png')}
                />
              </View>
              <View style={styles.bottomCard}>
                <View style={styles.bottomCardPadding}>
                  <Text style={styles.savingsText}>Savings</Text>
                  <View style={styles.savingsContainer}>
                    <Text style={styles.savingsTextCost}>₹36,800</Text>
                    <View style={styles.saveMoreContainer}>
                      <Text style={styles.saveMoreText}>Save more</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
          <View style={{height: 10}} />
          <Animated.View
            style={{
              opacity: fadeAnim,
            }}>
            <View style={styles.mainHorizontalPadding}>
              <View style={styles.payOptionsContainer}>
                <View style={styles.scanCode}>
                  <Text style={styles.scanText}>Scan code</Text>
                  <Image source={require('../../assets/scan.png')} />
                </View>
                <View style={styles.gotoContainer}>
                  <Image
                    resizeMode="center"
                    source={require('../../assets/arrow.png')}
                  />
                </View>
                <View style={styles.gotoContainer}>
                  <Image
                    resizeMode="center"
                    source={require('../../assets/menu.png')}
                  />
                </View>
              </View>
            </View>
          </Animated.View>
        </ImageBackground>

        <Animated.View style={[{transform: [{translateY: animatedBottom}]}]}>
          <View style={styles.mainHorizontalPadding2}>
            <View style={styles.recentTransactions}>
              <Text style={styles.recentTransactionsText}>
                Recent transactions
              </Text>
              <RecentTransactions />
            </View>
          </View>
          <View style={styles.mainHorizontalPadding2}>
            <View style={styles.savingsTab}>
              <Text style={styles.savingsTabText}>Andy's Savings</Text>
              <Savings />
            </View>
          </View>
          <View style={styles.mainHorizontalPadding2}>
            <View style={styles.game}>
              <Text style={styles.gameText}>Game of the day</Text>
              <Game />
            </View>
          </View>
          <View style={styles.parentalControlContainer}>
            <View style={styles.parentalControl}>
              <Text style={styles.pc}>Parental controls</Text>
              <Image source={require('../../assets/setting.png')} />
            </View>
          </View>
          <Image
            style={{position: 'absolute', bottom: 0, left: 0}}
            source={require('../../assets/flag.png')}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
