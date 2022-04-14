import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppProvider } from './App.provider';
import BottomTabsNavigator from './screens/BottomTabs.navigator';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <BottomTabsNavigator />
        </View>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});

export default App;
