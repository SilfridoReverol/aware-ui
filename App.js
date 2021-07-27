import React, { useState } from 'react';
import { useAssets } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import AwareNavigator from './navigation/AwareNavigator';

// const fetchAssets = () => {
//   return Asset.loadAsync({
//     'aware-bg': require('./assets/aware-bg.png'),
//   });
// };

export default function App() {
  const [assets] = useAssets([
    require('./assets/aware-bg.png'),
    require('./assets/nobg-awarelogo.png'),
    require('./assets/aware-nobg.png'),
  ]);

  if (!assets) {
    return <AppLoading />;
  }

  return <AwareNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
