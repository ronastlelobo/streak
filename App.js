import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './router';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const App: () => Node = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
