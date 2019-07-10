import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}
const images = [
  // require('./assets/icons/back.png'),
  // require('./assets/icons/plants.png'),
  // require('./assets/icons/seeds.png'),
  // require('./assets/icons/flowers.png'),
  // require('./assets/icons/sprayers.png'),
  // require('./assets/icons/pots.png'),
  // require('./assets/icons/fertilizers.png'),
  // require('./assets/images/plants_1.png'),
  // require('./assets/images/plants_2.png'),
  // require('./assets/images/plants_3.png'),
  // require('./assets/images/explore_1.png'),
  // require('./assets/images/explore_2.png'),
  // require('./assets/images/explore_3.png'),
  // require('./assets/images/explore_4.png'),
  // require('./assets/images/explore_5.png'),
  // require('./assets/images/explore_6.png'),
  require('./assets/images/illustration_1.png'),
  require('./assets/images/illustration_2.png'),
  require('./assets/images/illustration_3.png'),
  // require('./assets/images/avatar.png'),

  require('./assets/images/robot-dev.png'),
  require('./assets/images/robot-prod.png'),
  require('./assets/icon.png')
];
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync(images),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
