import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
GestureHandlerRootView;
import * as Font from 'expo-font';

const getFont = async () => {
  await Font.loadAsync({
    semibold: require('./src/assets/fonts/SUIT-SemiBold.ttf'),
    medium: require('./src/assets/fonts/SUIT-Medium.ttf'),
    bold: require('./src/assets/fonts/SUIT-Bold.ttf'),
    extrabold: require('./src/assets/fonts/SUIT-ExtraBold.ttf'),
  });
};

function App() {
  useEffect(() => {
    getFont();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
