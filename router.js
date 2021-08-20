import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from './src/screens/Profile/Profile';
import Dashboard from './src/screens/Dashboard/Dashboard';

const MainStack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <MainStack.Screen name="Profile" component={Profile} />
      <MainStack.Screen name="Dashboard" component={Dashboard} />
    </MainStack.Navigator>
  );
};

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
